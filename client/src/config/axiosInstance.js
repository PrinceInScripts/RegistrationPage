import axios from 'axios'

BASE_URL="https://localhost:5000/api/auth"
const axiosInstance=axios.create()

axiomInstance.defaults.baseURL=BASE_URL
axiomInstance.defaults.timeout=2500

export default axiosInstance;