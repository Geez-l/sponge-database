
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
-- 12.1 Insert unique locations into location table
-- =========================================
INSERT INTO location(location_name, site_name)
SELECT DISTINCT location_name, site_name FROM sample_staging
ON CONFLICT ON CONSTRAINT unique_location_site DO NOTHING;

-- =========================================
-- 12.2 Insert unique researchers into researcher table
-- =========================================
INSERT INTO researcher(name, initials)
SELECT DISTINCT name, initials FROM sample_staging
ON CONFLICT ON CONSTRAINT unique_researcher DO NOTHING;
