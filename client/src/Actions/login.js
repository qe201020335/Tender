import axios from 'axios';

const login = async (username, password) => {
  try {
    const requestBody = {
      username: username,
      password: password
    };
    console.log(requestBody)
    const response = await axios.post(
      'http://localhost:5000/login',
      requestBody);
    if(response.data) {
      console.log(response.data.user)
      return response.data.user
    }
    return null
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default login;