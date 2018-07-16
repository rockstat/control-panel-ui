
import Axios from 'axios';
import { BandServicesList, ApiWrapper, BandImagesList, Stub, GenricCallee } from '../types'

// import commonStore from './stores/commonStore';
// import userStore from './stores/userStore';
// import authStore from './stores/authStore';


const client = Axios.create({
  baseURL: API_URL_TMPL.replace('<host>', document.location.hostname),
  timeout: 3000,
});

const encode = encodeURIComponent;

const responseData = res => res.data;

export const requests: ApiWrapper = {
  del: url =>
    client
      .delete(`${url}`)
      .then(responseData),
  get: url =>
    client
      .get(`${url}`)
      .then(responseData),
  put: (url, body) =>
    client
      .put(`${url}`, body)
      .then(responseData),
  patch: (url, body) =>
    client
      .patch(`${url}`, body)
      .then(responseData),
  post: (url, body) =>
    client
      .post(`${url}`, body)
      .then(responseData),
};