import React from "react";
import hero from "../../Img/hero-img.jpeg";
import hero_2 from "../../Img/hero-img-1.jpeg";
import hero_3 from "../../Img/hero-img-2.jpeg";
function HeroSection() {
  return (
    <div className="section font-Lato  bg-bg-dark text-white">
      <section className="context gap-[2rem] flex items-center justify-center ">
        <div className="left flex w-3/5 flex-col gap-[1rem]   h-full justify-center">
          <h3 className="flex items-center gap-2 font-mt">
            <div className="w-[0.3rem] h-[1rem] bg-orange font-md"></div>Fast
            Repairs to Get You Back in Action
          </h3>
          <h1 className="text-[2.3rem] font-Roboto font-md ">
            When it comes to fast and reliable repairs for your mobile phones,
            laptops, and computers, you've come to the right place.
          </h1>
          <p className="text-gray">
            Experiencing issues with your mobile phone, laptop, or computer?
            Don't hesitate to get in touch with us. Our team is ready to assist
            you and find a solution. Take the first step towards repairing your
            technology and contact us today!
          </p>
          <button className="btn">get free quote</button>
        </div>

        <div className="right w-2/5 h-[80%] overflow-hidden rounded flex relative">
          <img
            src={hero}
            alt="hero img"
            className="w-1/3 h-full object-cover absolute top-0 bottom-0 left-0 z-[15] hover:w-full transition-all cursor-pointer border-spacing-6 border-[3px] rounded-md ease-out duration-300"
          />

          <img
            src={hero_2}
            alt="hero img"
            className="w-1/3 h-full object-cover absolute top-0 bottom-0 left-1/3 z-[10] 
hover:w-full transition-all cursor-pointer border-spacing-6 border-[3px] rounded-md hover:z-[20] hover:left-0 ease-out duration-300"
          />

          <img
            src={hero_3}
            alt="hero img"
            className="w-1/3 h-full object-cover absolute top-0 bottom-0 right-0 z-[5] 
hover:w-full transition-all cursor-pointer border-spacing-6 border-[3px] rounded-md hover:z-[25] ease-out duration-300"
          />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
