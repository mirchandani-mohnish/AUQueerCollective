import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const profile = useSelector((state) => state.authentication);
  console.log(profile);
  return (
    <div className="text-3xl text-bold text-white"> this is your profile</div>
  );
};

export default Profile;
