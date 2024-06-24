import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/logo.webp";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="contactDiv">
        <h3>Tell Us About You!</h3>
        <div className="mainBox">
          <div className="left">
            <div className="box">
              <h4>Give Us A Call</h4>
              <p>
                <FaPhoneAlt /> <a href="tel:999999999">99999 99999</a>
              </p>
              <p>
                <FaPhoneAlt /> <a href="tel:999999999">99999 99999</a>
              </p>
            </div>
            <div className="box">
              <h4>Write To Us</h4>
              <p>
                <FaEnvelope />{" "}
                <a href="mailto:test@gmail.com">test@gmail.com</a>
              </p>
              <p>
                <FaEnvelope />{" "}
                <a href="mailto:test@gmail.com">test@gmail.com</a>
              </p>
            </div>
            <div className="box">
              <h4>Our Location</h4>
              <p>
                <FaMapMarkerAlt /> NYC
              </p>
              <p>
                <FaMapMarkerAlt /> NYC
              </p>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
      <footer>
        <div className="logo">
          <Link href="/">
            <img src={Logo} alt="logo" loading="lazy" />
          </Link>
        </div>
        <div className="fsocial">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </footer>
    </>
  );
};

export default Footer;
