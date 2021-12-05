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
      setLoginType(response.data.user.userType)
    }
  } catch (error) {
    console.log(error);
  }
};

export default checkSession;