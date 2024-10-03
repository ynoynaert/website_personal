import { Outlet } from "react-router-dom";
import Navbar from "./NavBar/NavBar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
