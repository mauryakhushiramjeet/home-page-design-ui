"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThinkingPage = () => {
  const [forward, setForward] = useState<boolean>(true);
  const [deg, setDeg] = useState(45);
  // useEffect(() => {
  //   if (forward) {
  //     if (deg < 360) {
  //       setInterval(() => {
  //         setDeg((prev) => prev + 2);
  //       }, 2000);
  //     } else {
  //       setForward(false);
  //     }
  //   } else {
  //     if (deg > 45) {
  //       setDeg((prev) => prev - 1);
  //     } else {
  //       setForward(true);
  //     }
  //   }
  // }, [deg, forward]);
  useEffect(() => {
    let animationFrameId: number;

    const rotate = () => {
      setDeg((prev) => (prev + 0.9) % 360); // smooth rotation
      animationFrameId = requestAnimationFrame(rotate);
    };

    animationFrameId = requestAnimationFrame(rotate);

    return () => cancelAnimationFrame(animationFrameId); // cleanup
  }, []);
  const cardDetailes = [
    {
      image: "/images/think1.svg",
      title: "Communicating Change: Three Tools You’re Probably Not Using",
      description:
        "Visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals quality intellectual...",
      date: "23 January, 2021",
    },
    {
      image: "/images/think2.svg",
      title: "Have to control increasing costs in management",
      description:
        "Engage high-payoff infomediaries rather than client-centric imperatives. Efficiently initiate world-class applications after client-centric quality intellectual...",
      date: "11 March, 2021",
    },
    {
      image: "/images/think3.svg",
      title: "Communicating Change: Three Tools You’re Probably Not Using",
      description:
        "Visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals quality intellectual...",
      date: "23 January, 2021",
    },
  ];
  return (
    <div className="px-5 481sm:px-[45px] md:px-[70px] xl:px-[120px] 16603xl:px-[200px] py-9 2xl:py-20 16603xl:py-[130px] bg-black">
      <div className="flex flex-col sm:flex-row justify-between w-full items-center sm:items-end max-992md:gap-[25px]">
        <div className="w-full 992md:max-w-[640px] 2xl:max-w-[817px] max-sm:text-center">
          <p className="font-nexa-bold font-bold text-[25px] 481sm:text-[28px] 992md:text-[36px] 2xl:text-[54px] leading-[39px] sm:leading-[60px] 2xl:leading-[70px] text-[#FFFFFF]">
            The Thinking Behind the Builds
          </p>
          <p className="text-[14px] 2xl:text-[18px] leading-[24px] text-[#CCCCCC] 992md:pr-[72px] pt-[5px] sm:pt-[1px] 2xl:pt-[10px]">
            Explore blogs, whitepapers, and case studies drawn from the systems
            we’ve built, the challenges we’ve solved, and the decisions that
            shaped them.
          </p>
        </div>
        <div className="flex gap-[30px] items-center">
          <Image
            src="/images/thinkBtn1.svg"
            height={50}
            width={66}
            alt="btn"
            className="w-[48px] 2xl:w-[50]"
          />
          <Image
            src="/images/thinkBtn2.svg"
            height={50}
            width={66}
            alt="btn"
            className="w-[48px] 2xl:w-[50]"
          />
        </div>
      </div>
      <div className="mt-[50px] 992md:mt-20 grid-cols-1 grid sm:grid-cols-2 992md:grid-cols-3  gap-5 lg:gap-[31px]">
        {cardDetailes.map((details, index) => (
          <div
            key={index}
            style={{
              background: `linear-gradient(${deg}deg, #29ABE233, #000000)`,
              borderRadius: "14px",
            }}
            className=" transition-all duration-700 overflow-hidden p-[2px]  2xl:p-[3px]"
          >
            <div className="w-full flex flex-col flex-1 ">
              <div>
                <Image
                  src={details.image}
                  alt="image"
                  width={486}
                  height={350}
                />
              </div>
              <div className=" flex flex-col py-[25px] xl:py-[30px] px-[15px] 481sm:px-[25px] xl:px-[30px] bg-[#000000] rounded-lg bg-gradient-to-tr from-[#29ABE233] to-[#000000] flex-1">
                {/* Right border gradient */}
                {/* <div className="absolute right-0 top-0 w-[2px] h-full bg-gradient-to-b  to-[#29ABE233]"></div> */}

                {/* Bottom border gradient */}
                {/* <div className="absolute left-0 bottom-0 w-full h-[2px] "></div> */}

                {/* Content */}
                <p className="font-bold font-Arial text-[17px] 2xl:text-[20px] leading-[28px] text-[#FFFFFF]">
                  {details.title}
                </p>
                <p className="pt-[10px] text-[#CCCCCC] text-[14px] 2xl:text-[16px] leading-[24px]">
                  {details.description}
                </p>

                <div className="pt-5 flex w-full justify-between items-center mt-auto">
                  <div className="flex gap-3 items-center">
                    <Image
                      src="/images/calender.svg"
                      alt="calender-image"
                      width={24}
                      height={24}
                    />
                    <p className="text-[#FFFFFF] text-[14px] 2xl:text-[16px] leading-[24px]">
                      {details.date}
                    </p>
                  </div>
                  <div className="w-fit border rounded-[14px]">
                    <Image
                      src="/images/thinkPageArrow.svg"
                      alt="arrow"
                      width={30}
                      height={30}
                      className="w-[25px] 2xl:w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThinkingPage;
