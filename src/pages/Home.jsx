import React from "react";
import profile from "../image/1662971155353.jpeg";
import slack from "../image/slack.png";
import github from "../image/Icon.png";
import share from "../image/share.png";
import more from "../image/more.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white h-full w-full ">
      <div className="flex items-center justify-center flex-col mt-12">
        <img
          id="profile__img"
          src={profile}
          alt="my_pic"
          className="w-[88px] h-[88px] rounded-[275px]"
        />
        <img
          src={share}
          alt="share"
          className="absolute w-[40px] h-[40px] right-[208px] top-[50px] bg-white hidden md:flex"
        />
        <img
          src={more}
          alt="menu button"
          className="absolute w-[40px] h-[40px] right-8 top-[20px] bg-white md:hidden sm:block"
        />
        <p
          id="twitter"
          className="font-bold text-[20px] leading-[30px] text-center text-[#101828] font-inter p-5"
        >
          _Njoroge_Brian
        </p>
        <p id="slack" className="hidden">
          Brian Njoroge
        </p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-2 py-[24px] px-[32px]">
        <a
          href="https://twitter.com/_Njoroge_Brian"
          className="w-[90%] h-[68px]  md:h-[76px] bg-gray-300  border border-[#EAECF0] border-solid rounded-[8px] font-inter font-medium flex items-center text-center justify-center leading-[28px] text-[18px]"
        >
          Twitter Link
        </a>
        <a
          id="btn__zuri"
          href="https://training.zuri.team/"
          className="w-[90%] h-[68px]  md:h-[76px] bg-gray-300 border border-[#EAECF0] border-solid rounded-[8px] font-inter font-medium flex items-center text-center justify-center leading-[28px] text-[18px]"
        >
          Zuri Team
        </a>
        <a
          id="books"
          title="this is where you find books about design and coding"
          href="http://books.zuri.team/"
          className="w-[90%] h-[68px]  md:h-[76px] bg-gray-300 border border-[#EAECF0] border-solid rounded-[8px] font-inter font-medium flex items-center text-center justify-center leading-[28px] text-[18px]"
        >
          Zuri Books
        </a>
        <a
          id="book__python"
          title="Wanna master python? from novice to pro in no time, get this python book and start learning"
          href="https://books.zuri.team/python-for-beginners?ref_id=brian_njoroge"
          className="w-[90%] h-[68px]  md:h-[76px] bg-gray-300 border border-[#EAECF0] border-solid rounded-[8px] font-inter font-medium flex items-center text-center justify-center leading-[28px] text-[18px]"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team"
          id="pitch"
          title="Are you looking at hiring coders, use our free background checker service to know anything"
          className="w-[90%] h-[68px]  md:h-[76px] bg-gray-300 border border-[#EAECF0] border-solid rounded-[8px] font-inter font-medium flex items-center text-center justify-center leading-[28px] text-[18px]"
        >
          Background Check for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          id="book__design"
          className="w-[90%] h-[68px]  md:h-[76px] bg-gray-300 border border-[#EAECF0] border-solid rounded-[8px] font-inter font-medium flex items-center text-center justify-center leading-[28px] text-[18px]"
          title="Get the free Zuri design book today ans start your design experience today"
        >
          Design Books
        </a>
        <a
          id="contact"
          className="w-[90%] h-[68px]  md:h-[76px] bg-gray-300 border border-[#EAECF0] border-solid rounded-[8px] font-inter font-medium flex items-center text-center justify-center leading-[28px] text-[18px]"
        >
          <Link to="/contact" className="h-full w-full flex items-center justify-center">Contact Me</Link>
        </a>
      </div>
      <div className="flex justify-center items-center px-[24px] py-0 gap-16 h-[72px] w-full">
        <img src={slack} alt="slack" />

        <a href="https://github.com/Njoro410">
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Home;
