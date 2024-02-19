const express = require("express");
const router = express.Router();
const controllers = require("../controllers/case");

router
  .post("/register", controllers.create)
  .get("/all", controllers.readAll)
  .get("/:id", controllers.readOne)
  .patch("/:id", controllers.update)
  .patch("/updateArr/:id", controllers.updateArr)
  .delete("/terminateMe/:id", controllers.terminate);

exports.router = router;
