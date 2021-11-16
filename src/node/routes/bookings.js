const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Booking } = require("../models/booking");

router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.send(bookings);
});
