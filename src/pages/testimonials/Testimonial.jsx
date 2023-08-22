import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdFormatQuote } from "react-icons/md";
import Test from "../../assets/bkz.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="main_testimonial-containr">
      <div className="test-bordr">
        <span className="quote-icon">
          <MdFormatQuote />
        </span>

        <div className="test-title">
          <h6>Testimonials</h6>
          <h1>Our Clients Reviews</h1>
          <p>
            Ad vitae accumsan velit vivamus faucibus sapien ac augue bibendum <br />
            porttitor. Ad vitae accumsan velit vivamus faucibus sapien ac augue bibendum
            porttitor.
          </p>
        </div>

        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 1000, // Set the delay to 1 second
              disableOnInteraction: false,
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="testimial-words">
                sit, amet consectetur adipisicing elit. Dicta odit recusandae
                reiciendis possimus eum obcaecati, nobis voluptates aperiam
                iure! Laboriosam soluta pariatur ad distinctio
              </div>
              <div className="testi-img-wrappr">
                <img src={Test} alt="" />
                <div className="reviewrs_name-wrappr">
                  <h4>Krinks Event</h4>
                  <span>Planner</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimial-words">
                sit, amet consectetur adipisicing elit. Dicta odit recusandae
                reiciendis possimus eum obcaecati, nobis voluptates aperiam
                iure! Laboriosam soluta pariatur ad distinctio
              </div>
              <div className="testi-img-wrappr">
                <img src={Test} alt="" />
                <div className="reviewrs_name-wrappr">
                  <h4>Krinks Event</h4>
                  <span>Planner</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimial-words">
                sit, amet consectetur adipisicing elit. Dicta odit recusandae
                reiciendis possimus eum obcaecati, nobis voluptates aperiam
                iure! Laboriosam soluta pariatur ad distinctio
              </div>
              <div className="testi-img-wrappr">
                <img src={Test} alt="" />
                <div className="reviewrs_name-wrappr">
                  <h4>Krinks Event</h4>
                  <span>Planner</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimial-words">
                sit, amet consectetur adipisicing elit. Dicta odit recusandae
                reiciendis possimus eum obcaecati, nobis voluptates aperiam
                iure! Laboriosam soluta pariatur ad distinctio
              </div>
              <div className="testi-img-wrappr">
                <img src={Test} alt="" />
                <div className="reviewrs_name-wrappr">
                  <h4>Krinks Event</h4>
                  <span>Planner</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimial-words">
                sit, amet consectetur adipisicing elit. Dicta odit recusandae
                reiciendis possimus eum obcaecati, nobis voluptates aperiam
                iure! Laboriosam soluta pariatur ad distinctio
              </div>
              <div className="testi-img-wrappr">
                <img src={Test} alt="" />
                <div className="reviewrs_name-wrappr">
                  <h4>Krinks Event</h4>
                  <span>Planner</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimial-words">
                sit, amet consectetur adipisicing elit. Dicta odit recusandae
                reiciendis possimus eum obcaecati, nobis voluptates aperiam
                iure! Laboriosam soluta pariatur ad distinctio
              </div>
              <div className="testi-img-wrappr">
                <img src={Test} alt="" />
                <div className="reviewrs_name-wrappr">
                  <h4>Krinks Event</h4>
                  <span>Planner</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimial-words">
                sit, amet consectetur adipisicing elit. Dicta odit recusandae
                reiciendis possimus eum obcaecati, nobis voluptates aperiam
                iure! Laboriosam soluta pariatur ad distinctio
              </div>
              <div className="testi-img-wrappr">
                <img src={Test} alt="" />
                <div className="reviewrs_name-wrappr">
                  <h4>Krinks Event</h4>
                  <span>Planner</span>
                </div>
              </div>
            </SwiperSlide>

      
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default Testimonial;
