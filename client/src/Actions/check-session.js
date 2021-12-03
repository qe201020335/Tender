import axios from 'axios';

const checkSession = async (setMyUser, setLoginType) => {
  try {
    const response = await axios.get(
      'localhost:5000/check-session'
    );
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