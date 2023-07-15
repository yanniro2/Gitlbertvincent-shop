import React from "react";
import logo from "../../Img/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-full h-[50vh] bg-bg-dark flex items-center justify-center flex-col">
      <div className="context">
        <div className="top flex w-full justify-between items-start">
          <div className="logo flex flex-col gap-[1rem] items-center">
            <div className="flex items-center">
              <img src={logo} alt="logo img" className="w-[3rem]" />
              <span className="text-white font-Roboto capitalize font-b">
                Gilbertvincent shop
              </span>
            </div>

            <div className="flex items-center gap-3 text-[18px] text-orange">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <div className="text-gray flex flex-col gap-3">
            <span className="text-white font-Lato">Company</span>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              About us
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>
          <div className="text-gray flex flex-col gap-3">
            <span className="text-white font-Lato">Services</span>
            <Link to="/MobileServices" className="link">
              Mobile
            </Link>
            <Link to="/TabletServices" className="link">
              Tablet
            </Link>
            <Link to="/IpadServices" className="link">
              Ipad
            </Link>
            <Link to="/LaptopServices" className="link">
              Laptop
            </Link>
            <Link to="/ComputerServices" className="link">
              Computer
            </Link>
          </div>
          <div className="subcribe text-white flex flex-col gap-[1rem] w-1/3">
            <h3 className=" capitalize font-Lato">
              Subscribe to our newsletter
            </h3>
            <div className=" min-w-max relative">
              <input
                type="mail"
                placeholder="email address"
                className="w-full rounded-full px-3 py-4 placeholder:capitalize outline-none"
              />
              <btn className="btn absolute right-1 top-1 bottom-1 cursor-pointer">
                Subscribe
              </btn>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[3rem] relative">
        <div className="w-full h-[2px] bg-gray absolute z-[100] left-0 right-0 top-0"></div>

        <div className="context w-full h-full ">
          <div className="context flex items-center justify-between">
            <div>
              <span className="text-white font-Lato">@2023 </span>-{" "}
              <span className=" font-Roboto text-orange">
                info@gilbertvincent.ch
              </span>
            </div>

            <div className="flex gap-[2rem] text-gray font-Lato">
              <a href="#">Terms and conditions</a>|
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
