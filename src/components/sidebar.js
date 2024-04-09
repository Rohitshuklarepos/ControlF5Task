import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/dslogo.png";
import modellogo from "../asset/modellogo.png";
import traininglogo from "../asset/traininglogo.png";
import inferencelogo from "../asset/inferencelogo.png";
import monitorlogo from "../asset/monitorlogo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt=""></img>
        <div>
          <p>Services</p>
          <h4>Machine Learning</h4>
        </div>
      </div>
      <ul className="sidebar-menu">
        <Link to="/">
          <li>
            <img className="pe-2" src={modellogo} alt="logo" />
            Models
          </li>
        </Link>
        <Link to="/training">
          <li>
            <img className="pe-2" src={traininglogo} alt="logo" />
            Training
          </li>
        </Link>
        <Link to="/inference">
          <li>
            <img className="pe-2" src={inferencelogo} alt="logo" />
            Inference
          </li>
        </Link>
        <Link to="/monitor">
          <li>
            <img className="pe-2" src={monitorlogo} alt="logo" />
            Moniter
          </li>
        </Link>

        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
