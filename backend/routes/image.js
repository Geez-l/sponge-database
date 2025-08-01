/* Handling of image routes in the backend from the supabase storage */
const express = require("express");
const router = express.Router();
const pool = require("../backend");

router.get("/", async (req, res) => {
  const { otu_id } = req.query;
  console.log("Received request for images with otu_id:", otu_id);

  if (!otu_id) {
    return res.status(400).json({ error: "otu id or sample_id is required" });
  }
  try {
    const query = `SELECT
        otu_id, otu_image_url, sample_image_url, otu_img_fname, sample_img_fname
        FROM image
        WHERE otu_id = $1`;

    const params = [otu_id];
    const result = await pool.query(query, params);

    const base =
      "https://frckjzkmelttjzkabepe.supabase.co/storage/v1/object/public/sponge";

    const images = result.rows.map((row) => ({
      id: row.otu_id,
      otuImageUrl: row.otu_image_url || `${base}/otu/${row.otu_img_fname}`,
      sampleImageUrl:
        row.sample_image_url || `${base}/sample/${row.sample_img_fname}`,
    }));

    res.json({ success: true, data: images });
  } catch (err) {
    console.error("Error fetching images", err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

module.exports = router;
