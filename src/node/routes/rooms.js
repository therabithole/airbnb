const { Room, validate } = require("../models/room");

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.send(rooms);
});
// POST

router.post("/", async (req, res) => {
  // validation

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // save using Model
  let room = new Room({ name: req.body.name });

  // send it to db
  room = await room.save();

  // return
  res.send(room);
});

router.put("/:id", async (req, res) => {
  // validation - validate amenity first

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update for model
  const room = await Room.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!room)
    return res.status(404).send("The Room with the given ID was not found.");

  res.send(room);
});

router.delete("/:id", async (req, res) => {
  ///remove

  const room = await Room.findByIdAndRemove(req.params.id);

  if (!room)
    return res.status(404).send("The Room with the given ID was not found.");

  res.send(amenity);
});

router.get("/:id", async (req, res) => {
  const amenity = await Amenity.findById(req.params.id);

  if (!amenity)
    return res.status(404).send("The Room with the given ID was not found.");

  res.send(amenity);
});

module.exports = router;
