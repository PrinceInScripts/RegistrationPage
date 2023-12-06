import axios from "axios"




const BASE_URL="http://localhost:5500/api/auth"
const axiosInstance=axios.create()

axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.defaults.timeout=2500;

export default axiosInstance


