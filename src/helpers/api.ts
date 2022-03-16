/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios';
// import { useAppSelector } from '.';

const axiosAPI = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

const GetToken = ():string => {
  // const authState = useAppSelector((state) => state.auth);
  // return authState.token ?? '';
  const token = '123';
  return token;
};

const apiRequest = (method: any, url: string, request: object, isToken: any) => {
  const headers = {
    Authorization: GetToken(),
  };
  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  }).then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err));
};

// function to execute the http get request
const get = (url: string, request: object, isToken = true) => apiRequest('get', url, request, isToken);

// function to execute the http delete request
const deleteRequest = (url: string, request: object, isToken = true) => apiRequest('delete', url, request, isToken);

// function to execute the http post request
const post = (url: string, request: object, isToken = true) => apiRequest('post', url, request, isToken);

// function to execute the http put request
const put = (url: string, request: object, isToken = true) => apiRequest('put', url, request, isToken);

// function to execute the http path request
const patch = (url: string, request: object, isToken = true) => apiRequest('patch', url, request, isToken);

const API = {
  get,
  delete: deleteRequest,
  post,
  put,
  patch,
};
export default API;
