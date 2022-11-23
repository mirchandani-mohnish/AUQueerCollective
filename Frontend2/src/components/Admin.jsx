import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Data from "./Eventdata";
import { Link } from "react-router-dom";

const x = new Date();
const today = x.toLocaleDateString("en-US");
const now = x.toLocaleTimeString("en-us", { hour12: false }).substring(0, 5);
// const x = Date().getDate()

const ongoing = Data.filter((x) => {
  return x.date === today && x.startTime < now && x.endTime > now;
});

const future = Data.filter((x) => {
  return x.date > today;
});

const Admin = () => {
  return (
    <div className="flex flex-col space-y-10">
      <Link to="/events">
        <button className="w-[200px] h-[50px] bg-[#3DD598] rounded-lg text-lg font-bold flex justify-center items-center space-x-2 text-white">
          <AddCircleOutlineIcon /> <p>New Event</p>
        </button>
      </Link>
      <div>
        <div className="font-bold text-white text-[20px] mb-4">
          Ongoing Events
        </div>
        {ongoing.map((x) => (
          <div className="w-full h-[50px] bg-gradient-to-r from-white/20 to-white/5 text-white font-bold text-[18px] rounded-xl border-2 border-white/20 flex mb-3 justify-start px-5 items-center">
            <p key={x.id}>{x.name}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="font-bold text-white text-[20px] mb-4">
          Future Events
        </div>
        {future.map((x) => (
          <div className="w-full h-[50px] bg-gradient-to-r from-white/20 to-white/5 text-white font-bold text-[18px] rounded-xl border-2 border-white/20 flex mb-3 justify-start px-5 items-center">
            <p key={x.id}>{x.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
