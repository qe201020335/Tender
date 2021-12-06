import axios from 'axios';
import { apiBase } from "../config/baseUrl";

const RestaurantApi = axios.create({
  baseURL: `${apiBase}/restaurant`
})

export const getAllRestaurant = async () => {
  try {
    const res = await RestaurantApi.get('/');
    return res.data
  } catch(error) {
    console.log(error)
    return [];
  }
};