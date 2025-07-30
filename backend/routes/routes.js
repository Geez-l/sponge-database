/* Handling of home dropdowns */

"use client";
const express = require("express");
const router = express.Router();
const pool = require("../backend");
const fs = require("fs");
const path = require("path");

/* FUNCTIONAL FORMS */
router.get("/functional_form", async (req, res) => {
  try {
    const result = await pool.query("SELECT DISTINCT functional_form FROM otu");
    res.json({
      success: true,
      data: result.rows.map((row) => row.functional_form),
    });
  } catch (err) {
    console.error("Error fetching functional form", err);
    res.status(500).json({ error: "Failed to fetch functional form" });
  }
});

/* COLORS */
router.get("/colors", async (req, res) => {
  try {
    const result = await pool.query("SELECT DISTINCT color FROM otu");
    res.json({ success: true, data: result.rows.map((row) => row.color) });
  } catch (err) {
    console.error("Error fetching color", err);
    res.status(500).json({ error: "Failed to fetch colors" });
  }
});

/* PUTATIVE ID */
router.get("/putative_id", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT DISTINCT putative_id FROM otu WHERE putative_id <> 'unknown'"
    );
    res.json({
      success: true,
      data: result.rows.map((row) => row.putative_id),
    });
  } catch (err) {
    console.error("Error fetching putative_id", err);
    res.status(500).json({ error: "Failed to fetch putative_id" });
  }
});

/* LOCATION */
router.get("/location", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT DISTINCT location_name FROM location"
    );
    res.json({
      success: true,
      data: result.rows.map((row) => row.location_name),
    });
  } catch (err) {
    console.error("Error fetching location", err);
    res.status(500).json({ error: "Failed to fetch location" });
  }
});

/* Testing the connections */
router.get("/sponge-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "Success", time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: err.message });
  }
});

router.get("/samples", async (req, res) => {
  const {
    functional_form,
    color,
    putative_id,
    location,
    limit = 50,
    offset = 0,
  } = req.query;

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
    console.error("Error fetching samples:", err);
    res.status(500).json({ error: "Failed to fetch samples" });
  }
});

module.exports = router;
