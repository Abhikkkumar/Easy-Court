require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000;
const userRouter = require("./routes/user");
const caseRouter = require("./routes/case");
const dateRouter = require("./routes/date");
const connection = require("./connection");

connection.main();

//middleware
app.use(express.json());
//routes
app.use("/user", userRouter.router);
app.use("/case", caseRouter.router);
app.use("/date", dateRouter.router);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
