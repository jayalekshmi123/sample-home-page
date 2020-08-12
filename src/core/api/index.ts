import axios from 'axios';

import config from '../config/urlConfig';
import { getAccessToken } from '../utils/sessionHandler';
import { onRequest, onRequestError } from './requestInterceptor';
import { onResponse, onResponseError } from './responseInterceptor';

//----- Use if fetch is used ---------------
const fetchAPI = (path, options) => {
    const headers = getAccessToken() ? { Authorization: `Token ${getAccessToken()}` } : {};
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            ...headers,
        },
        ...options,
    };

    return fetch(`${config.API_BASE}${path}`, requestOptions)
        .then(async (response) => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return Promise.resolve(data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};

export const postRequestHandler = (body) => {
    return {
        method: 'POST',
        body: JSON.stringify(body),
    };
};

export default fetchAPI;

//-------------- use if axios is used -------------

export const API = axios.create({
    baseURL: config.API_BASE,
    timeout: 30000,
});

API.interceptors.request.use(onRequest, onRequestError);
API.interceptors.response.use(onResponse, onResponseError);
