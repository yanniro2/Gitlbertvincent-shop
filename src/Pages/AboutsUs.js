import React from "react";

import img_1 from "../Img/mission.jpeg";
import img_2 from "../Img/expert.jpeg";
import img_3 from "../Img/Quality.jpeg";
import img_4 from "../Img/customer.jpg";
import img_5 from "../Img/time.jpeg";
import img_6 from "../Img/contact.jpeg";
const AboutUs = () => {
  return (
    <div className=" section2">
      <div className="context flex-col">
        <div className="">
          <h1 className="h1">About Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            At Expert Repair, we are passionate about providing top-notch repair
            services for mobile phones, laptops, and computers. With years of
            experience in the industry, we have built a reputation for our
            expertise, quality repairs, and exceptional customer service.
          </p>
        </div>

        <div className="flex flex-wrap gap-[2rem]">
          {/* 1 */}
          <div className="w-full h-[50vh] flex gap-5 ">
            <div className="w-1/2 ">
              <img
                src={img_1}
                alt="mission img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-1/2 p-5">
              <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
              <p className="text-base text-gray-600 mb-6">
                Our mission is to restore the functionality and performance of
                your devices, ensuring that you can stay connected and
                productive in today's digital world. We strive to exceed
                customer expectations by delivering fast and reliable repair
                services while maintaining the highest standards of quality.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="w-full h-[50vh] flex gap-5 reverse">
            <div className="w-1/2 ">
              <img
                src={img_2}
                alt="mission img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-1/2 p-5">
              <h2 className="text-xl font-semibold mb-4">
                Skilled Technicians
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Our team of skilled technicians is the backbone of our company.
                They are highly trained and knowledgeable, equipped with the
                latest tools and techniques to diagnose and repair a wide range
                of technical issues. From cracked screens and hardware failures
                to software glitches, our technicians have the expertise to
                handle it all.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full h-[50vh] flex gap-5 ">
            <div className="w-1/2 ">
              <img
                src={img_3}
                alt="mission img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-1/2 p-5">
              <h2 className="text-xl font-semibold mb-4">Quality Repairs</h2>
              <p className="text-base text-gray-600 mb-6">
                We understand the importance of your mobile phones, laptops, and
                computers, which is why we use only top-quality replacement
                parts for all our repairs. Our commitment to quality ensures
                that your devices are restored to optimal functionality,
                providing you with a seamless user experience.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="w-full h-[50vh] flex gap-5 reverse">
            <div className="w-1/2 ">
              <img
                src={img_4}
                alt="mission img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-1/2 p-5">
              <h2 className="text-xl font-semibold mb-4">
                Customer Satisfaction
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Customer satisfaction is our utmost priority. We believe in
                building long-lasting relationships with our customers by
                providing personalized attention, transparent communication, and
                excellent customer service. We listen to your concerns, answer
                your questions, and work diligently to address all your repair
                needs.
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="w-full h-[50vh] flex gap-5 ">
            <div className="w-1/2 ">
              <img
                src={img_5}
                alt="mission img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-1/2 p-5">
              <h2 className="text-xl font-semibold mb-4">
                Convenient Services
              </h2>
              <p className="text-base text-gray-600 mb-6">
                We know that your time is valuable, so we strive to make the
                repair process as convenient as possible. You can visit our
                repair center, or if preferred, take advantage of our pickup and
                delivery services. We aim to minimize disruptions to your daily
                routine while ensuring efficient and reliable repairs.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="w-full h-[50vh] flex gap-5 reverse">
            <div className="w-1/2 ">
              <img
                src={img_6}
                alt="mission img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-1/2 p-5">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-base text-gray-600 mb-6">
                We are here to assist you with all your repair needs. Whether
                you have a cracked screen, a malfunctioning keyboard, or a
                virus-infected computer, our team is ready to help. Get in touch
                with us today and let our experts take care of your technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
