import axios from 'axios'

const BASE_URL = "https://registration-page-backend.vercel.app/api/auth"
const axiosInstance = axios.create({
    withCredentials: true,
}

)

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.timeout = 2500;

export default axiosInstance;


