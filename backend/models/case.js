const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const caseScheme = new Schema({
  caseNo: { type: String, required: true, unique: true },
  iCaseNo: { type: String, required: true, unique: true },
  status: { type: String },
  details: String,
  accused: String,
  complainant: String,
  hearingDates: [{ type: ObjectId, ref: "MyDate" }],
  readingAccess: [{ type: ObjectId, ref: "User" }],
  allAccess: [{ type: ObjectId, ref: "User" }],
});

exports.Case = mongoose.model("Case", caseScheme);
