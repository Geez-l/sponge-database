const express = require('express');
const router = express.Router();
const pool = require('../backend');
const  fs = require('fs');
const path = require('path');


/*                          CSV 
OTU: otu_id,functional_form,growth_form,color,surface_texture,
oscule_shape,oscule_distribution,ostia,count_no,putative_id

Sample: otu_id,date_collected,location_name,site_name,depth,
dive_no,initials,name,sample_code,barcode_sequences

                          PG
barcode: barcode_id, sample_id, barcode_sequence
image: image_id, related_otu_id, related_sample_id, sample_image_url,
otu_image_url
location: location_id, location_name, site_name
otu: otu_id, functional_form, growth_form, color, surface_texture, oscule_shape,
oscule_distribution, ostia, count_no, putative_id
researcher: researcher_id, name, initials
sample: sample_id, otu_id, date_collected, location_id, depth, dive_no, researcher_id,
sample_code, skeletal_notes
*/

/*== FUNCRIONAL FORMS ==*/ 
router.get('/functional_form', async(req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT functional_form FROM otu');
    res.json({success:true, data: result.rows.map(row => row.functional_form) });
  } catch (err) {
    console.error('Error fetching functional form',err);
    res.status(500).json({error: 'Failed to fetch functional form'});
  }
});

/*== COLORS ==*/
router.get('/colors', async (req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT color FROM otu');
    res.json({success:true, data: result.rows.map(row => row.color) });
  } catch (err) {
    console.error('Error fetching color', err);
    res.status(500).json({error: 'Failed to fetch colors'});
  }
}); 

/*== PUTATIVE ID ==*/ 
router.get('/putative_id', async (req, res) => {
  try {
    const result = await pool.query("SELECT DISTINCT putative_id FROM otu WHERE putative_id <> 'unknown'");
    res.json({success:true, data: result.rows.map(row => row.putative_id) });
  } catch (err) {
    console.error('Error fetching putative_id', err);
    res.status(500).json({error: 'Failed to fetch putative_id'});
  }
}); 

/*== LOCATION ==*/ 
router.get('/location', async (req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT location_name FROM location');
    res.json({success:true, data: result.rows.map(row => row.location_name) });
  } catch (err) {
    console.error('Error fetching location', err);
    res.status(500).json({error: 'Failed to fetch location'});
  }
}); 

/*== Testing the connections ==*/
router.get('/sponge-db', async (req, res) => {
    try{
        const result = await pool.query('SELECT NOW()');
        res.json({status: 'Success', time: result.rows[0].now});
    } catch(err) {
        console.error(err);
        res.status(500).json({status:'Error', message:err.message});
    }

});

router.get('/samples', async (req, res) => {
  const { functional_form, color, putative_id, location, limit = 50, offset = 0 } = req.query;

  let query = `
    SELECT
      s.sample_id,
      o.otu_id,
      l.location_name,
      l.site_name,
      o.color,
      o.growth_form,
      o.functional_form,
      o.surface_texture,
      o.putative_id,
      s.date_collected
    FROM sample s
    JOIN otu o ON s.otu_id = o.otu_id
    JOIN location l ON s.location_id = l.location_id
    WHERE 1=1
  `;

  const values = [];

  if (functional_form) {
    values.push(functional_form);
    query += ` AND o.functional_form ILIKE $${values.length}`;
  }
  if (color) {
    values.push(color);
    query += ` AND o.color ILIKE $${values.length}`;
  }
  if (putative_id) {
    values.push(putative_id);
    query += ` AND o.putative_id ILIKE $${values.length}`;
  }
  if (location) {
    values.push(location);
    query += ` AND l.location_name ILIKE $${values.length}`;
  }

  values.push(limit, offset);
  query += ` LIMIT $${values.length - 1} OFFSET $${values.length}`;

  try {
    const result = await pool.query(query, values);
    res.json({ success: true, data: result.rows });
  } catch (err) {
    console.error('Error fetching samples:', err);
    res.status(500).json({ error: 'Failed to fetch samples' });
  }
});


router.get('/debug-otu', async (req, res) => {
    try {
        const result = await pool.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'otu'
    `);
        res.json(result.rows);
    } catch (err) {
        console.error('Debug OTU table failed:', err);
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;