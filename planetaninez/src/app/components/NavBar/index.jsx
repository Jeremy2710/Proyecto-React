import React from "react";
import "./NavBar.scss";

export const NavBar = () => {
    return (
        <nav classname="navbar">
      <div classname="logo">
        <img src="planetaninez.png" />
        <h2>Planeta Niñez</h2>
      </div>
      <div classname="links">
        <a href="#">lorem</a>
        <a href="#">lorem</a>
        <div classname="dropdown">
          <a href="#"
            >Explore
            <img src="chevron.png" />
          </a>
          <div classname="menu">
            <a href="#"> Lorem</a>
            <a href="#"> lorem </a>
            <a href="#"> lorem </a>
            <a href="#"> lorem </a>
            <a href="#"> lorem </a>
            <a href="#"> lorem </a>
          </div>
        </div>
        <a href="#" classname="join-link"> join </a>
      </div>
    </nav>
    );
}
export default (NavBar)