import { useFadeIn } from "../hooks/useFadeIn";
import { assets } from "../assets/assets";
import { Hero } from "../components/About/Hero";
import { Bio } from "../components/About/Bio";
import { Credentials } from "../components/About/Credentials";
import { Mission } from "../components/About/Mission";
import { Journey } from "../components/About/Journey";
import { CTA } from "../components/About/CTA";
import { Contact } from "../components/Contact";

export const AboutMe = () => {
  return (
    <>
      <Hero />
      <Bio />
      <Credentials />
      <Mission />
      <Journey />
      <CTA />
      <Contact />
    </>
  );    
};