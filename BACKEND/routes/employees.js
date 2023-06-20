const router = require("express").Router();
let Employee = require("../models/Employee");

// --------- Add a new employee ----------
router.route("/add").post((req, res) => {
  //http://localhost:8070/employee/add
  const empfName = req.body.empfName;
  const emplName = req.body.emplName;
  const empEmail = req.body.empEmail;
  const empHiringDate = Date(req.body.empHiringDate);
  const empBirthday = Date(req.body.empBirthday);
  const empUsername = req.body.empUsername;
  const empPassword = req.body.empPassword;
  const empDesignation = req.body.empDesignation;
  const empGender = req.body.empGender;
  const empDepartement = req.body.empDepartement;
  const empPhone = +req.body.empPhone;

  // If you're using the Date() constructor to parse a string into a date object, make sure that the string is in a format that can be parsed by the constructor. If the string is not in a valid format, the Date() constructor will return an invalid date object.

  // If you're using the Number() constructor to parse a string into a number, make sure that the string contains only numeric characters. If the string contains non-numeric characters, the Number() constructor will return NaN.

  const newEmployee = new Employee({
    empfName,
    emplName,
    empEmail,
    empHiringDate,
    empBirthday,
    empUsername,
    empPassword,
    empDesignation,
    empGender,
    empDepartement,
    empPhone,
  });

  // js then = java if
  newEmployee
    .save()
    .then(() => {
      res.json("Employee Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ---------- Viewg all employees -----------
router.route("/").get((req, res) => {
  //http://localhost:8060/employee/
  Employee.find()
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      console.log(err);
    });
});

// --------- Update an employee ----------
router.route("/update/:id").put(async (req, res) => {
  //http://localhost:8060/employee/update/it21454882
  let employeeId = req.params.id;

  const {
    empfName,
    emplName,
    empEmail,
    empHiringDate,
    empBirthday,
    empUsername,
    empPassword,
    empDesignation,
    empGender,
    empDepartement,
    empPhone,
  } = req.body; //using destructure method

  const updateEmployee = {
    empfName,
    emplName,
    empEmail,
    empHiringDate,
    empBirthday,
    empUsername,
    empPassword,
    empDesignation,
    empGender,
    empDepartement,
    empPhone,
  };

  const update = await Employee.findByIdAndUpdate(employeeId, updateEmployee)
    .then(() => {
      res.status(200).send({ status: "Employee updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message() });
    });
});

// --------- Delete an Employee----------
router.route("/delete/:id").delete(async (req, res) => {
  let employeeId = req.params.id;

  await Employee.findByIdAndDelete(employeeId)
    .then(() => {
      res.status(200).send({ status: "employee deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
      //500 internal server error
    });
});

// --------- Get data of a particular employee ----------
router.route("/get/:id").get(async (req, res) => {
  let employeeId = req.params.id;

  const employee = await Employee.findById(employeeId)
    .then((employee) => {
      res
        .status(200)
        .send({ status: "employee successfuly fetched", employee: employee });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get employee", error: err.message });
    });
});

module.exports = router;
