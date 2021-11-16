const Joi = require("joi");
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["single", "double", "queen"],
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Room = mongoose.model("Room", roomSchema);

function validateRoom(room) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(room, schema);
}

exports.roomSchema = roomSchema;
exports.Room = Room;
exports.validate = validateRoom;
