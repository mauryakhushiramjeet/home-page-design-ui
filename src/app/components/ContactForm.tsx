import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#FFFFFF] gap-[30px] 481sm:gap-[45px] lg:gap-[100px] px-5 481sm:px-[45px] md:px-[70px] xl:px-[120px] 16603xl:px-[200px] py-9 2xl:py-20 16603xl:py-[130px]">
      <div>
        <div className="flex flex-col gap-[10px] pb-5 2xl:pb-10 max-sm:text-center">
          <p className="text-[21px] 481sm:text-[24px] lg:text-[29px] xl:text-[35px] 2xl:text-[44px] 16603xl:text-[53px] font-bold font-nexa-bold leading-[33px] lg:leading-[44px] xl:leading-[51px] 2xl:leading-[60px] 16603xl:leading-[70px]">
            If You’re Planning Your Next Big Project, Start Here
          </p>
          <p className="text-xs 2xl:text-[18px] text-[#666666] leading-[24px]">
            We’re here to talk through your priorities and help move things from
            intent to impact.
          </p>
        </div>
        <div className="relative w-fit">
          <div className="absolute w-10 xl:w-[50px] 2xl:w-[60px] 16603xl:w-[66px] h-10 xl:h-[50px] 2xl:h-[60px] 16603xl:h-[66px] rounded-[9px] xl:rounded-[14px] bg-[#0071BC] hidden 481sm:block left-[10%] sm:left-[8%] lg:left-[10%]">
            <div className="relative">
              {" "}
              <Image
                src="/images/call.svg"
                width={30}
                height={30}
                alt="contact imag"
                className=" w-5 2xl:w-[30px] h-5 2xl:h-[30px] absolute top-[10px] xl:top-4 left-[9px] xl:left-4"
              />
            </div>
          </div>{" "}
          <Image
            src="/images/contactArrowBottom.svg"
            width={145}
            height={145}
            alt="contact imag"
            className="hidden xl:block w-[92px] 2xl:w-[145px] h-[145px] absolute bottom-[-48px] 2xl:bottom-[-42px] right-[5px] 2xl:right-0"
          />
          <Image
            src="/images/contactImage.svg"
            width={697}
            height={628}
            alt="contact imag"
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-[15px] xl:gap-5 2xl:gap-10">
        <p className="text-[#151515] font-bold font-nexa-bold text-5 2xl:text-[30px]">
          Contact Us
        </p>
        <p className="w-20 2xl:w-[120px] h-[6px] rounded-[10px] bg-[#0071BC]"></p>
        <div className="flex flex-col gap-3 2xl:gap-5">
          <div>
            <p className="font-medium  text-xs lg:text-sm 2xl:text-base text-black ">
              Full Name<span className="text-[#FF0606]">*</span>
            </p>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-[6px] xl:mt-[10px] py-2 2xl:py-[15px] px-[10px] border  text-xs lg:text-sm 2xl:text-base text-[#666666] rounded-[6px] w-full"
            />
          </div>
          <div>
            <p className="font-medium  text-xs lg:text-sm 2xl:text-base text-black ">
              Email<span className="text-[#FF0606]">*</span>
            </p>
            <input
              type="text"
              placeholder="Enter your email address"
              className="mt-[6px]  xl:mt-[10px] py-2 2xl:py-[15px] px-[10px] border  text-xs lg:text-sm 2xl:text-base text-[#666666] rounded-[6px] w-full"
            />
          </div>
          <div>
            <p className="font-medium  text-xs lg:text-sm 2xl:text-base text-black ">
              Phone Number
            </p>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="mt-[6px]  xl:mt-[10px] py-2 2xl:py-[15px] px-[10px] border  text-xs lg:text-sm 2xl:text-base text-[#666666] rounded-[6px] w-full"
            />
          </div>
          <div>
            <p className="font-medium  text-xs lg:text-sm 2xl:text-base text-black ">
              Company Name
            </p>
            <input
              type="text"
              placeholder="Enter your company name"
              className="mt-[6px]  xl:mt-[10px] py-2 2xl:py-[15px] px-[10px] border  text-xs lg:text-sm 2xl:text-base text-[#666666] rounded-[6px] w-full"
            />
          </div>
          <div>
            <p className="font-medium  text-xs lg:text-sm 2xl:text-base text-black ">
              Service You’re Interested in
            </p>
            <input
              type="text"
              placeholder="Enter your service"
              className="mt-[6px]  xl:mt-[10px] py-2 2xl:py-[15px] px-[10px] border  text-xs lg:text-sm 2xl:text-base text-[#666666] rounded-[6px] w-full"
            />
          </div>
          <div>
            <p className="font-medium  text-xs lg:text-sm 2xl:text-base text-black ">
              Message<span className="text-[#FF0606]">*</span>
            </p>
            <textarea
              placeholder="Enter your message..."
              rows={3}
              className="mt-[6px]  xl:mt-[10px] py-2 2xl:py-[15px] px-[10px] border  text-xs lg:text-sm 2xl:text-base resize-none text-[#666666] rounded-[6px] w-full"
            />
          </div>
        </div>
        <button className="bg-[#0071BC] rounded-[4px] w-fit font-Arial text-white font-bold text-sm 2xl:text-lg py-2 2xl:py-[14px] px-6 2xl:px-8">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
