// import React from "react";
import "./header.css";
import logo from "../assets/images/logo-sm.png";
import profile from "../assets/images/girl-profile.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <p>
          <span className="color1">easy</span>
          <span className="color2">Court</span>
        </p>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="h-list">
        <input
          type="text"
          placeholder="Search Case Number"
          onClick={() => {
            // console.log("clicked");
          }}
        />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Case List</NavLink>
        <NavLink to="/">Register New Case</NavLink>
        <img className="profile" src={profile} alt="profile" />
      </div>
    </div>
  );
}
