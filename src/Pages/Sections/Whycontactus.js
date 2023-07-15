import React from "react";
import {
  FaUserMd,
  FaTools,
  FaStopwatch,
  FaMoneyBillWave,
  FaHandsHelping,
  FaWpbeginner,
} from "react-icons/fa";
function Whycontactus() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-white text-white p-2">
      <section className="context flex items-center flex-col gap-[3rem] bg-milk-white rounded-xl py-[4rem]">
        <div className="flex flex-col items-center text-center">
          <h1 className="h1 text-bg-dark">Why Choose us?</h1>
        </div>

        <div className="w-full flex flex-wrap gap-3 justify-center">
          {/* 1 */}

          <div className="w-[20rem] h-[18rem] bg-white text-bg-dark p-3 overflow-hidden rounded-xl flex flex-col gap-3">
            <div className="w-[3rem] h-[3rem] p-1 bg-orange rounded-full flex items-center justify-center">
              <FaUserMd className="icon3 text-white" />
            </div>
            <div className="p-0">
              <h3 className="h3">Expert Technicians</h3>
              <p className="p2">
                Our team of expert technicians has extensive experience and
                knowledge in mobile repairs. They stay up-to-date with the
                latest industry trends and technologies, ensuring accurate
                diagnoses and effective solutions for all your mobile repair
                needs.
              </p>
            </div>
          </div>

          {/* 2 */}

          <div className="w-[20rem] h-[18rem] bg-white text-bg-dark p-3 overflow-hidden rounded-xl flex flex-col gap-3">
            <div className="w-[3rem] h-[3rem] p-1 bg-orange rounded-full flex items-center justify-center">
              <FaTools className="icon3 text-white" />
            </div>
            <div className="p-0">
              <h3 className="h3">Quality Repairs</h3>
              <p className="p2">
                We take pride in providing high-quality repairs for every device
                that comes through our doors. We use top-grade replacement parts
                to ensure optimal performance and longevity of your mobile
                device.
              </p>
            </div>
          </div>

          {/* 3 */}

          <div className="w-[20rem] h-[18rem] bg-white text-bg-dark p-3 overflow-hidden rounded-xl flex flex-col gap-3">
            <div className="w-[3rem] h-[3rem] p-1 bg-orange rounded-full flex items-center justify-center">
              <FaStopwatch className="icon3 text-white" />
            </div>
            <div className="p-0">
              <h3 className="h3">Fast Turnaround Time</h3>
              <p className="p2">
                We understand the importance of your mobile phone in your daily
                life, which is why we strive for a fast turnaround time. Our
                efficient repair processes and dedicated technicians aim to get
                your device back to you as quickly as possible.
              </p>
            </div>
          </div>

          {/* 4 */}

          <div className="w-[20rem] h-[18rem] bg-white text-bg-dark p-3 overflow-hidden rounded-xl flex flex-col gap-3">
            <div className="w-[3rem] h-[3rem] p-1 bg-orange rounded-full flex items-center justify-center">
              <FaMoneyBillWave className="icon3 text-white" />
            </div>
            <div className="p-0">
              <h3 className="h3">Transparent Pricing</h3>
              <p className="p2">
                We believe in transparency when it comes to pricing. Our
                services are competitively priced, and we provide detailed
                quotes upfront. You can trust that there are no hidden costs or
                surprises along the way.
              </p>
            </div>
          </div>

          {/* 5 */}

          <div className="w-[20rem] h-[18rem] bg-white text-bg-dark p-3 overflow-hidden rounded-xl flex flex-col gap-3">
            <div className="w-[3rem] h-[3rem] p-1 bg-orange rounded-full flex items-center justify-center">
              <FaHandsHelping className="icon3 text-white" />
            </div>
            <div className="p-0">
              <h3 className="h3">Excellent Customer Service</h3>
              <p className="p2">
                We prioritize customer satisfaction and strive to deliver an
                exceptional experience. Our friendly and knowledgeable customer
                service team is always ready to assist you with any inquiries or
                concerns you may have during the repair process.
              </p>
            </div>
          </div>

          {/* 6 */}

          <div className="w-[20rem] h-[18rem] bg-white text-bg-dark p-3 overflow-hidden rounded-xl flex flex-col gap-3">
            <div className="w-[3rem] h-[3rem] p-1 bg-orange rounded-full flex items-center justify-center">
              <FaWpbeginner className="icon3 text-white" />
            </div>
            <div className="p-0">
              <h3 className="h3">Wide Range of Services</h3>
              <p className="p2">
                We offer a comprehensive range of services to address various
                mobile repair needs. From screen replacements and battery
                repairs to software troubleshooting and water damage recovery,
                our skilled technicians can handle it all
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whycontactus;
