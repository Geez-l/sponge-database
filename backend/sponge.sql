-- =========================================
-- 1. Ensure pgcrypto extension is enabled
-- =========================================
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- =========================================
-- 2. Drop tables in reverse dependency order
-- =========================================
DROP TABLE IF EXISTS barcode CASCADE;
DROP TABLE IF EXISTS image CASCADE;
DROP TABLE IF EXISTS sample CASCADE;
DROP TABLE IF EXISTS sample_staging CASCADE;
DROP TABLE IF EXISTS researcher CASCADE;
DROP TABLE IF EXISTS location CASCADE;
DROP TABLE IF EXISTS otu CASCADE;

-- =========================================
-- 3. OTU Table
-- =========================================
CREATE TABLE otu (
    otu_id SERIAL PRIMARY KEY,
    functional_form VARCHAR(100),
    growth_form VARCHAR(100),
    color VARCHAR(100),
    surface_texture VARCHAR(100),
    oscule_shape TEXT,
    oscule_distribution VARCHAR(100),
    ostia VARCHAR(100),
    count_no INTEGER,
    putative_id VARCHAR(255)
);

-- =========================================
-- 4. Location Table (with uniqueness constraint)
-- =========================================
CREATE TABLE location (
    location_id SERIAL PRIMARY KEY,
    location_name VARCHAR(255) NOT NULL,
    site_name VARCHAR(255),
    CONSTRAINT unique_location_site UNIQUE (location_name, site_name)
);

-- =========================================
-- 5. Researcher Table (with uniqueness constraint)
-- =========================================
CREATE TABLE researcher (
    researcher_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    initials VARCHAR(10),
    CONSTRAINT unique_researcher UNIQUE (name, initials)
);

-- =========================================
-- 6. Sample Table
-- =========================================
CREATE TABLE sample (
    sample_id TEXT PRIMARY KEY,
    otu_id INTEGER,
    date_collected DATE NOT NULL,
    location_id INTEGER,
    depth FLOAT,
    dive_no INTEGER,
    researcher_id INTEGER,
    sample_code VARCHAR(100),
    skeletal_notes TEXT,
    barcode_sequences TEXT,
    FOREIGN KEY (otu_id) REFERENCES otu(otu_id) ON DELETE SET NULL,
    FOREIGN KEY (location_id) REFERENCES location(location_id) ON DELETE SET NULL,
    FOREIGN KEY (researcher_id) REFERENCES researcher(researcher_id) ON DELETE SET NULL
);

-- =========================================
-- 7. Image Table
-- =========================================
CREATE TABLE image (
    image_id SERIAL PRIMARY KEY,
    related_otu_id INTEGER,
    related_sample_id TEXT,
    image_url TEXT NOT NULL,
    FOREIGN KEY (related_otu_id) REFERENCES otu(otu_id) ON DELETE SET NULL,
    FOREIGN KEY (related_sample_id) REFERENCES sample(sample_id) ON DELETE SET NULL
);

-- =========================================
-- 8. Barcode Table
-- =========================================
CREATE TABLE barcode (
    barcode_id SERIAL PRIMARY KEY,
    sample_id TEXT NOT NULL,
    barcode_sequence TEXT,
    FOREIGN KEY (sample_id) REFERENCES sample(sample_id) ON DELETE CASCADE
);

-- =========================================
-- 9. Trigger to generate sample_id
-- =========================================
CREATE OR REPLACE FUNCTION set_sample_id()
RETURNS TRIGGER AS $$
BEGIN
  NEW.sample_id := encode(
    digest(
      coalesce(NEW.date_collected::text, '') || '-' ||
      coalesce(NEW.sample_code, '') || '-' ||
      coalesce(NEW.otu_id::text, '')
    , 'sha256'),
  'hex');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_set_sample_id
BEFORE INSERT ON sample
FOR EACH ROW
WHEN (NEW.sample_id IS NULL)
EXECUTE FUNCTION set_sample_id();

-- =========================================
-- 10. Create staging table for CSV import
-- =========================================
CREATE TABLE sample_staging (
    otu_id INTEGER,
    date_collected DATE,
    location_name VARCHAR,
    site_name VARCHAR,
    depth FLOAT,
    dive_no INTEGER,
    initials VARCHAR,
    name VARCHAR,
    sample_code VARCHAR,
    barcode_sequences TEXT
);

