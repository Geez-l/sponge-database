const express = require('express');
const router = express.Router();
const { getDriveClient } = require('../utils/drive');
const pool = require('../backend');

router.get('/', async (req, res) => {
    const {otu_id} = req.query;
    console.log('Received request for images with otu_id:',otu_id)

    if (!otu_id){
        return res.status(400).json({error:'otu id or sample_id is required'});
    }
    try {
        const query = 'SELECT image_id, otu_image_url, sample_image_url FROM image WHERE related_otu_id = $1';
        const params = [otu_id];
        const result = await pool.query(query, params);

        const images = result.rows.map(row =>({
            id: row.image_id,
            otuImageUrl: row.otu_image_url,
            sampleImageUrl: row.sample_image_url
        }));

        res.json({success:true, data:images});
    } catch (err) {
        console.error('Error fetching images', err);
        res.status(500).json({error: 'Failed to fetch images'});

    }
});

module.exports = router;