const Joi = require("joi");
const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
});

const Deal = mongoose.model("Deal", dealSchema);

function validateDeal(deal) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(deal, schema);
}

exports.dealSchema = dealSchema;
exports.Deal = Deal;
exports.validate = validateDeal;

/* 

  enum: [
      "Reserve now, pay at stay",
      "Properties with special offers",
      "Free cancellation",
    ],
    
    */
