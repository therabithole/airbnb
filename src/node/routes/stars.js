const { Star, validate } = require("../models/star");

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const stars = await Star.find();
  res.send(stars);
});
// POST

router.post("/", async (req, res) => {
  // validation

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // save using Model
  let star = new Star({ name: req.body.name });

  // send it to db
  star = await star.save();

  // return
  res.send(star);
});

router.put("/:id", async (req, res) => {
  // validation - validate Star first

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update for model
  const star = await Star.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!star)
    return res.status(404).send("The Star with the given ID was not found.");

  res.send(star);
});

router.delete("/:id", async (req, res) => {
  ///remove

  const star = await Star.findByIdAndRemove(req.params.id);

  if (!star)
    return res.status(404).send("The Star with the given ID was not found.");

  res.send(star);
});

router.get("/:id", async (req, res) => {
  const star = await Star.findById(req.params.id);

  if (!star)
    return res.status(404).send("The Star with the given ID was not found.");

  res.send(star);
});

module.exports = router;
