import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero_main-container">
      <article className="hero_section--wrappr">
        <div className="content-wrappr">
          <div className="suplyx_wrapr">
            <span>
              <svg width="50" height="10">
                <line
                  x1="0"
                  y1="5"
                  x2="200"
                  y2="5"
                  style={{ strokeWidth: 2, stroke: "#db5b44" }}
                />
              </svg>
            </span>
            <h6> We Supply Protection</h6>
          </div>

          <h1> Experienced secure services </h1>
          <p>
            At Crib Secured, we understand the importance of security. Our
            experienced team is dedicated to safeguarding your well-being,
            ensuring your peace of mind. With a proven track record in the
            industry, we are committed to delivering exceptional protection
            services.
          </p>
          <div className="hero_btncontainer">
            <button className="hero_contact-btn">CONTACT US</button>
            <button className="hero_more-btn">READ MORE</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
