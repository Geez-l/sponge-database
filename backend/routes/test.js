const express = require('express');
const router = express.Router();
const pool = require('../backend');

/*== Testing the connections ==*/
router.get('/test-db', async (req, res) => {
    try{
        const result = await pool.query('SELECT NOW()');
        res.json({status: 'Success', time: result.row[0].now});
    } catch(err) {
        console.error(err);
        res.status(500).json({status:'Error', message:err.message});
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