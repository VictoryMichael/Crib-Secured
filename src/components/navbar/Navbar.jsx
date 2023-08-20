
import React, { useState } from "react";
import Header from "../header/Header";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <Header />
      <article className="nav-main-containr">
    
        <div className="menu-icon-container">
          {isMobileMenuOpen ? (
            <AiOutlineClose className="menu-icon" onClick={handleMenuToggle} />
          ) : (
            <AiOutlineMenuUnfold className="menu-icon" onClick={handleMenuToggle} />
          )}
        </div>







        {/* Hide the permanent links container on screens smaller than 800px */}
        <div
          className={`nav-perma_linkcontainr ${isMobileMenuOpen ? "show" : ""}`}
        >
          <a className="nav-items" href="">
            HOME
          </a>
          <a className="nav-items" href="">
            ABOUT
          </a>
          <DropdownButton
            title="SERVICES"
            className="custom-dropdown nav-items-drop hover4-drop"
          >
            <Dropdown.Item href="#/action-1">Pricing plan</Dropdown.Item>
          </DropdownButton>

          <a className="nav-items" href="">
            CASE STUDY
          </a>
          <a className="nav-items" href="">
            CONTACT
          </a>
          <DropdownButton title="PAGES" className="custom-dropdown hover4-drop">
            <Dropdown.Item href="#/action-1">Our Team</Dropdown.Item>
            <Dropdown.Item href="#/action-1">FAQ</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="nav_social-container">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {" "}
            <BsFacebook />{" "}
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {" "}
            <BsYoutube />{" "}
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {" "}
            <BsInstagram />{" "}
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {" "}
            <BsTwitter />{" "}
          </a>
        </div>
      </article>
    </nav>
  );
};

export default Navbar;
