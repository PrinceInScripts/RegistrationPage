import axios from 'axios'

const BASE_URL = "http://localhost:5600/api/auth"
const axiosInstance = axios.create({
    withCredentials: true,
}

)

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.timeout = 2500;

export default axiosInstance;


