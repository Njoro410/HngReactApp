import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 pt-16    max-w-[1440px] h-screen left-0 top-0">
      <div className="">
        <p className="font-inter">contact me</p>
        <p className="text-[20px]">
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <form className="max-w-[600px] m-auto">
          <div className="grid grid-cols-2 gap-2">
            <section className="flex flex-col">
              <label for="first_name">First name</label>
              <input
                className="border  p-3"
                type="text"
                placeholder="Enter your first name"
              />
            </section>
            <section className="flex flex-col">
              <label for="first_name">Last name</label>
              <input
                className="border  p-3"
                type="text"
                placeholder="Enter your last name"
              />
            </section>
          </div>
          <label for="first_name">Email</label>
          <input
            className="border  p-3 w-full "
            type="email"
            placeholder="yourname@email.com"
          />
          <label for="message">Message</label>
          <textarea
            className="border p-3 w-full "
            cols="30"
            rows="10"
            placeholder="Send a message and i'll reply you as soon as possible"
          ></textarea>
          <button className="border  p-3 w-full mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
