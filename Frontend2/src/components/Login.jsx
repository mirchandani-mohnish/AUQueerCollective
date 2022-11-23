import React from "react";
import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProfile, resetProfile } from "../reducers/authReducer";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const url = `http://localhost:5000/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
      dispatch(setProfile(data.user._json));
      console.log(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const googleAuth = () => {
    window.open(`http://localhost:5000/auth/google/callback`, "_self");
  };

  const handleLoginSuccess = (credentialResponse) => {
    const decodedResponse = jwt_decode(credentialResponse.credential);
    console.log(credentialResponse);
    console.log(decodedResponse);
    const loginToken = {
      socialId: decodedResponse.socialId,
      username: decodedResponse.username,
    };
    axios
      .post("http://localhost:5000/auth/login", loginToken)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  console.log(user);
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
          {/* <button
            className="bg-[#3ED598] text-white w-full h-[50px] rounded-lg"
            onClick={googleAuth}
          >
            LOGIN
          </button> */}
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          ;
        </div>
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
