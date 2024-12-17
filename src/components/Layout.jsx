import { Outlet } from "react-router-dom";
import Navbar from "./NavBar/NavBar.jsx";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
