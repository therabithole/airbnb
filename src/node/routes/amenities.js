const { Amenity, validate } = require("../models/amenity");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const amenities = await Amenity.find();
  res.send(amenities);
});
// POST

router.post("/", async (req, res) => {
  // validation

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // save using Model
  let amenity = new Amenity({ name: req.body.name });

  // send it to db
  amenity = await amenity.save();

  // return
  res.send(amenity);
});

router.put("/:id", async (req, res) => {
  // validation - validate amenity first

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update for model
  const amenity = await Amenity.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!amenity)
    return res.status(404).send("The Amenity with the given ID was not found.");

  res.send(amenity);
});

router.delete("/:id", async (req, res) => {
  ///remove

  const amenity = await Amenity.findByIdAndRemove(req.params.id);

  if (!amenity)
    return res.status(404).send("The Amenity with the given ID was not found.");

  res.send(amenity);
});

router.get("/:id", async (req, res) => {
  const amenity = await Amenity.findById(req.params.id);

  if (!amenity)
    return res.status(404).send("The amenity with the given ID was not found.");

  res.send(amenity);
});

module.exports = router;
