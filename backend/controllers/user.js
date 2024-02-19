const model = require("../models/user");
const User = model.User;

exports.register = async (req, res) => {
  const user = new User(req.body);
  try {
    const response = await user.save();
    // console.log({ res: response });
    res.status(200).json(response);
  } catch (err) {
    // console.log({ err: err });
    res.status(400).json({ err: err });
  }
};
exports.getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await User.findById(id);
    // console.log({ res: response });
    res.status(200).json(response);
  } catch (err) {
    // console.log({ err: err });
    res.status(400).json({ err: err });
  }
};
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    // console.log({ res: response });
    res.status(200).json(response);
  } catch (err) {
    // console.log({ err: err });
    res.status(400).json({ err: err });
  }
};
exports.terminate = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await User.findByIdAndDelete(id);
    // console.log({ res: response });
    res.status(200).json(response);
  } catch (err) {
    // console.log({ err: err });
    res.status(400).json({ err: err });
  }
};
