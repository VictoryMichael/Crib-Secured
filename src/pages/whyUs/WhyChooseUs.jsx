import React from "react";
import MainChooseImg2 from "../../assets/crib.jpg";
import { TiTick } from "react-icons/ti";
import "./WhyChooseUs.css";


const WhyChooseUs = () => {
  return (
    <section className="main_whychoose-containr">
      <div className="choosx-main_wrappr">
        <img  src={MainChooseImg2} alt="" />
        <div className="prof_guard">
          <span>145+</span>
          <h6>PROFESSIONAL GUARDS</h6>
        </div>
      </div>

      <div className="lastrow_container">
        <div className="choost_text">
          <svg width="50" height="10">
            <line
              x1="0"
              y1="5"
              x2="200"
              y2="5"
              style={{ strokeWidth: 2, stroke: "#db5b44" }}
            />
          </svg>
          <span> Why Choose Us</span>
        </div>

        <h1>Dedicated team with ontime response</h1>
        <p>
          A cubilia felis maecenas mus molestie. Imperdiet blandit velit augue
          dignissim eu metus. Gravida cras elementum suscipit vestibulum
          sollicitudin aenean penatibus proin. Nulla enim elit tempor neque
          orci.
        </p>

        <div className="choose-option-wrappr">
          <div>
            <span>
              {" "}
              <TiTick />{" "}
            </span>{" "}
            <h6>Security Consulting</h6>{" "}
          </div>
          <div>
            <span>
              {" "}
              <TiTick />{" "}
            </span>{" "}
            <h6>Private Security</h6>{" "}
          </div>
          <div>
            <span>
              {" "}
              <TiTick />{" "}
            </span>{" "}
            <h6>Guard House</h6>{" "}
          </div>
          <div>
            <span>
              {" "}
              <TiTick />{" "}
            </span>{" "}
            <h6>Always Honest</h6>{" "}
          </div>
          <div>
            <span>
              {" "}
              <TiTick />{" "}
            </span>{" "}
            <h6>Close Protections</h6>{" "}
          </div>
          <div>
            <span>
              {" "}
              <TiTick />{" "}
            </span>{" "}
            <h6>24/7 Constant Support</h6>{" "}
          </div>
        </div>

        <hr />
        <div className="sussfu-aswtx">
          YOU CAN SEE OUR SUCCESSFUL AWESOME PROJECTS
          <span>HERE.</span>{" "}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
