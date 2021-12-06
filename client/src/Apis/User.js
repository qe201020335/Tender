import axios from 'axios';
import { apiBase } from "../config/baseUrl";

const UserApi = axios.create({
  baseURL: `${apiBase}/user`
})

export const getUserFavorites = async (id) => {
  try{
    const res = await UserApi.get(`/favorites/${id}`);
    return res.data;
  } catch (error) {
    return {
      favourites: [],
      likes: [],
      dislikes: []
    }
  }
}

export const saveUserFavorites = async (id, favorites) => {
  try{
    const res = await UserApi.put(`/favorites/${id}`, favorites);
    return res.data;
  } catch (error) {
    return {
      favourites: [],
      likes: [],
      dislikes: []
    }
  }
}