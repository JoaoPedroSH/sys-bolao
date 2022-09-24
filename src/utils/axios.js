import axios from axios

const axiosIns = axios.create({
    baseURL: 'http://localhost/ServeSysBolao/services/'
});

return axiosIns;