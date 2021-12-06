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

export const getRestaurant = async (id) => {
  try{
    const res = await RestaurantApi.get(`/${id}`);
    return res.data;
  } catch (error) {
    return {
      name: "",
      phoneNumber: "",
      image: "",
      address: "",
      description: ""
    }
  }
}

export const saveRestaurant = async (restaurant, id) => {
  console.log("try to save rest " + restaurant.name)
  try {
    const res = await RestaurantApi.put(`/${id}`, restaurant)
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}