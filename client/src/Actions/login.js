import axios from 'axios';

const login = async (setMyUser, setLoginType, username, password) => {
  try {
    const request = {
      username: username,
      password: password
    };
    console.log(request)
    const response = await axios.post(
      'http://localhost:5000/login',
      request
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

export default login;