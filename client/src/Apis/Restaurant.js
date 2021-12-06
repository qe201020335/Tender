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

export const getOneRestaurant = async (id) => {
  const allRests = await getAllRestaurant();

  for (const rest of allRests) {
    if (rest._id === id) {
      return rest
    }
  }
  return null;
}

export const saveRestaurant = async (restaurant, id) => {
  console.log("try to save rest " + restaurant.name)
  const url = `${apiBase}/restaurant/${id}`
  try {
    await axios.put(url, restaurant)
  } catch (error) {
    console.log(error)
  }

}