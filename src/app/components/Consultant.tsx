import Image from "next/image";
import React from "react";

const Consultant = () => {
  const processSteps1 = [
    {
      icon: "/icons/book.svg", // replace with your actual icon path
      title: "We map the work before we move",
      description: (
        <>
          Most projects fail because they start without a real plan. We define
          the{" "}
          <span className="font-semibold">
            scope, roles, systems, and timeline
          </span>{" "}
          early — so decisions later don’t get stuck or loop back.
        </>
      ),
    },
    {
      icon: "/icons/wave.svg", // replace with your actual icon path
      title: "We reduce resistance by staying close",
      description: (
        <>
          <span className="text-[#29ABE2] underline">52% of companies</span> say
          internal pushback slows things down. We stay embedded in your delivery
          — not outside it — so teams stay aligned and blockers are raised
          early.
        </>
      ),
    },
  ];

  const processSteps2 = [
    {
      icon: "/icons/book.svg", // replace with your actual icon path
      title: "We map the work before we move",
      description: (
        <>
         Legacy systems are one of the biggest hidden blockers. We help update infrastructure in stages — without shutting everything down or overspending on tech.
        </>
      ),
    },
    {
      icon: "/icons/wave.svg", // replace with your actual icon path
      title: "We reduce resistance by staying close",
      description: (
        <>
          Siloed work kills velocity. We align product, engineering, and
          business with one shared delivery model — so nothing falls between
          roles.
        </>
      ),
    },
  ];

  return (
    <div className="px-5 481sm:px-[45px] md:px-[70px] xl:px-[120px] 16603xl:px-[200px] py-[130px] bg-[#000000]">
      <div className="text-center px-[110px]">
        <p className="font-bold font-nexa-bold leading-[70px] text-[54px] text-[white]">
          The Consultant You Need
        </p>
        <div className="text-[18px] leading-[24px] text-[#AEAEAE] mt-[10px]">
          <p className="">
            <span className="text-[#29ABE2] underline font-medium">
              A recent survey
            </span>
            of 702 senior executives and project managers revealed that{" "}
            <span className="text-[#FFFFFF] font-medium">
              84% found the services of top-tier consultancies unhelpful
            </span>{" "}
            in their corporate transformation projects.{" "}
            <span className="text-[#FFFFFF] font-medium">
              Only 13% believed these firms were more beneficial than harmful
            </span>
            , while 3% reported a negative impact. A common reason IT projects
            underperform is the disconnect between how a business operates and
            what technical teams know about that domain. Even experienced
            engineers can miss the mark if they don’t understand the business
            behind the system. That’s where real performance is shaped.
          </p>
          <p className="mt-3">
            Another factor is that many businesses aren’t fully aware of what
            today’s technology can actually do for them. Requests are often
            based on familiarity, not potential. Good guidance includes helping
            teams explore better ways to solve the right problems. At Convertec,
            we focus on both. We make sure we understand the business first,
            then build what fits. And we work closely with clients to shape
            solutions that go beyond the expected. The situation underscores a
            critical issue: many consultancies offer generic strategies that
            fail to address the unique challenges of individual organizations.
          </p>
        </div>
      </div>
      <div className="relative w-full border ">
        <div className="absolute  flex">
            <Image src="/images/cunsultantbg.svg" alt="consulatentbg-image" width={713} height={413}/>
        </div>
        <div className="flex flex-col gap-[100px]">
{/* {
    processSteps1.map((step)=>(
        <div></div>
    ))
} */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Consultant;
