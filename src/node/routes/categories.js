const { Category, validate } = require("../models/category");

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});
// POST

router.post("/", async (req, res) => {
  // validation

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // save using Model
  let category = new Category({ name: req.body.name });

  // send it to db
  category = await category.save();

  // return
  res.send(category);
});

router.put("/:id", async (req, res) => {
  // validation - validate amenity first

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update for model
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },

    { new: true }
  );

  if (!category)
    return res
      .status(404)
      .send("The Category with the given ID was not found.");

  res.send(category);
});

router.delete("/:id", async (req, res) => {
  ///remove

  const category = await Category.findByIdAndRemove(req.params.id);

  if (!category)
    return res
      .status(404)
      .send("The Category with the given ID was not found.");

  res.send(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category)
    return res
      .status(404)
      .send("The category with the given ID was not found.");

  res.send(category);
});

module.exports = router;
