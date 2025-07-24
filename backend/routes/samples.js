const express = require('express');
const router = express.Router();
const pool = require('../backend');

router.get('/:otu_id', async (req, res) => {
    const { otu_id } = req.params;

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
        JOIN location l ON s.location_id = l.location_id
        JOIN otu o ON s.otu_id = o.otu_id
        WHERE s.otu_id = $1
        LIMIT 1
    `;

    try {
        const { rows } = await pool.query(query, [otu_id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Sample not found' });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error('Error fetching sample data:', err);
        res.status(500).json({ error: 'Failed to fetch sample' });
    }
});

module.exports = router;
