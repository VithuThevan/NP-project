import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PatientService from "../../services/PatientService";
// import { Link } from 'react-router-dom'

const ListPatient = () => {
  const [patient, setpatient] = useState([]);

  useEffect(() => {
    getAllPatients();
  }, []);

  const getAllPatients = () => {
    PatientService.getAllPatients()
      .then((Response) => {
        setpatient(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePatient = (patientId) => {
    PatientService.deletePatient(patientId)
      .then((Response) => {
        getAllPatients();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Customers</h2>
      <Link to={"/add-patient"} className="btn btn-primary mb-2 me-3">
        Add Customer
      </Link>
      <Link to={"/"} className="btn btn-success mb-2">
        Home
      </Link>

      <table className="table table-bordered table-striped">
        <thead className="table-danger">
          <th>Customer Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact_No</th>
          <th>Actions</th>
        </thead>

        <tbody>
          {patient.map((patients) => (
            <tr key={patients.id}>
              <td>{patients.id}</td>
              <td>{patients.name}</td>
              <td>{patients.address}</td>
              <td>{patients.age}</td>

              <td>
                <Link
                  className="btn btn-info me-3"
                  to={`/edit-patient/${patients.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePatient(patients.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* <tr>
                <td>1004</td>
                <td>1</td>
                <td>games</td>
                <td>26</td>
                <td>Address</td>
                </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default ListPatient;
