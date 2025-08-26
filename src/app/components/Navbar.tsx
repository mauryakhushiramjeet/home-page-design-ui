"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuList: string[] = [
    "Home",
    "Services",
    "Industries",
    "Industries",
    "About Us",
    "Contact Us",
  ];
  return (
    <div className="px-5 481sm:px-10 xl:px-20 2xl:px-[150px] 16603xl:px-[200px] py-3 xl:py-[17px] flex items-center w-full justify-between z-999 relative bg-[#FFFFFF]">
      <div className="flex gap-[30px] 16603xl:gap-[50px]">
        <div>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={180}
            height={45}
            className="max-992md:h-[40px]"
          />
        </div>
        <div className="992md:flex items-center gap-5 xl:gap-[35px] 16603xl:gap-[52px] hidden">
          <p className=" w-[1px] bg-[#666666]"></p>
          <div className="flex gap-3 xl:gap-6 2xl:gap-8 16603xl:gap-[44px] items-center">
            {menuList.map((menu, index) => (
              <div className="flex item-center gap-1 xl:gap-[6px]" key={index}>
                <p className="text-sm xl:text-base 2xl:text-lg  text-[#666666]">
                  {menu}
                </p>
                <Image
                  src="/images/arrow.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button className="bg-[#0071BC] rounded-[4px] hidden 992md:block text-white font-medium text-sm 2xl:text-lg px-3 xl:px-4 2xl:px-[24px] py-[10px] 2xl:py-[14px]">
          Contact Sales
        </button>
      </div>
      <div
        className="992md:hidden block text-3xl"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <RiCloseFill /> : <MdOutlineMenu />}
      </div>{" "}
      <div
        className={`${
          isMenuOpen
            ? "opacity-100  translate-y-6"
            : "opacity-0 -translate-y-6 pointer-events-none "
        } flex flex-col transition-all ease-in-out duration-700 992md:hidden items-center gap-5 w-full 481sm:max-w-[300px] right-0 absolute py-5 top-[40px] bg-[#F8F8FF]`}
      >
        <div className="flex gap-5 flex-col items-center w-full">
          {menuList.map((menu, index) => (
            <div key={index}>
              <p className="text-base  text-[#666666] py-[5px]  rounded-[4px] 481sm:py-2 hover:bg-blue-400  px-7 hover:text-white cursor-pointer transition-all duration-500 w-full">
                {menu}
              </p>
            </div>
          ))}
        </div>
        <button className="bg-[#0071BC] rounded-[4px] text-white font-medium text-base px-5 py-2">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default Navbar;
