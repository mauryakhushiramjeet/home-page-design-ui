import Image from "next/image";
import React, { ReactNode } from "react";

const ServicePage = () => {
  interface Service {
    title: string;
    description: ReactNode;
    servicessTitle: string;
    services: string[];
    image: string;
  }

  const col1: Service[] = [
    {
      title: "AI & Automation",
      description: (
        <>
          Convertec delivers{" "}
          <span className="text-[#0071BC]">AI and automation</span> solutions
          that solve real business problems — eliminating inefficiencies,
          lowering operational costs, and speeding up decision-making. Our{" "}
          <span className="text-[#0071BC]">intelligent</span> approach connects
          seamlessly into existing operations, driving measurable improvements
          without disruption. We design{" "}
          <span className="text-[#0071BC]">machine learning </span>models and{" "}
          <span className="text-[#0071BC]">AI integrations</span> that stay
          practical and ready for scale. Every engagement focuses on long-term
          results, not just pilots or experiments. With us, smart technology
          becomes a strategic advantage..
        </>
      ),
      servicessTitle: "Our AI & Automation services include:",
      services: [
        "AI Chatbot Development",
        "AI Integration",
        "Machine Learning Solutions",
      ],
      image: "/images/agentImage.svg",
    },
    {
      title: "Mobile Application Development",
      description: (
        <>
          We build mobile applications that improve workflows, expand user
          access, and perform reliably under real operating conditions.
          Convertec delivers{" "}
          <span className="text-[#0071BC]">
            {" "}
            Android app development, iOS app development ,
          </span>{" "}
          and cross-platform builds with clean integration and dependable
          performance. Our teams avoid feature bloat and instead prioritize
          usability, delivery speed, and long-term maintainability. With
          Convertec, your mobile software works exactly where it matters — in
          real environments, across real teams, without compromise.
        </>
      ),
      servicessTitle: "Our Mobile App Development services include:",

      services: [
        "Android & iOS Development",
        "Cross-platform & Hybrid Apps",
        "App UI/UX Design",
      ],
      image: "/images/agentImage.svg",
    },

    {
      title: "Web Development",
      description: (
        <>
          A stable web platform reduces support tickets, shortens deployment
          cycles, and makes daily operations easier for everyone who touches it.
          That’s what we build. Convertec’s{" "}
          <span className="text-[#0071BC]">web development</span> teams
          prioritize backend clarity, fast response times, and clean handoffs
          between design and engineering. We handle everything from custom CMS
          logic to portal integrations with legacy systems—without
          overengineered stacks or patchwork fixes. Our work doesn’t rely on
          guesswork. It’s planned, delivered, and built to hold under pressure.
        </>
      ),
      servicessTitle: "Our Web Development services include:",

      services: [
        "Our Web Development services include:",
        "Custom CMS Development",
        "Web Portal Development",
      ],
      image: "/images/agentImage.svg",
    },
    {
      title: "Mobile Application Development",
      description:
        "Most campaigns waste budget because they chase clicks, not results. Convertec runs digital marketing like an engineering project—measuring systems, tuning performance, and cutting failure points early. We build strategies that connect search, paid media, and automation into one operational engine, not isolated efforts. Every move is tied to clear business outcomes, not surface-level metrics. That’s how we deliver marketing that actually moves revenue.",
      servicessTitle: "Our Digital Marketing services include:",

      services: [
        "Search Engine Optimization",
        "Google Ads (PPC)",
        "Marketing Automation",
        "Social Media Marketing",
        "Content Marketing",
      ],
      image: "/images/agentImage.svg",
    },
  ];
  //

  const col2: Service[] = [
    {
      title: "Software Development",
      description: (
        <>
          Most off-the-shelf platforms don’t match how your business actually
          operates. Convertec builds{" "}
          <span className="text-[#0071BC]">custom software solutions </span>{" "}
          that solve the gaps generic systems leave behind—whether it’s
          automating critical processes, tightening data flow, or removing
          dependency on outdated tools. Our teams don’t just code—we understand
          your operations, flag inefficiencies early, and build exactly what’s
          needed to improve performance across teams. With us, you get software
          that fits your environment, integrates cleanly, and gives you full
          control over how it evolves.
        </>
      ),
      servicessTitle: "Our Software Development services include",

      services: [
        "Custom Software Development",
        "Custom Software Development",
        "Enterprise Software Solutions",
      ],
      image: "/images/agentImage.svg",
    },
    {
      title: "E-Commerce Development",
      description:
        "Most vendors treat e-commerce as a storefront. Convertec builds it as infrastructure—stable, flexible, and designed to support real operations. We work across platforms like Shopify, WooCommerce, and Magento, delivering systems that support complex logic, multi-channel sales, and tight backend integration. Our focus stays on what matters: speed, data consistency, and control. You don’t get themes or plugins—you get a system built for how your business actually sells.",
      servicessTitle: "Our E-Commerce services include:",

      services: [
        "Shopify Development",
        "Woo-commerce Development",
        "Magento & Custom E-commerce",
      ],
      image: "/images/agentImage.svg",
    },
    {
      title: "UI/UX Design",
      description:
        "Poor interfaces slow users down. Bad workflows cost companies real money. Convertec designs digital experiences that fix both. We connect every UI and UX decision to user behavior, operational speed, and long-term product performance. No trend-based layouts. No aesthetics without function. Just design that moves users—and the business—with less effort.",
      servicessTitle: "Our UI/UX services include:",

      services: [
        "User Interface (UI) Design",
        "User Experience (UX) Research",
        "Product Design Services",
      ],
      image: "/images/agentImage.svg",
    },
    {
      title: "Technology Consulting & Digital Strategy",
      description:
        "Technology decisions determine how fast a company can move—or how fast it falls behind. Convertec’s consulting teams work directly with operations to identify risks, set priorities, and align platforms to real growth goals. We don’t deliver strategy decks that collect dust. We translate digital initiatives into execution plans with clear deliverables, ownership, and measurable business outcomes.",
      servicessTitle: "Our Consulting & Strategy services include:",

      services: [
        "Tech Planning",
        "Platform Advice",
        "Digital Growth Strategy",
        "Product & Startup Guidance",
      ],
      image: "/images/agentImage.svg",
    },
  ];

  return (
    <div className="px-5 481sm:px-[55px] sm:px-[35px]  992md:px-[70px] xl:px-[120px] 16603xl:px-[200px] py-[25px] 481sm:py-9 sm:py-[55px] xl:py-20 2xl:py-[100px] 16603xl:py-[130px] w-full bg-white">
      <div className="flex flex-col 992md:flex-row items-center max-992md:text-center gap-5 481sm:gap-5 992md:gap-[60px] 16603xl:gap-[70px] w-full">
        <p className="font-bold text-[#151515] leading-[32px] 481sm:leading-[47px] xl:leading-[50px] 2xl:leading-[70px] 992md:max-w-[438px] xl:max-w-[594px]  2xl:max-w-[692px] 16603xl:max-w-[831px] text-[18px] 481sm:text-[30px] md:text-[33px] 992md:text-[28px] xl:text-[32px] 2xl:text-[45px] 16603xl:text-[54px] font-nexa-bold">
          {" "}
          <span className="text-[#0071BC]">Our Services </span>Cover the Full
          Stack — Technical and Strategic
        </p>
        <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium leading-[22px] xl:leading-[24px] 992md:w-[543px] 16603xl:w-[653px] text-[#666666]">
          Nearly
          <span className="text-[#0071BC] ">
            70% of digital transformation initiatives fail,
          </span>
          often because of poor strategy and execution. At Convertec, our
          services are built to change that outcome. We design scalable systems,
          integrate smart technologies, and create solutions that drive
          measurable growth. Every project is grounded in solid engineering—and
          built to scale with your business.
        </p>
      </div>

      {/* servicess card
       */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[50px] 992md:gap-x-20 xl:gap-x-[170px] mt-14 992md:mt-20">
        {/* col1 */}
        <div className="flex flex-col gap-y-14 481sm:gap-y-[70px] sm:gap-y-[90px] 2xl:gap-y-[150px] ">
          {col1.map((data, index) => (
            <div key={index}>
              <div className="flex gap-[11px] 992md:gap-5 2xl:gap-[30px] items-center ">
                <span className="rounded-[10px] w-[51px] 992md:w-[60px] 2xl:w-[120px] h-[6px] bg-[#0071BC]"></span>
                <p className="leading-[28px] 2xl:leading-[100%] text-[16px] 992md:text-[20px] 2xl:text-[30px] font-bold font-Arial">
                  {data.title}{" "}
                </p>
              </div>
              <div className="mt-[15px] 992md:mt-[18px] 2xl:mt-[30px]">
                <Image
                  src={data.image}
                  height={440}
                  width={675}
                  alt="image"
                  className="rounded-[14px]"
                />
              </div>{" "}
              <p className="text-[13px] 992md:text-[14px] 2xl:text-[18px] padding-top-3 992md:pt-5 leading-[22px] 992md:leading-[24px] text-[#666666]">
                {data.description}
              </p>
              <div className="mt-[10px] 992md:mt-[15px] 2xl:mt-[30px]">
                <p className="font-bold text-[16px] 992md:text-[18px] 2xl:text-[22px] leading-[24px] lg:leading-[100%] pb-2 992md:pb-[15px] 2xl:pb-6">
                  {data.servicessTitle}
                </p>
                <div className="flex flex-col gap-2 992md:gap-3 2xl:gap-5">
                  {data.services.map((service, index) => (
                    <div key={index} className="flex gap-2 2xl:gap-[14px] items-center">
                      <div>
                        <Image
                          src="/images/service.svg"
                          height={24}
                          width={44}
                          alt="serviceimage"
                          className="w-[30px] 992md:w-[34px] 2xl:w-[44px]"
                        />
                      </div>
                      <p className="text-[12px] 992md:text-[14px] 2xl:text-[18px] leading-[100%] text-[#151515]">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* col2 */}
        <div className="flex flex-col gap-y-14 481sm:gap-y-[70px] sm:gap-y-[90px] 2xl:gap-y-[150px]">
          {col2.map((data, index) => (
                        <div key={index} className={`${index==0?"mt-14 481sm:mt-[70px] sm:mt-[100px] md:mt-[150px] 2xl:mt-[250px]":""}`}>

              <div className="flex gap-[11px] 992md:gap-5 2xl:gap-[30px] items-center ">
                <span className="rounded-[10px] w-[51px] 992md:w-[60px] 2xl:w-[120px] h-[6px] bg-[#0071BC]"></span>
                <p className="leading-[28px] 2xl:leading-[100%] text-[16px] 992md:text-[20px] 2xl:text-[30px] font-bold font-Arial">
                  {data.title}{" "}
                </p>
              </div>
              <div className="mt-[15px] 992md:mt-[18px] 2xl:mt-[30px]">
                <Image
                  src={data.image}
                  height={440}
                  width={675}
                  alt="image"
                  className="rounded-[14px]"
                />
              </div>{" "}
              <p className="text-[13px] 992md:text-[14px] 2xl:text-[18px] padding-top-3 992md:pt-5 leading-[22px] 992md:leading-[24px] text-[#666666]">
                {data.description}
              </p>
              <div className="mt-[10px] 992md:mt-[15px] 2xl:mt-[30px]">
                <p className="font-bold text-[16px] 992md:text-[18px] 2xl:text-[22px] leading-[24px] lg:leading-[100%] pb-2 992md:pb-[15px] 2xl:pb-6">
                  {data.servicessTitle}
                </p>
                <div className="flex flex-col gap-2 992md:gap-3 2xl:gap-5">
                  {data.services.map((service, index) => (
                    <div key={index} className="flex gap-2 2xl:gap-[14px] items-center">
                      <div>
                        <Image
                          src="/images/service.svg"
                          height={24}
                          width={44}
                          alt="serviceimage"
                          className="w-[30px] 992md:w-[34px] 2xl:w-[44px]"
                        />
                      </div>
                      <p className="text-[12px] 992md:text-[14px] 2xl:text-[18px] leading-[100%] text-[#151515]">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

//  <div
//             key={index}
//             className={`mt-[${(index%2!==0?150:0)+(index==1?100:0)}px] flex flex-col`}
//           >
//
//           </div>
