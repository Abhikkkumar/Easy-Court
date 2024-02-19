const { default: mongoose } = require("mongoose");
const model = require("../models/MyDate");
const MyDate = model.MyDate;

exports.updateCaseList = async (req, res) => {
  const { date, arrName, value, operation } = req.body;
  const searchResult = await MyDate.findOne({ date }); //search if date is already present or not
  //if present, then update the case list
  if (searchResult) {
    try {
      //creating object to send in 'findByIdAndUpdate'
      const sml = {};
      sml[arrName] = new mongoose.Types.ObjectId(value);
      const updateObj = {};
      updateObj[operation] = sml;
      // making update request
      const updateResponse = await MyDate.findByIdAndUpdate(
        searchResult._id,
        updateObj,
        { new: true }
      );
      console.log({ res: updateResponse });
      res.status(200).json(updateResponse);
    } catch (err) {
      console.log({ err });
      res.status(400).json(err);
    }
  } else {
    // if not present- create a new date
    const newDate = new MyDate(req.body);
    try {
      const response = await newDate.save();
      console.log({ res: response });
      res.status(200).json(response);
    } catch (err) {
      console.log({ error: err });
      res.status(400).json(err);
    }
  }
};

exports.caseList = async (req, res) => {
  const date = req.params.date;
  try {
    const response = await MyDate.findOne({ date }).populate("caseList","caseNo iCaseNo status");
    console.log({ res: response });
    res.status(200).json(response);
  } catch (err) {
    console.log({ err });
    res.status(200).json(err);
  }
};
exports.updateDateDetail = async (req, res) => {
  const id = req.params.dateId;
  try {
    const result = await MyDate.findByIdAndUpdate(id, req.body, { new: true });
    console.log({ res: result });
    res.status(200).json(result);
  } catch (err) {
    console.log({ err });
    res.status(400).json(err);
  }
};
