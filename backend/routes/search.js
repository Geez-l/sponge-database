/* Handling searching in the search bar*/

"use client";
const express = require("express");
const router = express.Router();
const { getDriveClient } = require("../utils/drive");
const pool = require("../backend");

router.get("/", async (req, res) => {
  const { search, limit = 50, offset = 0 } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Search keyword is required" });
  }

  const searchTerm = `%${search}%`;

  const query = `
    SELECT
      s.sample_id,
      o.otu_id,
      l.location_name,
      l.site_name,
      o.color,
      o.growth_form,
      o.functional_form,
      o.surface_texture,
      o.putative_id
    FROM sample s
    JOIN otu o ON s.otu_id = o.otu_id
    JOIN location l ON s.location_id = l.location_id
    WHERE 
      s.sample_code ILIKE $1 OR
      o.putative_id ILIKE $1 OR
      l.location_name ILIKE $1 OR
      o.oscule_shape ILIKE $1 OR
      o.oscule_distribution ILIKE $1 OR
      o.ostia ILIKE $1 OR
      o.growth_form ILIKE $1 OR
      CAST(o.count_no AS TEXT) ILIKE $1 OR
      o.surface_texture ILIKE $1 OR
      o.functional_form ILIKE $1 OR
      o.color ILIKE $1 OR
      CAST(o.otu_id AS TEXT) ILIKE $1 OR
      CAST(s.depth AS TEXT) ILIKE $1 OR
      CAST(s.dive_no AS TEXT) ILIKE $1 OR
      s.barcode_sequences ILIKE $1
    LIMIT $2 OFFSET $3
  `;

  try {
    const result = await pool.query(query, [searchTerm, limit, offset]);
    res.json({ success: true, data: result.rows });
  } catch (err) {
    console.error("Error during global search:", err);
    res.status(500).json({ error: "Failed to perform global search" });
  }
});

module.exports = router;
