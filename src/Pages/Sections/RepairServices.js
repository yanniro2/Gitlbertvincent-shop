import React from "react";
import {
  FaMobileAlt,
  FaTabletAlt,
  FaTablet,
  FaLaptop,
  FaDesktop,
} from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
function RepairServices() {
  return (
    <div className="w-full h-full flex flex-col items-center py-[3rem]">
      <section className="context flex items-center flex-col gap-[3rem]">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="h1">Our Repair services</h1>
          <p className="p1">
            At Expert Repair, we offer a comprehensive range of repair services
            to address all your technology needs. Our skilled technicians are
            dedicated to providing high-quality repairs using top-notch
            components. Below are the specific services we offer:
          </p>
        </div>

        <div className="w-full flex  gap-3 flex-wrap items-center justify-center">
          {/* 1 */}
          <div className="sub flex flex-col  items-start group">
            <div className="flex w-full flex-col h-1/5 justify-center">
              <FaMobileAlt className="icon " />
            </div>

            <div className="h-3/5 flex flex-col gap-2">
              <h3 className="h3">Mobile Services</h3>
              <p className="p2  overflow-hidden">
                Whether your mobile phone has a cracked screen, a faulty
                charging port, or software issues, our team is here to help. We
                specialize in repairing various brands and models, ensuring that
                your device is up and running smoothly again.
              </p>
            </div>

            <button className="w-full flex items-end justify-end h-[2rem]">
              <BsArrowRightCircleFill className="icon2" />
            </button>
          </div>

          {/* 2 */}
          <div className="sub flex flex-col  items-start">
            <div className="flex w-full flex-col h-1/5 justify-center">
              <FaTabletAlt className="icon " />
            </div>

            <div className="h-3/5 flex flex-col gap-2">
              <h3 className="h3">Tablet Services</h3>
              <p className="p2  overflow-hidden">
                Is your tablet experiencing performance issues, a broken
                display, or battery problems? Our tablet repair services cover a
                wide range of issues for different tablet brands. We'll have
                your tablet functioning like new in no time.
              </p>
            </div>

            <button className="w-full flex items-end justify-end h-[2rem]">
              <BsArrowRightCircleFill className="icon2" />
            </button>
          </div>

          {/* 3 */}
          <div className="sub flex flex-col  items-start">
            <div className="flex w-full flex-col h-1/5 justify-center">
              <FaTablet className="icon " />
            </div>

            <div className="h-3/5 flex flex-col gap-2">
              <h3 className="h3"> iPad Services</h3>
              <p className="p2  overflow-hidden">
                If your iPad is facing issues such as unresponsive touchscreens,
                battery draining quickly, or software glitches, our iPad repair
                services are just what you need. Our technicians are skilled in
                handling iPad repairs and will restore your device's
                functionality.
              </p>
            </div>

            <button className="w-full flex items-end justify-end h-[2rem]">
              <BsArrowRightCircleFill className="icon2" />
            </button>
          </div>

          {/* 4 */}
          <div className="sub flex flex-col  items-start">
            <div className="flex w-full flex-col h-1/5 justify-center">
              <FaLaptop className="icon " />
            </div>

            <div className="h-3/5 flex flex-col gap-2">
              <h3 className="h3">Laptop Services</h3>
              <p className="p2  overflow-hidden">
                From hardware repairs to software troubleshooting, we specialize
                in comprehensive laptop repairs. Whether you have a broken
                keyboard, a malfunctioning trackpad, or a slow-performing
                laptop, our experts will diagnose and fix the problem
                efficiently.
              </p>
            </div>

            <button className="w-full flex items-end justify-end h-[2rem]">
              <BsArrowRightCircleFill className="icon2" />
            </button>
          </div>

          {/* 5 */}
          <div className="sub flex flex-col  items-start">
            <div className="flex w-full flex-col h-1/5 justify-center">
              <FaDesktop className="icon " />
            </div>

            <div className="h-3/5 flex flex-col gap-2">
              <h3 className="h3">Computer Services </h3>
              <p className="p2  overflow-hidden">
                Is your computer showing signs of a virus, experiencing crashes,
                or running slow? Our computer repair services cover a wide range
                of issues, including hardware upgrades, software installations,
                and malware removal. We'll get your computer back to optimal
                performance.
              </p>
            </div>

            <button className="w-full flex items-end justify-end h-[2rem]">
              <BsArrowRightCircleFill className="icon2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RepairServices;
