const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    empfName: {
      type: String,
      required: true,
    },
    emplName: {
      type: String,
      required: true,
    },
    empEmail: {
      type: String,
      required: true,
      unique: true, //If an attempt is made to create a new employee document with an email address that already exists in the database, Mongoose will throw a MongoError and the document will not be saved.
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      //validated using a regular expression to ensure that it matches a valid email address format
    },
    empHiringDate: {
      type: Date,
      required: true,
    },
    empBirthday: {
      type: Date,
      required: true,
    },
    empUsername: {
      type: String,
      required: true,
      unique: true,
    },
    empPassword: {
      type: String,
      required: true,
    },
    empDesignation: {
      type: String,
      required: true,
    },
    empGender: {
      type: String,
      required: true,
      enum: ["Male", "Female"], // specifies an array of allowed values for the empDesignation property.
    },
    empDepartement: {
      type: String,
      required: true,
    },
    empPhone: {
      type: Number,
      required: true,
      minlength: 10,
      maxlength: 10,
    },
  },
  { timestamps: true }
);
// timestamps option is passed to the schema to automatically add createdAt and updatedAt fields to the documents.

// employees
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
