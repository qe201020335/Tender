import axios from 'axios';

const login = async (setMyUser, setLoginType, email, password) => {
  try {
    const request = {
      email: email,
      password: password
    };
    const response = await axios.post(
      'localhost:5000/login',
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