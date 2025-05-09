import { About } from "../components/About";
import { Blogs } from "../components/Blogs";
import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import Services from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact"; // ✅ Correct import
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = document.querySelectorAll(".panel");
    const panelCount = panels.length;

    gsap.to(".horizontal-scroll-content", {
      xPercent: -100 * (panelCount - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-wrapper",
        pin: true,
        scrub: 1,
        snap: 1 / (panelCount - 1),
        end: () =>
          "+=" +
          (document.querySelector(".horizontal-scroll-content")?.scrollWidth || 0),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="flex-grow">
      <Hero />
      <section className="horizontal-wrapper">
      {/* <div
    className="absolute inset-0 bg-fixed bg-center bg-cover svg-bg"
  ></div> */}

        <div className="horizontal-scroll-content">
          <div className="panel"><About /></div>
          <div className="panel"><Services /></div>
          <div className="panel"><Testimonials /></div>
        </div>
      </section>
      <CTA />
      <Blogs />
      <Contact />
    </main>
  );
};
