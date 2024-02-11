// import React from "react";
import "./home.css";
import Calendar from "./Calendar";

export default function Home() {
  return (
    <div className="home">
      <div className="sub-home-1">
        <h1>Welcome to <span style={{color:"var(--color1)"}}>easy</span><span style={{color:"var(--color2)"}}>Court</span></h1>
        <p>We help you to manage your day-to-day court activity.</p>
      </div>
      <div className="sub-home-2">
        <div className="sh2-1">
          <p className="btn1">Click here to see all listed cases for today.</p>
        </div>
        <div className="my-calendar">
          <p>
            Choose a date on calender to see a complete list of cases on that
            day.
          </p>
          <Calendar />
        </div>
      </div>
    </div>
  );
}
