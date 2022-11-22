import React from "react";
// import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';

import { useEffect } from "react";

const baseURL = process.env.REACT_APP_BASEURL || "http://localhost:5000";




const Login = () => {
  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      window.history.back();
    }
    console.log("Mounted");
  }, []);

  function successGoogleLogin(response) {
    // Create an instance of the user
    console.log(response);
    // axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json').then(
    // (userData) => {
    //   console.log(userData);
    // }  
    // )
    
    const user = {
      username: response.profileObj.name,
      socialId: response.googleId,
    };
    console.log(user);
    // Make an API call to either findOrCreate the user
    axios
      .post("http://localhost:5000/auth/login", user)
      .then((res) => {
        // Reload the page once count is 1 to reload the navbar component and display "Logout" as an option instead of "Login"
        let count = 0;

        // If the response has a valid social Id
        if (res.data.socialId === response.googleId) {
          // Set the username and isLoggedIn in the session storage
          sessionStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("username", res.data.username);
          count++;

          // Remove the user session cookie after 24 hours, to log the user out.
          // This is for cases when the user doesn't end the session or doesn't logout
          window.setTimeout(() => {
            sessionStorage.removeItem("isLoggedIn");
            sessionStorage.removeItem("username");
          }, 24 * 60 * 60 * 60);

          // If user data is stored in the session Storage, then reload page to update Navbar component appropriately
          if (count === 1) {
            window.location.reload();
          }
        }
        // If user data returned is invalid, then redirect to the login page once again
        else {
          window.location = "/login";
        }
      })
      .catch((err) => console.error(err));
  }

  function failureGoogleLogin(response) {
    console.error(response);
    console.log("error hua");
    console.log(response);
    // window.location = "/";
  }

  return (
    <div className="flex py-16 justify-between px-32">
      <div className="h-[175px] w-[175px] bg-white rounded-full opacity-20 absolute -top-10 left-[20%]"></div>
      <div className="h-[375px] w-[375px] bg-transparent rounded-full border-2 border-[#96A7AF] opacity-20 absolute -top-16 -right-24"></div>
      <div className="h-[375px] w-[375px] bg-transparent rounded-full border-2 border-[#96A7AF] opacity-20 absolute -bottom-60 right-[30%]"></div>
      <div className="h-[200px] w-[400px] bg-transparent rounded-[50%] border-2 border-[#96A7AF] opacity-20 absolute  -top-8 -left-72 "></div>

      <div>
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div className="flex flex-col -space-y-10">
          <p className="text-[110px] font-bold font-sfpro text-white ">
            Because
          </p>
          <p className="text-[110px] font-bold font-sfpro text-[#25C685] ">
            Events
          </p>
          <p className="text-[110px] font-bold font-sfpro text-white ">
            Matter
          </p>
        </div>
      </div>
      <div className="backdrop-blur-3xl font-sfpro p-10 w-[600px] h-[600px] bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-3xl">
        <p className="text-2xl text-white">Login</p>
        <div className="h-[2px] w-[200px] bg-white my-3"></div>
        <p className="text-lg text-white mb-10">Welcome on board with us!</p>
        <div className="flex flex-col space-y-10">
          <div>
            <p className="text-md text-white ">Username</p>
            <input
              type="text"
              className="w-full h-[40px] bg-white/20 rounded-lg border border-white/30 placeholder:text-white/70 p-3"
              placeholder="Enter your username"
            ></input>
          </div>
          <div>
            <p className="text-md text-white ">Password</p>
            <input
              type="text"
              className="w-full h-[40px] bg-white/20 rounded-lg border border-white/30 placeholder:text-white/70 p-3"
              placeholder="Enter your password"
            ></input>
            <p className="flex text-sm text-white justify-end py-3">
              Forgot Password?
            </p>
          </div>
        </div>

        <div className="pt-10">
        <GoogleLogin
        onSuccess={successGoogleLogin}
        onError={() => {
          console.log('Login Failed');
        }}
      />
          {/* <GoogleLogin
            className="bg-[#3ED598] text-white w-full h-[50px] rounded-lg"
            clientId="241223455919-l41jqso8imls9as7vik5sl12q9l800hj.apps.googleusercontent.com"
            buttonText="Log in With Google"
            onSuccess={successGoogleLogin}
            onFailure={failureGoogleLogin}
            cookiePolicy={"single_host_origin"}
          /> */}
        </div>
        {/* 
        <div className="pt-10"><button className="bg-[#3ED598] text-white w-full h-[50px] rounded-lg">LOGIN</button></div> */}
        <div className="pt-5 text-white text-sm flex w-full justify-center">
          New to EP?{" "}
          <b className="cursor-pointer px-1">
            <u>Register</u>
          </b>{" "}
          Here
        </div>
      </div>
    </div>
  );
};

export default Login;
