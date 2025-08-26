import React from "react";
import HeroPage from "../components/HeroPage";
import TechnologyPartner from "../components/TechnologyPartner";
import ServicePage from "../components/ServicePage";
import Consultant from "../components/Consultant";
import ContactForm from "../components/ContactForm";
import ThinkingPage from "../components/ThinkingPage";
import ConvertecPage from "../components/ConvertecPage";
const HomePage = () => {
  return (
    <>
      <HeroPage />
      <TechnologyPartner />
      <ServicePage />
      {/* <Consultant /> */}
      <ConvertecPage />
      <ThinkingPage />
      <ContactForm />
    </>
  );
};

export default HomePage;
