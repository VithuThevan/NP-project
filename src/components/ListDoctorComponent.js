import React, { useState, useEffect } from "react";
import DoctorService from "../services/DoctorService";
import { Link } from "react-router-dom";

const ListDoctorComponent = () => {
  const [doctors, setdoctors] = useState([]);

  useEffect(() => {
    getAllDoctors();
  }, []);

  const getAllDoctors = () => {
    DoctorService.getAllDoctors()
      .then((Response) => {
        setdoctors(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteDoctor = (doctorId) => {
    DoctorService.deleteDoctor(doctorId)
      .then((Response) => {
        getAllDoctors();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Drivers</h2>
      <Link to={"/add-doctor"} className="btn btn-primary mb-2 me-3">
        Add Driver
      </Link>
      <Link to={"/"} className="btn btn-success mb-2">
        Home
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <th>Id </th>
          <th>Name </th>
          <th>NIC</th>
          <th>Contact Numbers </th>
          <th>Actions</th>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.status}</td>
              <td>{doctor.fees}</td>

              <td>
                <Link
                  className="btn btn-info me-3"
                  to={`/edit-doctor/${doctor.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteDoctor(doctor.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDoctorComponent;
