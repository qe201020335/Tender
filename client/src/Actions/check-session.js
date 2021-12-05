import axios from 'axios';
import base from "./baseUrl";

const checkSession = async (setMyUser, setLoginType) => {

  const url = base + "/check-session"

  try {
    const response = await axios.get(url);
    console.log(response)
    if(response.data) {
      console.log(response.data.user)
      setMyUser(response.data.user)
      setLoginType(response.data.user.userType)
    }
  } catch (error) {
    console.log(error);
  }
};

export default checkSession;