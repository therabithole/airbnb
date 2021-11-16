const express = require("express");
const router = express.Router();
const { Proper } = require("../models/ho");

router.get("/", async (req, res) => {
  const h = await Proper.find();
  res.send(h);
});

module.exports = router;
