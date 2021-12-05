import axios from 'axios';
import base from "./baseUrl";

const login = async (username, password) => {

  const url = "/auth/login"

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