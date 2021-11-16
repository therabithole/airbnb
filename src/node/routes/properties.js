const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Property, validate } = require("../models/property");
const { Category } = require("../models/category");
const { Room } = require("../models/room");
const { Deal } = require("../models/deal");
const { Amenity } = require("../models/amenity");
const { Star } = require("../models/star");

router.get("/", async (req, res) => {
  const properties = await Property.find();

  res.send(properties);
});

module.exports = router;

/* 


router.post("/", async (req, res) => {
  // validation

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findById(req.body.categoryId);
  if (!category) return res.status(400).send("Invalid Category");

  const amenity = await Amenity.findById(req.body.amenityId);
  if (!amenity) return res.status(400).send("Invalid Amenity");

  const star = await Star.findById(req.body.starId);
  if (!star) return res.status(400).send("Invalid Star");

  const room = await Room.findById(req.body.roomId);
  if (!room) return res.status(400).send("Invalid room");

  const deal = await Deal.findById(req.body.dealId);
  if (!deal) return res.status(400).send("Invalid Deal");

  // save using Model
  let property = new Property({
    title: req.body.title,
    category: {
      _id: category._id,
      name: category.name,
    },
    amenity: {
      _id: category._id,
      name: amenity.name,
    },
    star: {
      _id: category._id,
      name: star.name,
    },
    room: {
      _id: category._id,
      name: room.name,
    },
  });

  // send it to db
  property = await property.save();

  // return
  res.send(property);
});

router.put("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findById(req.body.categoryId);
  if (!category) return res.status(400).send("Invalid Category");

  const amenity = await Amenity.findById(req.body.amenityId);
  if (!amenity) return res.status(400).send("Invalid Amenity");

  const star = await Star.findById(req.body.starId);
  if (!star) return res.status(400).send("Invalid Star");

  const room = await Room.findById(req.body.roomId);
  if (!room) return res.status(400).send("Invalid room");

  const deal = await Deal.findById(req.body.dealId);
  if (!deal) return res.status(400).send("Invalid Deal");

  const property = await Property.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      category: {
        _id: category._id,
        name: category.name,
        unique: category.unique,
      },
      amenity: {
        _id: category._id,
        name: amenity.name,
      },
      star: {
        _id: category._id,
        name: star.name,
      },
      room: {
        _id: category._id,
        name: room.name,
      },
    },
    { new: true }
  );

  if (!property)
    return res
      .status(404)
      .send("The property with the given ID was not found.");

  res.send(property);
});

router.delete("/:id", async (req, res) => {
  const property = await Property.findByIdAndRemove(req.params.id);

  if (!property)
    return res
      .status(404)
      .send("The property with the given ID was not found.");

  res.send(property);
});

*/
