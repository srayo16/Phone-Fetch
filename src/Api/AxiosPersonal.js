import axios from "axios";

const AxiosPersonal = axios.create({});

AxiosPersonal.interceptors.request.use(function (config) {
    
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
}, function (error) {

    return Promise.reject(error);
});

AxiosPersonal.interceptors.response.use(function (response) {
  
    return response;
}, function (error) {
   
    if (error.response.status === 403) {
       
    }
    return Promise.reject(error);
});

export default AxiosPersonal;