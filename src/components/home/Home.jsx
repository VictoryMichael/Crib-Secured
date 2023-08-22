import React from "react";
import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../../pages/hero/Hero";
import Serviceb from "../../assets/trvl.jpg";
import Servicec from "../../assets/protect.jpg";
import Serviced from "../../assets/secrtu.jpg";
import { RiPoliceCarFill } from "react-icons/ri";
import { GiCctvCamera } from "react-icons/gi";
import { PiChatsFill } from "react-icons/pi";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineDoubleRight,
} from "react-icons/ai";

import { MdOutlinePerson4, MdOutlineSecurity, MdLock } from "react-icons/md";
import "./Home.css";
import YearsOfExperience from "../../pages/years/YearsOfExperience";
import WhyChooseUs from "../../pages/whyUs/WhyChooseUs";
import Testimonial from "../../pages/testimonials/Testimonial";

const Home = () => {
  const [percentages, setPercentages] = useState([40, 50, 90, 0]);

  useEffect(() => {
    // Here, you can update the percentages after a certain delay
    // This will simulate the animation effect
    setTimeout(() => {
      setPercentages([40, 50, 90, 0]);
    }, 500);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section>
      <article>
        <Hero />
      </article>

      <article className="home_service-container">
        <div className="serviv-wrappr">
          <div className="serv_img-container overlay">
            <img src={Serviceb} alt="" />
          </div>
          <div className="servi-sectn-wrpr">
            <h4>Executive protection & Travel risk management</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="serviv-wrappr">
          <div className="serv_img-container overlay">
            <img src={Servicec} alt="" />
          </div>
          <div className="servi-sectn-wrpr">
            <h4>Special operations to protect your assets</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="serviv-wrappr">
          <div className="serv_img-container overlay">
            <img src={Serviced} alt="" />
          </div>
          <div className="servi-sectn-wrpr">
            <h4>Security Risk Management & Security Audits</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
            <button>Learn More</button>
          </div>
        </div>
      </article>

      <article>
        <YearsOfExperience />
      </article>
      {/*     <article className="hompage_banner">
        <div className="hm_main-wrappr">
          <div>
            <div className="hompage_play">
              <RiPlayFill className="hm_play" />
            </div>
          </div>

          <div className="reliable-rapwr">
            <h1>Professional security with reliable service</h1>
            <p>
              Et egestas quam sit iaculis inceptos dis praesent lectus. Platea
              letius ac maecenas gravida natoque dignissim consequat. Consequat
              sem nam lobortis himenaeos tellus quisque sollicitudin lectus.
            </p>
            <button>DISCOVER MORE</button>
          </div>
        </div>
      </article> */}
      <article className="what-offr">
        <div className="whatOffr-wrappr">
          <span>What We Offer</span>
          <h3>Providing you protection is our only business</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <section className="servic_detail-containr">
          <div className="personl_sevic-offer">
            <MdOutlinePerson4 className="offr_iconx" />
            <h4>Personal Protection</h4>
            <p>
              Vitae fusce taciti tincidunt duis maximus amet nunc mi. Vulputate
              inceptos mus dignissim nostra ante taciti elit venenatis sit
              etiam.
            </p>
            <button>Learn more</button>
          </div>
          <div className="personl_sevic-offer">
            <MdOutlineSecurity className="offr_iconx" />
            <h4>Commercial Security</h4>
            <p>
              Vitae fusce taciti tincidunt duis maximus amet nunc mi. Vulputate
              inceptos mus dignissim nostra ante taciti elit venenatis sit
              etiam.
            </p>
            <button>Learn more</button>
          </div>
          <div className="personl_sevic-offer">
            <PiChatsFill className="offr_iconx" />
            <h4>Security Consulting</h4>
            <p>
              Vitae fusce taciti tincidunt duis maximus amet nunc mi. Vulputate
              inceptos mus dignissim nostra ante taciti elit venenatis sit
              etiam.
            </p>
            <button>Learn more</button>
          </div>
          <div className="personl_sevic-offer">
            <MdLock className="offr_iconx" />
            <h4>Objects Protected</h4>
            <p>
              Vitae fusce taciti tincidunt duis maximus amet nunc mi. Vulputate
              inceptos mus dignissim nostra ante taciti elit venenatis sit
              etiam.
            </p>
            <button>Learn more</button>
          </div>
          <div className="personl_sevic-offer">
            <GiCctvCamera className="offr_iconx" />
            <h4>Surveillance Cameras</h4>
            <p>
              Vitae fusce taciti tincidunt duis maximus amet nunc mi. Vulputate
              inceptos mus dignissim nostra ante taciti elit venenatis sit
              etiam.
            </p>
            <button>Learn more</button>
          </div>
          <div className="personl_sevic-offer">
            <RiPoliceCarFill className="offr_iconx" />
            <h4>Transport Security</h4>
            <p>
              Vitae fusce taciti tincidunt duis maximus amet nunc mi. Vulputate
              inceptos mus dignissim nostra ante taciti elit venenatis sit
              etiam.
            </p>
            <button>Learn more</button>
          </div>
        </section>
      </article>

      <article>
        <WhyChooseUs />
      </article>

      <article className="skill_section">
        <section className="skill-expr_wrappr">
          <div className="expernced_providing">
            <h1>We are experienced in providing you with security</h1>
            <span>
              <svg width="200" height="20">
                <line
                  x1="0"
                  y1="10"
                  x2="200"
                  y2="10"
                  stroke="#fff"
                  stroke-width="4"
                />
              </svg>
            </span>
          </div>
        </section>

        <section className="main-equip_flow">
          <p>
            Justo ornare congue id posuere morbi euismod. Lacus risus accumsan
            porta imperdiet eros luctus. Elementum tellus convallis etiam
            hendrerit mi viverra consectetuer. Letius primis risus leo gravida
            tristique eu magna pulvinar amet. Maximus metus nulla eget cursus
            tristique urna. Pede quisque ac conubia magna tempor mauris nulla
            efficitur.
          </p>
          <div>
            {/* ******************************* */}

            <div className="container">
              <div className="skill-box">
                <div className="skil_percnt">
                  <span className="title">Equipment</span>
                  <div className="percnt">
                    <span className="percnt_numbr">70%</span>
                  </div>
                </div>

                <div className="skill-bar">
                  <span className="skill-per html">
                    {/*  <span className="tooltip">95%</span> */}
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <div className="skil_percnt">
                  <span className="title">Security</span>
                  <div className="percnt">
                    <span className="percnt_numbr">80%</span>
                  </div>
                </div>

                <div className="skill-bar">
                  <span className="skill-per css">
                    {/*  <span className="tooltip">95%</span> */}
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <div className="skil_percnt">
                  <span className="title">Experience</span>
                  <div className="percnt">
                    <span className="percnt_numbr">90%</span>
                  </div>
                </div>

                <div className="skill-bar">
                  <span className="skill-per javascript">
                    {/*  <span className="tooltip">95%</span> */}
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <div className="skil_percnt">
                  <span className="title">protection</span>
                  <div className="percnt">
                    <span className="percnt_numbr">99%</span>
                  </div>
                </div>

                <div className="skill-bar">
                  <span className="skill-per react">
                    {/*  <span className="tooltip">95%</span> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <article className="main_team-container">
        <div className="topteam_wrappr">
          <div className="profes-temw">
            <svg width="70" height="20">
              <line
                x1="0"
                y1="10"
                x2="200"
                y2="10"
                stroke="#e66952"
                stroke-width="2"
              />
            </svg>
            <span>Meet Our Team</span>
          </div>
          <h1>Our Professional Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <section className="profess-team_containr">
          <div className="prof_grid-team">
            <div className="pro-img-wrappr">
              <img
                src="https://thumbs.dreamstime.com/b/security-officer-staff-group-event-face-mask-213216571.jpg"
                alt=""
              />
            </div>
            <h4>Robert Bradshaw</h4>
            <span>Security Manager</span>

            <div className="pro_team_social">
              <span>
                <AiOutlineInstagram className="pro_team-icon" />
              </span>
              <span>
                <AiOutlineTwitter className="pro_team-icon" />
              </span>
              <span>
                <AiOutlineFacebook className="pro_team-icon" />
              </span>
            </div>
          </div>
          <div className="prof_grid-team">
            <div className="pro-img-wrappr">
              <img
                src="https://media.istockphoto.com/id/522853681/photo/used-to-look-perfect.jpg?s=612x612&w=0&k=20&c=sDW4MC-7kbcxMGfF3bQENcVKR5ME4oii_bLxTYmoll8="
                alt=""
              />
            </div>
            <h4>CRIBDADDY</h4>
            <span>CEO Manager</span>

            <div className="pro_team_social">
              <span>
                <AiOutlineInstagram className="pro_team-icon" />
              </span>
              <span>
                <AiOutlineTwitter className="pro_team-icon" />
              </span>
              <span>
                <AiOutlineFacebook className="pro_team-icon" />
              </span>
            </div>
          </div>
          <div className="prof_grid-team">
            <div className="pro-img-wrappr">
              <img
                src="https://img.freepik.com/premium-photo/generative-ai-bodyguard-portrait-smart-suit_28914-17765.jpg"
                alt=""
              />
            </div>
            <h4>John Doe</h4>
            <span> Risk Manager</span>

            <div className="pro_team_social">
              <span>
                <AiOutlineInstagram className="pro_team-icon" />
              </span>
              <span>
                <AiOutlineTwitter className="pro_team-icon" />
              </span>
              <span>
                <AiOutlineFacebook className="pro_team-icon" />
              </span>
            </div>
          </div>
          <div className="prof_grid-team">
            <div className="pro-img-wrappr">
              <img
                src="https://media.istockphoto.com/id/501256264/photo/concept-for-afro-american-businessman.jpg?s=612x612&w=0&k=20&c=KZXvwtKocwSGi0HCuT2QaBhnxCqgyUBGH6Q8RQVlzZQ="
                alt=""
              />
            </div>
            <h4>Robert Bradshaw</h4>
            <span>Security Manager</span>

            <div className="pro_team_social">
              <span>
                <AiOutlineInstagram className="pro_team-icon" />
              </span>
              <span>
                <AiOutlineTwitter className="pro_team-icon" />
              </span>
              <span>
                <AiOutlineFacebook className="pro_team-icon" />
              </span>
            </div>
          </div>
        </section>

        <div className="team-btn">
          <button>Contact team</button>
        </div>
      </article>

      <div className="faq-hr_divid">
        <hr />
      </div>

      <article id="faq" className="FAQ-SECTION">
        <section className="faq-main_left">
          <div className="faq-text-div">
            <svg width="70" height="20">
              <line
                x1="0"
                y1="10"
                x2="200"
                y2="10"
                stroke="#e66952"
                stroke-width="2"
              />
            </svg>
            <span>F.A.Q</span>
          </div>
          <h1>Frequently Asked Questions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="inquri_wrappr">
            <h5>Have any inquiry?</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
            <button>Contact us</button>
          </div>
        </section>

        <section className="faq-accordion-wrappr">
          <div
            className={`faq-item ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleAccordionClick(0)}
          >
            <div
              className={`faq-question_wrappr ${
                activeIndex === 0 ? "faq-question_wrappr1" : ""
              }`}
            >
              <h3>How can I reactivate my membership?</h3>
              <span
                className={`faq-icon ${activeIndex === 0 ? "rotate-icon" : ""}`}
              >
                <AiOutlineDoubleRight />
              </span>
            </div>

            {activeIndex === 0 && (
              <div className="faq-answer">
                Dictumst nam tellus donec elementum viverra dis ex. Sem rhoncus
                facilisi maecenas nam aliquet. Convallis ex rutrum semper ut
                fames enim volutpat id nam tristique. Sapien ut iaculis
                ridiculus natoque velit posuere. Ultricies sem inceptos in
                malesuada diam. Nisl elit eget auctor augue elementum turpis
                mollis blandit mi euismod magnis.
              </div>
            )}
          </div>
          <div
            className={`faq-item ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleAccordionClick(1)}
          >
            <div
              className={`faq-question_wrappr ${
                activeIndex === 1 ? "faq-question_wrappr1" : ""
              }`}
            >
              <h3>What are dividends? Do they get reinvested?</h3>
              <span
                className={`faq-icon ${activeIndex === 1 ? "rotate-icon" : ""}`}
              >
                <AiOutlineDoubleRight />
              </span>
            </div>

            {activeIndex === 1 && (
              <div className="faq-answer">
                Dictumst nam tellus donec elementum viverra dis ex. Sem rhoncus
                facilisi maecenas nam aliquet. Convallis ex rutrum semper ut
                fames enim volutpat id nam tristique. Sapien ut iaculis
                ridiculus natoque velit posuere. Ultricies sem inceptos in
                malesuada diam. Nisl elit eget auctor augue elementum turpis
                mollis blandit mi euismod magnis.
              </div>
            )}
          </div>
          <div
            className={`faq-item ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleAccordionClick(2)}
          >
            <div
              className={`faq-question_wrappr ${
                activeIndex === 2 ? "faq-question_wrappr1" : ""
              }`}
            >
              <h3>What are dividends? Do they get reinvested?</h3>
              <span
                className={`faq-icon ${activeIndex === 2 ? "rotate-icon" : ""}`}
              >
                <AiOutlineDoubleRight />
              </span>
            </div>

            {activeIndex === 2 && (
              <div className="faq-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quas cumque at accusamus non reiciendis harum,
                dignissimos eaque ea voluptates rerum! Nam, laboriosam adipisci.
                Ex cupiditate eius dolorum! Eum, architecto!
              </div>
            )}
          </div>
          <div
            className={`faq-item ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleAccordionClick(3)}
          >
            <div
              className={`faq-question_wrappr ${
                activeIndex === 3 ? "faq-question_wrappr1" : ""
              }`}
            >
              <h3>What Are Your Terms And Conditions</h3>
              <span
                className={`faq-icon ${activeIndex === 3 ? "rotate-icon" : ""}`}
              >
                <AiOutlineDoubleRight />
              </span>
            </div>

            {activeIndex === 3 && (
              <div className="faq-answer">
                Dictumst nam tellus donec elementum viverra dis ex. Sem rhoncus
                facilisi maecenas nam aliquet. Convallis ex rutrum semper ut
                fames enim volutpat id nam tristique. Sapien ut iaculis
              </div>
            )}
          </div>
          <div
            className={`faq-item ${activeIndex === 4 ? "active" : ""}`}
            onClick={() => handleAccordionClick(4)}
          >
            <div
              className={`faq-question_wrappr ${
                activeIndex === 4 ? "faq-question_wrappr1" : ""
              }`}
            >
              <h3>What factors go into my Retirement goal?</h3>
              <span
                className={`faq-icon ${activeIndex === 4 ? "rotate-icon" : ""}`}
              >
                <AiOutlineDoubleRight />
              </span>
            </div>

            {activeIndex === 4 && (
              <div className="faq-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                aliquam molestiae laborum rem nulla? Quaerat eaque unde tempore,
                minima accusamus sapiente excepturi, quos rerum exercitationem
                eum alias atque dolorum sed!
              </div>
            )}
          </div>
        </section>
      </article>
      <article>
        <Testimonial />
      </article>
    </section>
  );
};

export default Home;
