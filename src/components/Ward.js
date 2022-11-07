import React, { useState, useEffect } from "react";

import WardService from "../services/WardService";
import { Link } from "react-router-dom";

const Ward = () => {
  const [wards, setWards] = useState([]);

  useEffect(() => {
    getAllWards();
  }, []);

  const getAllWards = () => {
    WardService.getAllWards()
      .then((Response) => {
        setWards(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteWard = (wardId) => {
    WardService.deleteWard(wardId)
      .then((Response) => {
        getAllWards();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Vehicles</h2>
      <Link to={"/add-ward"} className="btn btn-primary mb-2 me-3">
        Add Vehicle
      </Link>
      <Link to={"/"} className="btn btn-success mb-2">
        Home
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <th>Vehicle Number </th>
          <th>Vehicle Type </th>
          <th>Vehicle Brand</th>
          <th>Vehicle Plate Number</th>
          <th>No of Passengers</th>
          <th>Actions</th>
        </thead>

        <tbody>
          {wards.map((ward) => (
            <tr key={ward.id}>
              <td>{ward.id}</td>
              <td>{ward.ward_type}</td>
              <td>{ward.incharge}</td>
              <td>{ward.name}</td>
              <td>{ward.nurse}</td>

              <td>
                <Link
                  className="btn btn-info me-3"
                  to={`/edit-ward/${ward.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteWard(ward.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/* {
                    wards.map(
                        ward => 
                        <tr key={ward.id}>
                           
                            <td>{ward.name}</td>
                            <td>{ward.ward_type}</td>
                            <td>{ward.incharge}</td>
                            <td>{ward.bed}</td>
                            <td>{ward.nurse}</td>

                            <td>
                                <Link className='btn btn-info' to={`/edit-doctor/${ward.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick={()=>deleteWard(ward.id)}>Delete</button>
                            </td>

                        </tr>
                    )
                } */}
        </tbody>
      </table>
    </div>
  );
};

export default Ward;
