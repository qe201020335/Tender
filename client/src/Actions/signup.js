import axios from 'axios';
import {authBase} from "../config/baseUrl";

const signup = async (username, password, userType) => {

  const url = authBase + "/signup"

  try {
    const requestBody = {
      username: username,
      password: password,
      userType: userType
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

export default signup;