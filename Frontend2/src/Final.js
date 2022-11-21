
import Roles from "./components/Roles"
import Admin from "./components/Admin"
import App from "./App";
import { Route, Routes } from "react-router-dom"
import { Login } from "@mui/icons-material";




function Final() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/roles" element={<Roles />} />
    </Routes>
  );
}

export default Final;
