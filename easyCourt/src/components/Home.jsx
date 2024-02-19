// import React from "react";
import "./home.css";
import Calendar from "./Calendar";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div className="home">
      <Carousel />
      <div className="sub-home-2">
        <div className=" text-center w-[100%] md:w-[48%] ">
          <p  className="text-[1.2rem]">Click below to see all listed cases for today.</p>
          <button className="btn1">Click me!</button>
        </div>
        <div className="my-calendar w-[100%] md:w-[48%]">
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
