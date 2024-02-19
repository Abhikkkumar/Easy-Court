const express = require("express");
const router = express.Router();
const controllers = require("../controllers/date");

router
  .post("/addCase", controllers.updateCaseList)
  .get("/:date", controllers.caseList)
  .patch("/update/:dateId", controllers.updateDateDetail);

exports.router = router;
