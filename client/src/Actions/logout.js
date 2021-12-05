import axios from "axios";
import {authBase} from "../config/baseUrl";

const logout = async () => {

  const url = authBase + "/logout"

  try {
    console.log("try to logout")
    const response = await axios.get(url);
    if(response.status === 200) {
      console.log("logout!")
      return true
    }
    return false
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default logout;