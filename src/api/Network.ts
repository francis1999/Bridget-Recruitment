import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {BASE_URL} from '../lib/constants';

export const request = async (options: AxiosRequestConfig) => {
  const client = axios.create({
    baseURL: BASE_URL,
  });

  try {
    console.log('Request Options:', {
      url: options.url,
      method: options.method,
      baseURL: BASE_URL,
      ...options,
    });

    const response: AxiosResponse = await client(options);

    console.log('Full Response:', {
      data: response.data,
      status: response.status,
      headers: response.headers,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios Error:', {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        status: error.response?.status,
      });
    } else {
      console.error('Unexpected Error:', error);
    }

    throw error;
  }
};
