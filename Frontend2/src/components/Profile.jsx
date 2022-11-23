import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(
    useSelector((state) =>
      state.auth.value ? state.auth.value.payload : "Login Please"
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
        <div className="text-3xl text-bold text-white">
          {" "}
          this is your profile
        </div>
        <div className="text-3xl text-bold text-white">
          {" "}
          this is your profile
        </div>
        <div className="text-3xl text-bold text-white">
          {" "}
          this is your profile
        </div>
        <div className="text-3xl text-bold text-white">
          {" "}
          this is your profile
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-3xl text-bold text-white">
        {" "}
        Please login <Link to="/login">Click Here</Link>
      </div>
    );
  }
};

export default Profile;
