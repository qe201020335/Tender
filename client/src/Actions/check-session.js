import axios from 'axios';
import {authBase} from "../config/baseUrl";

const checkSession = async (setMyUser, setLoginType) => {

  const url = authBase + "/check-session"

  try {
    const response = await axios.get(url);
    console.log(response)
    if(response.data) {
      console.log(response.data)
      setMyUser(response.data.userId)
      setLoginType(response.data.userType)
    }
  } catch (error) {
    if (error.message.includes("401")) {
      console.log("we are not logged in!")
    }
  }
};

export default checkSession;