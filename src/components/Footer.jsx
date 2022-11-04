import React from "react";
import zuri from "../image/zurilogo.svg";
import good from "../image/I4G.png";

const Footer = () => {
  return (
    <div className="container m-auto mt-9 flex justify-between py-[48px] border-t-2 flex-col md:flex-row">
      <section className="p-2">
        <img src={zuri} alt="Zuri Internship" />
        {/* <p className="text-2xl font-normal font-inter">Zuri.Internship</p> */}
      </section>
      <section className="p-2">
        <p className="font-inter font-normal text-[16px] leading-[24px] text-gray-500 ">
          HNG Internship 9 Frontend Task
        </p>
      </section>
      <section className="p-2">
        <img src={good} alt="impressive for good" />
      </section>
    </div>
  );
};

export default Footer;
