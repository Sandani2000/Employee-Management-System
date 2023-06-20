const router = require("express").Router();
let Notice = require("../models/Notice");

// --------- Add a new Notice ----------
router.route("/add").post((req, res) => {
  //http://localhost:8070/notice/add
  const nTitle = req.body.nTitle;
  const nDescription = req.body.nDescription;
  const nPublishBy = req.body.nPublishBy;
  const nPublishTo = req.body.nPublishTo;
  const nFromDate = Date(req.body.nFromDate);
  const nPublishedOn = Date(req.body.nPublishedOn);

  // If you're using the Date() constructor to parse a string into a date object, make sure that the string is in a format that can be parsed by the constructor. If the string is not in a valid format, the Date() constructor will return an invalid date object.
  const newNotice = new Notice({
    nTitle,
    nDescription,
    nPublishBy,
    nPublishTo,
    nFromDate,
    nPublishedOn,
  });

  // js then = java if
  newNotice
    .save()
    .then(() => {
      res.json("Notice Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ---------- Viewg all Notices -----------
router.route("/").get((req, res) => {
  //http://localhost:8060/notice/
  Notice.find()
    .then((notices) => {
      res.json(notices);
    })
    .catch((err) => {
      console.log(err);
    });
});

// --------- Update a Notice ----------
router.route("/update/:nId").put(async (req, res) => {
  //http://localhost:8060/notice/update/n1234
  let noticeId = req.params.nId;

  const {
    nTitle,
    nDescription,
    nPublishBy,
    nPublishTo,
    nFromDate,
    nPublishedOn,
  } = req.body; //using destructure method

  const updateNotice = {
    nTitle,
    nDescription,
    nPublishBy,
    nPublishTo,
    nFromDate,
    nPublishedOn,
  };

  const update = await Notice.findByIdAndUpdate(noticeId, updateNotice)
    .then(() => {
      res.status(200).send({ status: "Notice updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message() });
    });
});

// --------- Delete a notice----------
router.route("/delete/:nId").delete(async (req, res) => {
  let noticeId = req.params.nId;

  await Notice.findByIdAndDelete(noticeId)
    .then(() => {
      res.status(200).send({ status: "Notice deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
      //500 internal server error
    });
});

// --------- Get data of a particular notice ----------
router.route("/get/:nId").get(async (req, res) => {
  let noticeId = req.params.nId;

  const notice = await Student.findById(noticeId)
    .then((notice) => {
      res
        .status(200)
        .send({ status: "notice successfuly fetched", notice: notice });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get notice", error: err.message });
    });
});

module.exports = router;
