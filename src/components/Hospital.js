import React from "react";
import { Link } from "react-router-dom";
import Amplify from 'aws-amplify';

const Hospital = () => {
  return (
    <div className="Leftside">
      
      <h2 className="formname">
        <b>Transport</b>
      </h2>
      <li className="registerItem button">
        <Link to="/ward">VEHICLE</Link>
      </li>
      <li className="registerItem button">
        <Link to="/doctor">DRIVER</Link>
      </li>
      <li className="registerItem button">
        <Link to="/Patient">CUSTOMERS</Link>
      </li>
    </div>
  );
};

export default Hospital;
