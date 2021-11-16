const Joi = require("joi");
const mongoose = require("mongoose");

const properSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

const Proper = mongoose.model("Proper", properSchema);

function validateProper(proper) {
  const schema = {
    title: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(proper, schema);
}

exports.properSchema = properSchema;
exports.Proper = Proper;
exports.validate = validateProper;
