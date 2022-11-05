import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 pt-16 left-0 pb-24">
      <div className="px-5 w-screen">
        <form className="max-w-[840px] m-auto">
          <p className="font-inter w-[448px] h-[44px] not-italic font-semibold text-3xl tracking-[-0.02rem]">Contact Me</p>
          <p className="font-inter not-italic font-normal text-sm leading-[30px]">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <section className="flex flex-col my-4">
              <label htmlFor="first_name" className="font-inter not-italic font-medium text-sm leading-5 text-[#344054]" >First name</label>
              <input
                className="border py-3 px-4 gap-2  rounded-[8px] shadow-sm placeholder:font-inter placeholder:font-normal placeholder:text-base placeholder-[#667085]"
                type="text"
                placeholder="Enter your first name"
              />
            </section>
            <section className="flex flex-col md:my-4">
              <label htmlFor="first_name" className="font-inter not-italic font-medium text-sm leading-5 text-[#344054]">Last name</label>
              <input
                className="border py-3 px-4 gap-2  rounded-[8px] shadow-sm placeholder:font-inter placeholder:font-normal placeholder:text-base placeholder-[#667085]"
                type="text"
                placeholder="Enter your last name"
              />
            </section>
          </div>
          <label htmlFor="first_name" className="my-4 font-inter not-italic font-medium text-sm leading-5 text-[#344054]">Email</label>
          <input
            className="border p-3 w-full mb-3 rounded-[8px] shadow-sm placeholder:w-[320px] placeholder:h-[24px] placeholder:font-inter placeholder:font-normal placeholder:text-base placeholder-[#667085]"
            type="email"
            placeholder="yourname@email.com"
          />
          <label htmlFor="message" className="font-inter not-italic font-medium text-sm leading-5 text-[#344054]">Message</label>
          <textarea
            className="border p-3 w-full  rounded-[8px] shadow-sm placeholder:font-inter placeholder:font-normal placeholder:text-base placeholder-[#667085]"
            cols="30"
            rows="5"
            placeholder="Send a message and i'll reply you as soon as possible"
          ></textarea>
          <section className="flex gap-2 my-4">
            <input type="checkbox" name="" id="" className="rounded-full w-[20px] h-[20px]" />
            <p className="font-inter">
              You agree to providing your data to Brian Njoroge who may contact
              you.
            </p>
          </section>
          <button className="border p-3 w-full mt-2 font-inter rounded-[8px] shadow-sm bg-[#1570EF] text-white">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
