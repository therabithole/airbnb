const { Customer, validate } = require("../models/customer");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});

router.post("/", async (req, res) => {
  // validation
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Post
  let customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });

  //save

  customer = await customer.save();
  res.send(customer);
});

module.exports = router;
