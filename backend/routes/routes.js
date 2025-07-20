const express = require('express');
const router = express.Router();
const pool = require('../backend');

/*== Testing the connections ==*/
// router.get('/sponge-db', async (req, res) => {
//     try{
//         const result = await pool.query('SELECT NOW()');
//         res.json({status: 'Success', time: result.rows[0].now});
//     } catch(err) {
//         console.error(err);
//         res.status(500).json({status:'Error', message:err.message});
//     }

// });
router.get('/sponge-db', (req, res) => {
    res.send('Route is working!');
  });

router.get('/sponge-db', (req, res) => {
  res.send('Route is working!');
});

module.exports = router;