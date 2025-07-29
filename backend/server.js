"use client";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/routes");
const imageRoutes = require("./routes/image");
const sampleRoutes = require("./routes/samples");
const searchRoutes = require("./routes/search");

const app = express();

//middleware
app.use(cors());

app.use(express.json());

// use routes defined in routes folder
app.use("/api", routes);
app.use("/api/images", imageRoutes);
app.use("/api/samples/search", searchRoutes);
app.use("/api/samples", sampleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
