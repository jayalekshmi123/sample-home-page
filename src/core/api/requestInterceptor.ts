import { AxiosRequestConfig } from 'axios';
import { getAccessToken } from '../utils/sessionHandler';

export const onRequest = (config: AxiosRequestConfig) => {
    const headers = getAccessToken() ? { Authorization: `Token ${getAccessToken()}` } : {};
    const request: AxiosRequestConfig = {
        method: 'GET',
        ...config,
        headers: {
            'Content-type': 'application/json',
            ...config.headers,
            ...headers,
        },
    };
    return request;
};

export const onRequestError = (error) => Promise.reject(error);
