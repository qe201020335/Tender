import axios from "axios";

const logout = async () => {
  try {
    console.log("try to logout")
    const response = await axios.get(
      'http://localhost:5000/logout');
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