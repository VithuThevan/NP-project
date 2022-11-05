import axios from "axios";

const PATIENT_BASE_REST_API_URL = 'http://localhost:8080/api/ead/patients';

class PatientService{

    getAllPatients(){
        return axios.get(PATIENT_BASE_REST_API_URL)
    }

    createPatient(patient){
       // return axios.post(PATIENT_BASE_REST_API_URL, patient)

       return axios.post(PATIENT_BASE_REST_API_URL, patient)
    }

    getPatientById(wardId){
        return axios.get(PATIENT_BASE_REST_API_URL + '/' + wardId);
    }

    addPatient(patient){
        return axios.post(PATIENT_BASE_REST_API_URL, patient)
    }

    updatePatient(patientId, patient){
        return axios.put(PATIENT_BASE_REST_API_URL + '/' + patientId, patient);
    }

    deletePatient(patientId){
        return axios.delete(PATIENT_BASE_REST_API_URL + '/' + patientId);
    }

}

export default new PatientService();