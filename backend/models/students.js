const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const students_model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("students", students_model);
