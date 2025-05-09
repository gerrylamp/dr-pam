import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { useParallax } from "../hooks/useParallax";
import { useFadeIn } from "../hooks/useFadeIn";
import { assets } from "../assets/assets";

export const Hero = () => {
  const { x, y } = useParallax(0.02);

  const fadeLeft = useFadeIn(0.1, 0);
  const fadeRight = useFadeIn(0.1, 150);

  return (
    <>
    {/* Background video outside main section */}
      <video autoPlay muted loop playsInline preload="auto" className="video-bg">
        <source src={assets.heroBgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <section className="flex items-center relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 parallax-video">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div
              ref={fadeLeft.ref}
              className={`order-2 md:order-1 relative ${fadeLeft.fadeInClass}`}
              style={fadeLeft.style}
            >
              <div
                className="absolute -left-4 top-0 w-20 h-20 bg-[#50F2FD] opacity-20 rounded-full blur-xl"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              />
              <h1 className="text-5xl text-gray-50 md:text-6xl lg:text-7xl font-bold leading-tight relative">
                <span className="block transform hover:scale-105 transition-transform duration-300 cursor-default">
                  Transforming
                </span>
                <span className="block transform hover:scale-105 transition-transform duration-300 cursor-default">
                  Lives Through
                </span>
                <span className="block bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 cursor-default">
                  Expert Care
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-100 max-w-lg relative z-10">
                Dedicated to providing exceptional care and personalized solutions
                to help you achieve your optimal health and wellness goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="group bg-[#0201BF] hover:bg-[#6D38FF] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
                >
                  Explore Services
                  <ArrowRightIcon
                    size={18}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#about"
                  className="group border-2 border-[#0201BF] hover:bg-[#0201BF] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div
              ref={fadeRight.ref}
              className={`order-1 md:order-2 flex justify-center md:justify-end ${fadeRight.fadeInClass}`}
              style={fadeRight.style}
            >
              <div
                className="relative animate-float hover:scale-105 transition-all duration-500"
                style={{ transform: `translate(${-x}px, ${-y}px)` }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0201BF] to-[#D11DD9] rounded-full blur-xl opacity-70" />
                <div className="relative bg-white rounded-full p-2">
                  <img
                    src={assets.profile}
                    alt="Dr. Pam Russell"
                    className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full transform transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  </>
  );
};
