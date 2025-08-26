import Image from "next/image";
import React from "react";

const ConvertecPage = () => {
  const stepCard = [
    {
      step: "01",
      title: "Friction Audit",
      description:
        "We start by mapping where things slow down systems, teams, and decisions. This isn’t a “requirements” phase. It’s about identifying blockers that cost time, money, and trust.",
    },
    {
      step: "02",
      title: "System-Level Planning",
      description:
        "Before we touch a line of code, we define technical direction: architecture, ownership, resourcing, and tradeoffs. This phase prevents rework and scope drift later..",
    },
    {
      step: "03",
      title: "Embedded Build Cycles",
      description:
        "We don’t just QA for bugs. We stress-test workflows, integrations, and edge cases that actually show up in production before they do.",
    },
    {
      step: "04",
      title: "Operational Testing",
      description:
        "We don’t just QA for bugs. We stress-test workflows, integrations, and edge cases that actually show up in production before they do.",
    },
    {
      step: "05",
      title: "Release and Feedback Loops",
      description:
        "Launches are staged and controlled. But delivery doesn’t end there — we keep the loop open for iteration, adoption tracking, and handling the unknowns that come post-live.",
    },
    {
      step: "01",
      title: "Transition or Scale-Up",
      description:
        "We document everything, hand over what’s needed, and either close cleanly or ramp into the next build phase  depending on what you need next.",
    },
  ];

  return (
    <div className="px-5 481sm:px-[45px] md:px-[70px] xl:px-[90px] 16603xl:px-[200px] py-[40px] 481sm:py-[55px] xl:py-20 2xl:py-[100px] 16603xl:py-[130px] flex flex-col-reverse 992md:flex-row items-center gap-[25px] 481sm:gap-10 992md:gap-[30px] xl:gap-20 16603xl:gap-[118px]">
      {/* first card */}
      <div className="w-full 992md:max-w-[557px] 2xl:max-w-[619px] 16603xl:max-w-[730px]">
        <div className="pb-[15px] 2xl:pb-10">
          <p className="992md:pr-[141px] max-992md:text-center 2xl:pr-[68px] 16603xl:pr-[167px] font-nexa-bold font-bold text-[22px] 481sm:text-[27px] xl:text-[32px] 2xl:text-[48px] 16603xl:text-[54px] leading-[36px] xl:leading-[43px] 2xl:leading-[70px] capitalize">
            What It’s Like to Work With
            {/* <p> */}
            <span className="text-[#0071BC]"> Convertec</span>
            {/* </p> */}
          </p>
          <p className="pt-3 992md:pt-0 2xl:pt-[10px] text-[12px] xl:text-[14px] 2xl:text-[16px] 16603xl:text-[18px] xl:leading-[24px] text-[#666666] font-normal max-992md:text-center">
            Our process is structured, but not rigid. You won’t get a pre-baked
            playbook — you’ll get a team that understands how to think, move,
            and build inside real conditions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[35px] xl:gap-x-20 gap-y-[25px] 992md:gap-y-[14px] 2xl:gap-y-[30px] items-center">
          {stepCard.map((detailes, index) => (
            <div
              key={index}
              className="flex flex-col gap-[18px] 481sm:gap-[5px] 2xl:gap-[14px]"
            >
              <div className="flex gap-[10px] items-center">
                <div className="bg-[#0071BC] rounded-[8px] pl-1 2xl:pl-[6px] h-full">
                  <p className="text-5 font-bold font-Arial border border-l-[3px] border-wite h-full py-[6px] 2xl:py-2 px-[10px] 2xl:px-3 text-white">
                    {detailes.step}
                  </p>
                </div>
                <p className="font-Arial font-bold font-lg 2xl:text-xl">
                  {detailes.title}
                </p>
              </div>
              <p className="text-[13px] xl:text-sm 2xl:text-[16px] leading-[22px] 2xl:leading-[24px] text-[#151515]">
                {detailes.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* second card */}
      <div className="relative">
        <Image
          src="/images/convertec.svg"
          alt="image"
          height={769}
          width={672}
          className=""
        />
        <button
          className="bg-[#0071BC] right-[0%] bottom-[1%] md:bottom-[2%] 992md:bottom-[1%] absolute rounded-[4px] w-fit font-Arial text-white font-bold text-[11px] 481sm:text-xs sm:text-sm 2xl:text-lg py-[6px] sm:py-3 992md:py-[7px] xl:py-2 2xl:py-[14px] px-[5px]
        481sm:px-[13px] sm:px-[30px] md:px-9 992md:px-2 xl:px-5 2xl:px-8"
        >
          Book a Call
        </button>
        <Image
          src="/images/sidelogoConventec.svg"
          alt="image"
          height={57}
          width={43}
          className="absolute left-[-1%] 481sm:left-[1%] sx:left-[3%] 992md:left-[1%] 2xl:left-[3%] bottom-[8%] xl:bottom-[8%] 2xl:bottom-[8%] h-[29px] 481sm:h-[39px] sm:h-[55px] 992md:h-[44px] 2xl:h-[57px]"
        />
        <Image
          src="/images/convertecArrow.svg"
          alt="image"
          height={46}
          width={145}
          className="w-[69px] 481sm:w-[78px] sm:w-[130px] 992md:w-20 xl:w-[100px] 2xl:w-[145px] absolute top-[1%] left-[4%]"
        />
        {/* sidelogoConventec.svg */}
      </div>
    </div>
  );
};

export default ConvertecPage;
