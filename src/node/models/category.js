const Joi = require("joi");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,

    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Category = mongoose.model("Category", categorySchema);

function validateCategory(category) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(category, schema);
}

exports.categorySchema = categorySchema;
exports.Category = Category;
exports.validate = validateCategory;

/* enum: [
      "hotel",
      "resort",
      "house",
      "villa",
      "apartment",
      "cottage",
      "cabin",
      "guest house",
      "hostel",
      "motel",
      "homestay",
      "vacation",
    ],
    
    */
/*   unique: {
    type: String,
    enum: [
      "farm stay",
      "country house",
      "barn",
      "parliment house",
      "boats",
      "luxury tent",
      "tiny house",
    ],
  },
  
  s*/
