import axios from 'axios'

const axiosIns = axios.create({
  baseURL: '*',
  headers: {'X-Custom-Header': 'foobar'}
});

return axiosIns
