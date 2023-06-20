// import { useState, useEffect } from "react";
// import axios from "axios";

// // ----------------------------------------------------------------------------------
// const DataTableSource = () => {
//   const [employees, setEmployees] = useState([]); //empty array

//   useEffect(() => {
//     function getEmployees() {
//       axios
//         .get("http://localhost:3035/employee/")
//         .then((res) => {
//           console.log(res.data);
//           setEmployees(res.data);
//         })
//         .catch((err) => {
//           alert(err.message);
//         });
//     }

//     getEmployees();
//   }, []);

//   const employeeRows = employees.map((employee) => ({
//     id: employee.id,
//     empfName: employee.empfName,
//     emplName: employee.emplName,
//     empEmail: employee.empEmail,
//     empGender: employee.empGender,
//     empBirthday: employee.empBirthday,
//     empPhone: employee.empPhone,
//   }));

// export const employeeColumns = [
//   { field: "id", headerName: "ID", width: 70 },
//   {
//     field: "empfName",
//     headerName: "First Name",
//     width: 130,
//   },
//   {
//     field: "emplName",
//     headerName: "Last Name",
//     width: 150,
//   },
//   {
//     field: "empEmail",
//     headerName: "Email",
//     width: 165,
//     sortable: false,
//   },
//   {
//     field: "empGender",
//     headerName: "Gender",
//     width: 110,
//     sortable: false,
//   },
//   {
//     field: "empBirthday",
//     headerName: "Birth Date",
//     width: 165,
//     sortable: false,
//   },
//   {
//     field: "empPhone",
//     headerName: "Contact",
//     width: 165,
//     sortable: false,
//   },
// ];

// return null;

// export { DataTableSource, employeeRows, employeeColumns };
//------------------------------------------------------------------------------------------------------------
// DataTableSource.js
// import { useState, useEffect } from "react";
// import { getEmployees } from "./Api";
// import { mapEmployeesToRows, employeeColumns } from "./utils";

// const DataTableSource = ({ children }) => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const employees = await getEmployees();
//         setEmployees(employees);
//       } catch (error) {
//         alert(error.message);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const employeeRows = mapEmployeesToRows(employees);

//   return children(employeeRows, employeeColumns);
// };

// export default DataTableSource;

// // --------------------------------------------------------------------------------------------------------------------------

// console.log(employeeRows); // Print the results to the console

// ----------------------------------------------------------------
// export const employeeRows = [
//   {
//     id: 1,
//     empfName: "Sandani",
//     emplName: "Thilakarathna",
//     empEmail: "sandani@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
//   {
//     id: 2,
//     empfName: "Nayali",
//     emplName: "Jayawardena",
//     empEmail: "nayali@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
//   {
//     id: 3,
//     empfName: "Sandali",
//     emplName: "Anjana",
//     empEmail: "anjana@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
//   {
//     id: 4,
//     empfName: "Yeheni",
//     emplName: "Chamoda",
//     empEmail: "yeheni@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
//   {
//     id: 5,
//     empfName: "Pevinya",
//     emplName: "Peris",
//     empEmail: "pevinya@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
//   {
//     id: 6,
//     empfName: "Piyumi",
//     emplName: "Gamage",
//     empEmail: "6snow@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
//   {
//     id: 7,
//     empfName: "John",
//     emplName: "Dev",
//     empEmail: "jondev@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
//   {
//     id: 8,
//     empfName: "Dananjaya",
//     emplName: "De Silva",
//     empEmail: "dananjaya@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
//   {
//     id: 9,
//     empfName: "Dasun",
//     emplName: "Shanka",
//     empEmail: "shanaka@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
//   {
//     id: 10,
//     empfName: "Virat",
//     emplName: "Kholi",
//     empEmail: "virat@gmail.com",
//     empGender: "Female",
//     empBirthday: "2000.10.12",
//     empPhone: "077XXXXXXX",
//   },
// ];
