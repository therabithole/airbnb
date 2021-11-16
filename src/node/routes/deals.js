const { Deal, validate } = require("../models/deal");

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const deals = await Deal.find();
  res.send(deals);
});
// POST

router.post("/", async (req, res) => {
  // validation

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // save using Model
  let deal = new Deal({ name: req.body.name });

  // send it to db
  deal = await deal.save();

  // return
  res.send(deal);
});

router.put("/:id", async (req, res) => {
  // validation - validate amenity first

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update for model
  const deal = await Deal.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!deal)
    return res.status(404).send("The Deal with the given ID was not found.");

  res.send(deal);
});

router.delete("/:id", async (req, res) => {
  ///remove

  const deal = await Deal.findByIdAndRemove(req.params.id);

  if (!deal)
    return res.status(404).send("The Deal with the given ID was not found.");

  res.send(deal);
});

router.get("/:id", async (req, res) => {
  const deal = await Deal.findById(req.params.id);

  if (!deal)
    return res.status(404).send("The Deal with the given ID was not found.");

  res.send(deal);
});

module.exports = router;
