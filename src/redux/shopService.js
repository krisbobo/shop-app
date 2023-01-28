import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/products/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${baseURL}/products/categories`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${baseURL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
