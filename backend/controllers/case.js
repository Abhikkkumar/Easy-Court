const mongoose = require("mongoose");
const models = require("../models/case");
const myCase = models.Case;

exports.create = async (req, res) => {
  const newCase = new myCase({
    ...req.body,
  });
  try {
    const response = await newCase.save();
    console.log({ response: response });
    res.status(200).json(response);
  } catch (err) {
    console.log({ error: err });
    res.status(400).json(err);
  }
};
exports.readAll = async (req, res) => {
  try {
    const response = await myCase.find();
    console.log({ response: response });
    res.status(200).json(response);
  } catch (err) {
    console.log({ error: err });
    res.status(400).json(err);
  }
};
exports.readOne = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await myCase.findById(id);
    console.log({ response: response });
    res.status(200).json(response);
  } catch (err) {
    console.log({ error: err });
    res.status(400).json(err);
  }
};
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await myCase.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log({ response: response });
    res.status(200).json(response);
  } catch (err) {
    console.log({ error: err });
    res.status(400).json(err);
  }
};
exports.updateArr = async (req, res) => {
  const id = req.params.id;
  const { arrName, value, operation } = req.body;
  const small = {};
  try {
    small[arrName] = new mongoose.Types.ObjectId(value);
  } catch (error) {
    console.error("Error occurred while creating ObjectId:", error.message);
    // Handle the error gracefully, you can log it or perform other actions
    return res.status(400).json({ err: "Please enter correct ObjectId " });
  }
  const update = {};
  update[operation] = small;

  try {
    const response = await myCase.findByIdAndUpdate(id, update, { new: true });
    console.log({ response: response });
    res.status(200).json(response);
  } catch (err) {
    console.log({ error: err });
    res.status(400).json(err);
  }
};
exports.terminate = async (req, res) => {
  try {
    const response = await myCase.findByIdAndDelete(req.params.id);
    console.log({ response: response });
    res.status(200).json(response);
  } catch (err) {
    console.log({ error: err });
    res.status(400).json(err);
  }
};
