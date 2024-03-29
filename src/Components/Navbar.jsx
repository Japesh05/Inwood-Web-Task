import hamburger from "/hamburger.svg";
import logo from "/Logo.svg";
import cart from "/cart.svg";
import profile from "/profile.svg";
import search from "/search.svg";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import Links from "./Links";

export default function Navbar({open_navbar}) {
  const nav_data = [
    { 1: ["Home", "/"] },
    { 2: ["Products", "/products"] },
    { 3: ["Categories", "/categories"] },
    { 4: ["About", "/about"] },
    { 5: ["Contact Us", "/contact"] },
  ];



  return (
    <nav className="navbar">
      <div className="hamburger" onClick={open_navbar}><img src={hamburger} alt="hamburger" className="hamburger" /></div>
      <img src={logo} alt="logo" />
      <span className="nav-links">
        <Links data={nav_data} />
      </span>
      <div className="actions">
        <img src={search} alt="search" />
        <NavLink to="/cart">
          <img src={cart} alt="cart" />
        </NavLink>
        <NavLink to="/profile">
          <img src={profile} alt="profile" />
        </NavLink>
      </div>
    </nav>
  );
}
