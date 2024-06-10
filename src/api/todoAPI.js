import axios from "axios";
const {VITE_API_URL} = {...import.meta.env};

const dummyAPI = axios.create({
    baseURL:VITE_API_URL,
})

dummyAPI.interceptors.request.use(config=>{
    config.headers = {
        ...config.headers,
    }
    return config;
});

export default dummyAPI;