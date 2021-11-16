const Joi = require("joi");
const mongoose = require("mongoose");

const { amenitySchema } = require("./amenity");

const oldSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
  },

  amenity: {
    type: amenitySchema,
    required: true,
  },
});

const Old = mongoose.model("old", oldSchema);

function validateProperty(property) {
  const schema = {
    title: Joi.string().min(5).max(255).required(),
    amenityId: Joi.objectId().required(),
  };

  return Joi.validate(property, schema);
}

exports.propertySchema = propertySchema;
exports.Property = Property;
exports.validate = validateProperty;

/* 

category: {
    type: categorySchema,
    required: true,
  },
  room: {
    type: roomSchema,
    required: true,
    min: 0,
    max: 255,
  },
  star: {
    type: starSchema,
    required: true,
    min: 0,
    max: 255,
  },
  deal: {
    type: dealSchema,
    required: true,
    min: 0,
    max: 255,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  
  */
