const express = require("express");
const userControllers = require("../controllers/user");
const router = express.Router();

router
  .post("/register", userControllers.register)
  .get("/:id", userControllers.getUser)
  .patch("/:id", userControllers.update)
  .delete("/:id", userControllers.terminate);

exports.router = router;
