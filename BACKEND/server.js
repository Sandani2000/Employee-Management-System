const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8060;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection success!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port no : ${PORT}`);
});

//------------- Employee Router -------------------
const employeeRouter = require("./routes/employees.js");
app.use("/employee", employeeRouter); //http://localhost:8060/employee

//------------- Notice Router -------------------
const noticeRouter = require("./routes/notices.js");
app.use("/notice", noticeRouter);

//------------- Search Router -------------------
// let Employee = require("../models/Employee");

// app.use(express.json());

// app.get("/api/v1/employees", async (req, res) => {
//   try {
//     const { key, page, limit } = req.query;
//     const skip = (page - 1) * limit;
//     const search = key
//       ? {
//           $or: [
//             { name: { $regex: key, $options: "$i" } },
//             { descreption: { $regex: key, $options: "$i" } },
//           ],
//         }
//       : {};

//     const data = await Employee.find(search)
//       .populate("author")
//       .skip(skip)
//       .limit(limit);
//     res.json({
//       data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
