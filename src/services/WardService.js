import axios from 'axios'

const WARD_BASE_REST_API_URL = 'http://localhost:8080/api/ead/wards';

class WardService{

    getAllWards(){
        return axios.get(WARD_BASE_REST_API_URL)
    }

    createWard(ward){
        return axios.post(WARD_BASE_REST_API_URL, ward)
    }

    getWardById(wardId){
        return axios.get(WARD_BASE_REST_API_URL + '/' + wardId);
    }

    updateWard(wardId, ward){
        return axios.put(WARD_BASE_REST_API_URL + '/' + wardId, ward);
    }

    deleteWard(wardId){
        return axios.delete(WARD_BASE_REST_API_URL + '/' + wardId);
    }
}

export default new WardService();