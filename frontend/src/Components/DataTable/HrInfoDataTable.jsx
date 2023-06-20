// import React from "react";
// import "./HrInfoDataTable.scss";
// import { Link } from "react-router-dom";
// import { employeeColumns, employeeRows } from "../../HrInfoDataTableSource";
// import { DataGrid } from "@mui/x-data-grid";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

// const HrInfoDataTable = () => {
//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       sortable: false,
//       headerClassName: "header-center", // use a custom class to center the title
//       renderCell: () => {
//         return (
//           <div className="cellAction">
//             <button className="viewBtn">View</button>
//             <button className="editBtn">Edit</button>
//             <button className="deleteBtn">Delete</button>
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="HrInfoDataTable">
//       <div className="HrInfoDataTableTitle">
//         <FormatListBulletedIcon className="iconList" />
//         <span style={{ flex: 1 }}>HR Data</span>

//         <Link to="/employee/add" className="link">
//           <AddCircleOutlineIcon className="iconAdd" />
//           Add New Employee
//         </Link>
//       </div>
//       <DataGrid
//         rows={employeeRows}
//         columns={employeeColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default HrInfoDataTable;
