import Image from "next/image";
import React from "react";

const TechnologyPartner = () => {
  
  return (
    <div className=" px-5 481sm:px-[45px] md:px-[70px] xl:px-[120px] 16603xl:px-[200px] flex flex-col 992md:flex-row justify-between py-[40px] 481sm:py-[55px] xl:py-20 2xl:py-[100px] 16603xl:py-[130px] items-center gap-[50px] sm:gap-[89px] xl:gap-[126px] bg-[#000000]">
      <div className="w-full 992md:max-w-[382px] xl:max-w-[456px] 2xl:max-w-[600px] 16603xl:max-w-[688px]  max-992md:text-center">
        <p className="text-[22px] 481sm:text-[27px] xl:text-[38px] 2xl:text-[45px] 16603xl:text-[54px] leading-[37px] xl:leading-[45px] 2xl:leading-[55px] 16603xl:leading-[70px] font-bold font-nexa-bold  text-[#FFFFFF]">
          Your <span className="text-[#29ABE2]">Technology Partner</span> That
          Understands Your Business Layer
        </p>
        <p className="text-[14px] xl:text-[18px] text-[#CCCCCC] leading-[24px] mt-[10px]">
          At Convertec, we bring business goals and technical solutions
          together—clearly and effectively. As a global IT consultancy and
          software development company, we work side by side with clients to
          design scalable systems, custom applications, and digital strategies
          that deliver real impact. Our consultative model means you stay close
          to the process from start to finish. With faster delivery, clear
          thinking, and proven technical depth, we help businesses modernize
          their tech stacks and grow smarter.
        </p>

        <button className="px-6 py-3 flex-1 rounded-[4px] text-white bg-[#0071BC] font-bold mt-[15px] xl:mt-10">
          Learn More
        </button>
      </div>
      <div className="flex-1 w-[280px] 481sm:w-[400px] md:w-[500px] lg:w-[900px] 16603xl:w-[704px]">
        <Image
          src="/images/scientist.png"
          alt="scintist-image"
          width={704}
          height={546}
          className=" w-full object-cover"
        />
      </div>
    </div>
  );
};

export default TechnologyPartner;
