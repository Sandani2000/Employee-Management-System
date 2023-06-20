const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noticeSchema = new Schema(
  {
    // id: 5,
    // nTitle: "Notice1",
    // nDescription: "This is notice 1",
    // nFromDate: "2022-12-12",
    // nPublishedBy: "Hotel Manager",
    nTitle: {
      type: String,
      required: true,
    },
    nDescription: {
      type: String,
      required: true,
    },
    nFromDate: {
      type: Date,
      required: false,
    },
    nPublishBy: {
      type: String,
      required: true,
    },
    nPublishTo: {
      type: String,
      required: true,
    },
    nPublishedOn: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
// timestamps option is passed to the schema to automatically add createdAt and updatedAt fields to the documents.

// employees
const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;
