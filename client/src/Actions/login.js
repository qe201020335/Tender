import axios from 'axios';

const login = async (setMyUser, setLoginType, username, password) => {
  // try {
  //   const requestBody = {
  //     username: username,
  //     password: password
  //   };
  //   console.log(requestBody)
  //   const response = await axios.post(
  //     'http://localhost:5000/login',
  //     requestBody);
  //   if(response.data) {
  //     console.log(response.data.user)
  //     setMyUser(response.data.user)
  //     setLoginType(response.data.user.userType)
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
  // Create our request constructor with all the parameters we need
  const requestBody = {
    username: username,
    password: password
  };
  const request = new Request("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify(requestBody),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
  });

  // Send the request with fetch()
  fetch(request)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          }
      })
      .then(json => {
          if (json.user !== undefined) {
            console.log(json.user)
            setMyUser(json.user)
          }
      })
      .catch(error => {
          console.log(error);
      });
  
};

export default login;