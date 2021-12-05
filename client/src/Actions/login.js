import axios from 'axios';
import {authBase} from "../config/baseUrl";

const login = async (username, password) => {

  const url = authBase + "/login"

  try {
    const requestBody = {
      username: username,
      password: password
    };
    const response = await axios.post(url, requestBody);
    if(response.data) {
      console.log(response.data)
      return response.data
    }
    return null
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default login;