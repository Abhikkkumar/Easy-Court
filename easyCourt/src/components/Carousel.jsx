import React from "react";
import "./carousel.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Carousel() {
  return (
    <div className="carousel">
      <>
        <Swiper
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className="slides s1">
            <div className="slides-inner">
              <h1 className="text-[1.2rem] sm:text-[3.2rem] text-[#fff]">
                Welcome to <span style={{ color: "var(--color1)" }}>easy</span>
                <span style={{ color: "var(--color2)" }}>Court</span>
              </h1>
              <p>We help you manage your day-to-day court activity.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s2">
            <div className="slides-inner">
              <h1 className="text-[1.2rem] sm:text-[3.2rem] text-[#fff]">
                Welcome to <span style={{ color: "var(--color1)" }}>easy</span>
                <span style={{ color: "var(--color2)" }}>Court</span>
              </h1>
              <p>We help you manage your day-to-day court activity.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s3">
            <div className="slides-inner">
              <h1 className="text-[1.2rem] sm:text-[3.2rem] text-[#fff]">
                Welcome to <span style={{ color: "var(--color1)" }}>easy</span>
                <span style={{ color: "var(--color2)" }}>Court</span>
              </h1>
              <p>We help you manage your day-to-day court activity.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s4">
            <div className="slides-inner">
              <h1 className="text-[1.2rem] sm:text-[3.2rem] text-[#fff] ">
                Welcome to <span style={{ color: "var(--color1)" }}>easy</span>
                <span className="text-[var(--color2)] font-[600]">Court</span>
              </h1>
              <p >We help you manage your day-to-day court activity.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
