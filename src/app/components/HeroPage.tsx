import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <div className="bg-[url('/images/hero.svg')] bg-center bg-cover relative flex justify-center z-10 items-center">
      <div className="w-[160px] 2xl:w-[220px] 16603xl:w-[220px] h-[160px] 2xl:h-[220px] 16603xl:h-[266px] rounded-full blur-[70px] 2xl:blur-[80px] 16603xl:blur-[100px] border bg-[#29ABE2]  z-0 absolute top-[-90px] 2xl:top-[-120px] 16603xl:top-[-103px] border-white"></div>
      <div className="font-nexa-bold font-bold text-white text-[24px] 481sm:text-[35px] sm:text-[45px] lg:text-[60px] 2xl:text-[80px] max-481sm:mx-5 16603xl:text-[100px] w-full 481sm:max-w-[405px] sm:max-w-[542px] lg:max-w-[700px]  2xl:max-w-[888px] 16603xl:max-w-[1082px] my-[140px] md:my-[160px] 2xl:my-[200px] 16603xl:my-[311px]">
        <p className="uppercase leading-[100%]">We Build Beyond</p>
        <div className="flex justify-end uppercase leading-[100%] mt-[15px] lg:mt-[30px] items-center">
          <p className="mr-5 sm:mr-10">Your</p>
          <Image
            src="/images/heroTextImage.svg"
            alt="text-image"
            width={57}
            className=" max-sm:w-5 max-2xl:w-[35px] max-16603xl:w-[48px]"
            height={75}
          />
          <p className="ml-[10px]">ision</p>
        </div>
        <div className="w-full flex flex-col items-center mt-7 sm:mt-5 gap-5 2xl:gap-10 font-medium text-xs sm:text-sm md:text-base 2xl:text-lg">
          {" "}
          <p className="font-nexa-bold line-[100%] text-center">
            Customized tech solutions, made to move your business forward.
          </p>
          <button className="bg-[#0071BC] text-white px-[19px] 481sm:px-9 py-3 2xl:py-[14px] rounded-[4px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
