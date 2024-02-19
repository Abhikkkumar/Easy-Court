const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const dateSchema = new Schema({
  date: { type: String, required: true, unique: true },
  caseList: [{ type: ObjectId, ref: "Case" }],
  judge: String,
});

exports.MyDate = mongoose.model("MyDate", dateSchema);
