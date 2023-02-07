import axios from 'axios';
import { getCookie } from 'cookies-next';

const userTokken = getCookie('access_token');

export const requestAdmin = axios.create({
  baseURL: `https://api.f02.relipa.vn/api/v1/`,
  headers: userTokken ? { 'Authorization ': `Bearer ${userTokken}` } : {},
});

export const get = async (url, token = {}, params = {}) => {
  const response = await axios({
    method: 'get',
    url: `https://api.f02.relipa.vn/api/v1/${url}`,
    headers: { 'Authorization ': `Bearer ${token}` },
    params: params,
  });
  return response.data;
};

export const post = async (url, token = {}, data = {}) => {
  const response = await axios({
    method: 'post',
    url: `https://api.f02.relipa.vn/api/v1/${url}`,
    headers: { 'Authorization ': `Bearer ${token}` },
    data: data,
  });
  return response.data;
};

export const deletes = async (url, token = {}) => {
  const response = await axios({
    method: 'delete',
    url: `https://api.f02.relipa.vn/api/v1/${url}`,
    headers: { 'Authorization ': `Bearer ${token}` },
  });
  return response.data;
};
