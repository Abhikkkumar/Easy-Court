const mongoose = require("mongoose");
const DB_PASS = process.env.DB_PASS;
DB_USER = process.env.DB_USER;

exports.main = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.mmf8qh6.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
};
