import axios from 'axios';
import { apiBase } from "../config/baseUrl";

const UserApi = axios.create({
  baseURL: `${apiBase}/user`
})

export const getUserFavorites = async (id) => {
  try{
    const res = await UserApi.get(`/favourites/${id}`);
    return res.data;
  } catch (error) {
    return {
      favourites: [],
      likes: [],
      dislikes: []
    }
  }
}

export const addUserFavorites = async (id, favourites) => {
  try{
    const res = await UserApi.post(`/favourites/${id}`, favourites);
    return res.data;
  } catch (error) {
    return {
      favourites: [],
      likes: [],
      dislikes: []
    }
  }
}

export const removeUserFavorites = async (id, favourites) => {
  try{
    console.log("removing" + favourites.favourite + "from" + id)
    const res = await UserApi.delete(`/favourites/${id}`, favourites);
    console.log(res.data)
    return res.data;
  } catch (error) {
    return {
      favourites: [],
      likes: [],
      dislikes: []
    }
  }
}