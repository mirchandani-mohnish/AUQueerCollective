import { useState } from "react";
import AddEvents from "./components/AddEvents";

import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Gallery from "./components/Gallery";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Roles from "./components/Roles";
import Event from "./components/Event";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-dark-greys w-screen h-screen ">
      <div className="absolute h-full ">
        <Navbar open={open} setOpen={setOpen} />
      </div>
      <div
        className={`relative ${
          open ? "w-9/12 ml-[300px]" : "w-5/6 ml-[150px]"
        }  h-full  flex flex-col gap-[60px] duration-200`}
      >
        <div className="h-11 top-8 relative">
          <SearchBar open={open} setOpen={setOpen} />
        </div>
        <div className="h-5/6 relative bg-light-greys rounded-lg p-7">
          <div className="h-full relative overflow-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
            <Routes>
              <Route
                path="/"
                element={<Gallery open={open} setOpen={setOpen} />}
              />
              <Route path="/admin" element={<Admin />} />

              <Route path="/addevents" element={<AddEvents />} />
              <Route path="/event" element={<Event />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
