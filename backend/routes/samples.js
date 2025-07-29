/* Handling of information in the results details page with respective otu & sample information*/

"use client";
const express = require("express");
const router = express.Router();
const pool = require("../backend");

router.get("/:otu_id", async (req, res) => {
  const { otu_id } = req.params;

  if (isNaN(otu_id)) {
    return res.status(400).json({ success: false, error: "Invalid OTU ID" });
  }

  const query = `
        SELECT
            s.sample_id,
            o.otu_id,
            o.color,
            o.growth_form,
            o.functional_form,
            o.surface_texture,
            o.putative_id,
            o.oscule_shape,
            o.oscule_distribution,
            o.ostia,
            l.location_name,
            l.site_name,
            s.depth,
            s.dive_no,
            r.name AS researcher_name,
            s.sample_code,
            s.barcode_sequences

        FROM sample s
        JOIN location l ON s.location_id = l.location_id
        JOIN researcher r ON s.researcher_id = r.researcher_id
        JOIN otu o ON s.otu_id = o.otu_id
        WHERE s.otu_id = $1
        LIMIT 1
    `;

  try {
    const result = await pool.query(query, [otu_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Sample not found" });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error("Error fetching sample data:", err);
    res.status(500).json({ error: "Failed to fetch sample" });
  }
});

module.exports = router;
