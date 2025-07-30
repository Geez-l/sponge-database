
-- =========================================
-- Initial Database Setup Script
--==========================================


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


-- =========================================
-- 12. Insert into sample using FK resolution
-- =========================================
INSERT INTO sample (
    otu_id, date_collected, location_id, depth, dive_no,
    researcher_id, sample_code, barcode_sequences
)
SELECT 
    s.otu_id,
    s.date_collected,
    l.location_id,
    s.depth,
    s.dive_no,
    r.researcher_id,
    s.sample_code,
    s.barcode_sequences
FROM sample_staging s
JOIN location l ON s.location_name = l.location_name AND s.site_name = l.site_name
JOIN researcher r ON s.initials = r.initials AND s.name = r.name;

-- =========================================
-- Execute after creating the tables
-- =========================================

-- =========================================
-- 11.1 Insert unique locations into location table
-- =========================================
INSERT INTO location(location_name, site_name)
SELECT DISTINCT location_name, site_name FROM sample_staging
ON CONFLICT ON CONSTRAINT unique_location_site DO NOTHING;

-- =========================================
-- 11.2 Insert unique researchers into researcher table
-- =========================================
INSERT INTO researcher(name, initials)
SELECT DISTINCT name, initials FROM sample_staging
ON CONFLICT ON CONSTRAINT unique_researcher DO NOTHING;

-- =========================================
-- 12. Insert data into sample table from the staging
-- =========================================

INSERT INTO sample (
    otu_id, date_collected, location_id, depth, dive_no,
    researcher_id, sample_code, barcode_sequences
)
SELECT 
    s.otu_id,
    s.date_collected,
    l.location_id,
    s.depth,
    s.dive_no,
    r.researcher_id,
    s.sample_code,
    s.barcode_sequences
FROM sample_staging s
JOIN location l ON s.location_name = l.location_name AND s.site_name = l.site_name
JOIN researcher r ON s.initials = r.initials AND s.name = r.name;

-- =========================================
-- 13. Inserting the barcode sequence
-- =========================================

INSERT INTO barcode (sample_id, barcode_sequence)
SELECT sam.sample_id, s.barcode_sequences
FROM sample_staging s
JOIN sample sam ON 
    sam.sample_code = s.sample_code
    AND sam.date_collected = s.date_collected
WHERE s.barcode_sequences IS NOT NULL AND s.barcode_sequences <> '';


-- =========================================
-- 14. Creating the image table with the otu id and respective urls
-- =========================================

CREATE TABLE image (
    otu_id INTEGER,
    otu_image_url TEXT,
    sample_image_url TEXT,
    otu_img_fname TEXT,
    sample_img_fname TEXT
);


-- =====================================================================
-- Note : the queries above were designed to ensure that the database --
-- was set up correctly with necessary constraints and relationships. --
-- Additionally, some queries were run separately and compiled in one --
-- single file for documentation purposes.                            --
-- =====================================================================
