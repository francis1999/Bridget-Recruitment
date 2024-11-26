import {request} from './Network';

export type IProduct = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};
export type ProductResponse = IProduct[];
export const getProducts = async (): Promise<ProductResponse> => {
  try {
    const response = await request({
      url: '/products',
      method: 'GET',
    });


    return response;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const response = await request({
      url: '/products/categories',
      method: 'GET',
    });


    return response;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const getOneCategory = async (
  param: string,
): Promise<ProductResponse> => {
  try {
    const response = await request({
      url: `/products/category/${param}`,
      method: 'GET',
    });


    return response;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};
