require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');


const app = express();

//middleware
app.use(cors());

app.use(express.json());

// use routes defined in routes folder
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
