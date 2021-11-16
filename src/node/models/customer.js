const Joi = require("joi");
const mongoose = require("mongoose");

require("mongoose-type-email");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  phone: {
    type: String,
    minlength: 5,
    maxlength: 15,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

/////////

// Joi validation
function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(5).max(30).required(),
    phone: Joi.string().min(5).max(15).required(),
    email: Joi.string().email(),
  };

  return Joi.validate(customer, schema);
}

// export

exports.customerSchema = customerSchema;
exports.Customer = Customer;
exports.validate = validateCustomer;
