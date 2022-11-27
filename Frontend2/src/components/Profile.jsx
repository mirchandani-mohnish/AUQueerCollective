import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
const Profile = () => {
  const [profile, setProfile] = useState(
    useSelector((state) =>
      state.auth.value ? state.auth.value.payload : false
    )
  );

  // useEffect(() => {
  //   setProfile();
  // }, []);
  console.log(profile);
  if (profile) {
    return (
      <div>
        <div className="text-3xl text-bold text-white"> {profile.email}</div>
        <div className="text-3xl text-bold text-white">
          {profile.given_name}{" "}
        </div>
        <div className="text-3xl text-bold text-white"> {profile.name} </div>
      </div>
    );
  } else {
    return (
      <div className="text-3xl text-bold text-white">
        {" "}
        <Link
          to="/login"
          className="flex justify-center bg-white/20 rounded-lg border border-white/30 shadow-lg"
        >
          <Login />
        </Link>
      </div>
    );
  }
};

export default Profile;
