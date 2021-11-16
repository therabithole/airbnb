const Joi = require("joi");
const mongoose = require("mongoose");

const starSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Star = mongoose.model("Star", starSchema);

function validateStar(cl) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(star, schema);
}

exports.starSchema = starSchema;
exports.Star = Star;
exports.validate = validateStar;
