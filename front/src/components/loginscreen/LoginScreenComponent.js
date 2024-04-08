import React, { useState } from "react";
import Greetings from './Greetings';
import Header from './Header';
import SocialLogin from './SocialLogin';
import Divider from './Divider';
import LoginFields from './LoginFields';
import Captcha from './Captcha';
import IconButton from './IconButton';
import RecoverPassword from './RecoverPassword';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginScreenComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(null);

  const handleLogin = () => {
    // Perform validation or other checks if needed
    // Create a request body with username and password
    const requestBody = {
      username: username,
      password: password
    };

    // Send a POST request to your backend API
    fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        // Handle response from the server
        if (response.ok) {
          // Login successful, handle it accordingly
          toast.success('Login Successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setLogin(["successful", "ok"]);
        } else {
          // Login failed, handle it accordingly
          setLogin("failed");
          toast.error('Login Failed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch(error => {
        toast.info('Service Unavailable!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

      });
  };

  return (
    <div>
      <Header />
      <Greetings />
      <SocialLogin />
      <Divider />
      <LoginFields login={login} setUsername={setUsername} setPassword={setPassword} />
      <Captcha />
      <IconButton handleLogin={handleLogin} />
      <RecoverPassword />
      <ToastContainer />
    </div>
  );
}

export default LoginScreenComponent;
