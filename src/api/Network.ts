import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {BASE_URL} from '../lib/constants';

export const request = async (options: AxiosRequestConfig) => {
  const client = axios.create({
    baseURL: BASE_URL,
  });

  try {
    // Add detailed logging
    console.log('Request Options:', {
      url: options.url,
      method: options.method,
      baseURL: BASE_URL,
      ...options,
    });

    const response: AxiosResponse = await client(options);

    // Log the full response
    console.log('Full Response:', {
      data: response.data,
      status: response.status,
      headers: response.headers,
    });

    // Ensure you're returning the correct part of the response
    return response.data;
  } catch (error) {
    // More comprehensive error logging
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

    // Rethrow or return empty array based on your error handling strategy
    throw error;
  }
};
