import React from "react";
import { Link } from "react-router-dom";
import logo from "../Img/logo.png";
function Navbar() {
  return (
    <div>
      <nav className="w-full h-[4rem]  bg-bg-dark flex  justify-between items-center fixed drop-shadow-md top-0 left-0 right-0 z-[9999] text-white  font-Roboto">
        <div className="w-1/2">
          <Link
            to="/"
            className="flex  items-center capitalize font-Roboto font-md"
          >
            <img src={logo} alt="logo" className="w-[4rem] h-full" />
            <span>Gilbertvincent shop</span>
          </Link>
        </div>
        <ul className="w-1/2 h-full flex justify-evenly items-center">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="link">
              About us
            </Link>
          </li>

          <span className="group relative">
            <span className="link">
              <Link to="/Services" className="link">
                Services
              </Link>
            </span>
            <span className=" invisible absolute left-0 top-6 flex-col gap-2 bg-gray p-2 shadow-md w-max  h-max group-hover:visible flex">
              <li>
                <Link to="/MobileServices" className="link">
                  Mobile Services
                </Link>
              </li>
              <li>
                <Link to="/TabletServices" className="link">
                  Tablet Services
                </Link>
              </li>
              <li>
                <Link to="/IpadServices" className="link">
                  Ipad Services
                </Link>
              </li>
              <li>
                <Link to="/LaptopServices" className="link">
                  Laptop Services
                </Link>
              </li>
              <li>
                <Link to="/ComputerServices" className="link">
                  Computer Services
                </Link>
              </li>
            </span>
          </span>

          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>

          <button className="btn">Get free Quote</button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
