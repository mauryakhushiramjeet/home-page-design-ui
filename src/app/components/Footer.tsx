import Image from "next/image";
import React from "react";
const Footer = () => {
  const footerMenu = [
    {
      head: "Our Services",
      menu: [
        "AI Integrations",
        "Software Development",
        "Mobile Application Development",
        "E-Commerce Development",
        "Web Development",
        "Digital Marketing",
      ],
    },
  ];
  const footerMenu2 = [
    {
      head: "Find Out More",
      menu: [
        "About Convertec",
        "Contact Us",
        "Our Blog",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
  ];
  const contactMenu = [
    {
      title: "Let’s Get In Touch",
      contactDetails: [
        {
          image: "/images/call.svg",
          menuText: (
            <>
              {" "}
              <span className="text-[#CCCCCC]">USA:</span>
              <span className="text-white">0+(212) 339 1929</span>
            </>
          ),
        },
        {
          image: "/images/call.svg",
          menuText: (
            <>
              {" "}
              <span className="text-[#CCCCCC]">NEW ZELAND:</span>
              <span className="text-white">+64 9 872 2651</span>
            </>
          ),
        },
        {
          image: "/images/folder.svg",
          menuText: (
            <>
              <span className="text-white">info@convertech.ai</span>
            </>
          ),
        },
      ],
    },
  ];

  const socialIcons = [
    {
      image: "/images/facebook.svg",
    },
    {
      image: "/images/linkdin.svg",
    },
  ];
  return (
    <div className="bg-[url('/images/footerbg.svg')] bg-bottom bg-auto bg-no-repeat px-5 481sm:px-[45px]  md:px-[70px] xl:px-[120px] 16603xl:px-[200px] pt-10 md:pt-[50px] 2xl:pt-[80px] pb-[50px] sm:pb-[70px] 2xl:pb-20 16603xl:pb-[203px] bg-black ">
      <div className="flex max-992md:flex-wrap gap-10 992md:gap-[56px] xl:gap-[100px] 16603xl:gap-[164px]">
        <div>
          <div className="flex items-center gap-[9px]">
            <Image
              src="/images/footerLogo.svg"
              alt="footer-logo"
              width={34}
              height={45}
            />
            <p className="text-[25px] 992md:text-[28px] text-[#FFFFFF] font-nexa-bold leading-[100%]">
              Convertec
            </p>
          </div>
          <p className="pt-3 2xl:pt-[21px] text-[#FFFFFF] text-xs 2xl:text-sm 16603xl:text-base w-full max-w-full sm:max-w-[256px] xl:max-w-[293px]">
            Unlock remarkable business growth with our transformative services
            and innovative digital solutions. Partner with us to achieve
            unparalleled scalability and success in the era of Artificial
            Intelligence.
          </p>
        </div>
        <div className="flex">
          {footerMenu.map((menu, index) => (
            <div key={index}>
              <p className="text-[#FFFFFF] text-sm lg:text-base 2xl:text-lg font-Arial">{menu.head}</p>
              <div className="pt-3 text-[#CCCCCC] flex flex-col gap-2 2xl:gap-4 16603xl:gap-[10px] ">
                {menu.menu.map((m, index) => (
                  <p key={index} className="text-[12px] 2xl:text-[14px] 16603xl:text-[16px]">
                    {m}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          {footerMenu2.map((menu, index) => (
            <div key={index}>
              <p className="text-[#FFFFFF] text-sm lg:text-base 2xl:text-lg font-Arial">{menu.head}</p>
              <div className="pt-3 text-[#CCCCCC] flex flex-col gap-2 2xl:gap-4 16603xl:gap-[10px] ">
                {menu.menu.map((m, index) => (
                  <p
                    key={index}
                    className="text-[12px] 2xl:text-[14px] 16603xl:text-[16px] leading-[100%] text-nowrap"
                  >
                    {m}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col ">
          {contactMenu.map((menu, index) => (
            <div key={index}>
              <p className="font-Arial font-bold text-sm lg:text-base 2xl:text-lg text-white pb-3">
                {menu.title}
              </p>
              <div className="flex flex-col gap-2 992md:gap-5">
                {menu.contactDetails.map((details, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Image
                      src={details.image}
                      alt="details-image"
                      width={20}
                      height={20}
                      className="w-4 2xl:w-5 h-5"
                    />
                    <p className="text-[12px] 2xl:text-[14px] 16603xl:text-[16px]">{details.menuText}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-[1px] bg-[#FFFFFF] opacity-[20%] mt-10 2xl:mt-[60px]"></div>
      <div className="flex flex-col 992md:flex-row justify-between w-full items-center text-[#FFFFFF] pt-[30px] text-xs 2xl:text-sm 16603xl:text-base">
        <p className="text-center">
          ©️2025 Covertec. All right reserved. Read our privacy policy & terms &
          conditions for more information.{" "}
        </p>
        <div className="flex items-center gap-5 max-992md:mt-2 ">
          <p>Visit us on social networks</p>
          <div className="flex gap-3 2xl:gap-5 items-center">
            {socialIcons.map((icon, index) => (
              <div key={index}>
                <Image src={icon.image} height={30} width={30} alt="icosn"  className="w-[25px] 2xl:w-[30px] h-[30px]"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
