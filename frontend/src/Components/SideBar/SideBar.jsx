import React from "react";
import "./SideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ForumIcon from "@mui/icons-material/Forum";
import CampaignIcon from "@mui/icons-material/Campaign";
import ChecklistIcon from "@mui/icons-material/Checklist";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="top">
        <span className="logo">TravelWise Admin</span>
      </div>
      <div className="center">
        <p className="title">Main</p>
        <ul>
          <Link to="/" className="link">
            <li>
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="" className="link">
            <li>
              <SwitchAccountIcon />
              <span>Profile</span>
            </li>
          </Link>

          <Link to="/employee/" className="link">
            <li>
              <SupervisedUserCircleIcon />
              <span>Employees</span>
            </li>
          </Link>

          <Link to="/notice/" className="link">
            <li>
              <CampaignIcon />
              <span>Staff Notices</span>
            </li>
          </Link>

          <Link to="" className="link">
            <li>
              <ChecklistIcon />
              <span>Resturants</span>
            </li>
          </Link>

          <Link to="" className="link">
            <li>
              <ChecklistIcon />
              <span>Hotels</span>
            </li>
          </Link>

          <Link to="" className="link">
            <li>
              <ChecklistIcon />
              <span>Transports</span>
            </li>
          </Link>

          <Link to="" className="link">
            <li>
              <ChecklistIcon />
              <span>Distinations</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="bottom">
        <p className="title">Stattistic Graphs</p>
        <ul>
          <Link to="" className="link">
            <li>
              <BarChartIcon />
              <span>Bar chart</span>
            </li>
          </Link>

          <Link to="" className="link">
            <li>
              <PieChartIcon />
              <span>Pie Chart</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
