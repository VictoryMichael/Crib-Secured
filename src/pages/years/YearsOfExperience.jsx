import React from "react";
import Left from "../../assets/left1.png";
import Right from "../../assets/right1.png";
import TopLeft from "../../assets/top1.png";
import Abut from "../../assets/abutUs.jpg";

import { MdOutlinePersonalInjury } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import "./Years.css";

const YearsOfExperience = () => {
  return (
    <section className="main_years-container">
      <article className="left-wrappr">
        <div className="top_topimg_flex">
          <img className="top-left" src={TopLeft} alt="" />
          <div className="l30_wrappr">
            <h1>30+</h1>
            <span>YEARS OF EXPERIENCE</span>
          </div>
        </div>

        <img className="main_about-img" src={Abut} alt="" />

        <div className="down_topimg_flex">
          <img className="left-img_1" src={Left} alt="" />
          <img className="right-img_1" src={Right} alt="" />
        </div>
      </article>

      <article className="right-wrappr">
        <div className="aim_containr">
          <div className="abt_right-wrppr">
            <svg width="50" height="10">
              <line
                x1="0"
                y1="5"
                x2="200"
                y2="5"
                style={{ strokeWidth: 2, stroke: "#db5b44" }}
              />
            </svg>
            <span>About Us</span>
          </div>

          <h2>We aim to provide you with a life with full protection</h2>

          <p>
            Quam ultricies felis faucibus urna eleifend. Non odio ligula nisi
            egestas primis congue lectus morbi sagittis. Accumsan ultrices porta
            sagittis a letius. Rutrum ipsum facilisis nam lorem sit platea
            dapibus pellentesque.
          </p>

          <hr className="vm-hr_line" />

          <div className="VM-wrappr">
            <div className="main_vision-wrappr">
              <div className="vm-icon-contar">
                <span>
                  <MdOutlinePersonalInjury />
                </span>
              </div>

              <div className="vm_aim-text">
                <h3>VISION</h3>
                <h6>
                  Platea sem aenean hendrerit massa cursus. Scelerisque feugiat
                  parturient eros tellus imperdiet.
                </h6>
              </div>
            </div>

            <div className="vm-divide_line">
              {/* <svg width="5" height="100">
                <line
                  x1="5"
                  y1="0"
                  x2="5"
                  y2="100"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg> */}
            </div>

            <div className="main_vision-wrappr">
              <div className="vm-icon-contar">
                <span>
                  <AiOutlineAim />
                </span>
              </div>

              <div className="vm_aim-text">
                <h3>Mission</h3>
                <h6>
                  Platea sem aenean hendrerit massa cursus. Scelerisque feugiat
                  parturient eros tellus imperdiet.
                </h6>
              </div>
            </div>
          </div>

          <button className="vm-btn">DISCOVER MORE</button>
        </div>
      </article>
    </section>
  );
};

export default YearsOfExperience;
