import React from "react";
import Logo from "../../assets/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  return (
    <section className="main_header-containr">
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <div className="headr_contact-container">
        <div className="call_headr-wrapper">
          <div className="headr_contact-icon">
            <span>
              <BsFillTelephoneFill className="hder_icon" />
            </span>
          </div>
          <div className="servic_headr-details">
            <p>On-Call Service 24/7</p>
            <h4>(+234) 888-800-212</h4>
          </div>
        </div>
        <div className="call_headr-wrapper">
          <div className="headr_contact-icon">
            <span>
              <AiFillMail className="hder_icon" />
            </span>
          </div>
          <div className="servic_headr-details">
            <p>Email Address</p>
            <h4>mrcribdaddy@gmail.com</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
