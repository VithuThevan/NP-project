import React from "react";
import { Link } from "react-router-dom";

const Hospital = () => {
    return (

            <div className='Leftside'>


                <h2 className="formname"><b>Hospital</b></h2>
                <li className='registerItem button'>
                    <Link to="/ward">WARD</Link>
                </li>
                <li className='registerItem button'>
                    <Link to="/doctor">DOCTOR</Link>
                </li>
                <li className='registerItem button'>
                    <Link to="/Patient">PATIENT</Link>
                </li>




        </div>
    );
}

export default Hospital;



