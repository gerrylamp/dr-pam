import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

export const Testimonials = () => {
  const { ref, fadeInClass } = useFadeIn(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Client",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?...",
      quote:
        "Working with Dr. Russell has been transformative. Her approach is both professional and compassionate, and the results have exceeded my expectations.",
    },
    {
      name: "Michael Thompson",
      role: "Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?...",
      quote:
        "Dr. Pam's expertise and personalized approach have made a significant difference in my life. I highly recommend her services to anyone looking for real results.",
    },
    {
      name: "Emily Rodriguez",
      role: "Client",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?...",
      quote:
        "The level of care and attention I received from Dr. Russell was exceptional. She truly listens and develops solutions tailored to individual needs.",
    },
  ];

  // Fade + index logic
  const handleChange = (newIndex: number) => {
    setIsFading(true);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 300);
  };

  // Auto-scroll
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleChange((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalRef.current!);
  }, []);

  const manualChange = (direction: "next" | "prev") => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % testimonials.length
        : (currentIndex - 1 + testimonials.length) % testimonials.length;

    handleChange(newIndex);

    // Restart auto-scroll after 10s pause
    intervalRef.current = setInterval(() => {
      handleChange((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#0201BF]/5 bg-gray-50/80 h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-12 ${fadeInClass}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0201BF] to-[#D11DD9] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from clients who have experienced the benefits of working with Dr. Pam Russell.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white">
            <div
              className={`bg-linear-gradient rounded-2xl shadow-lg p-8 md:p-10 min-h-[250px] transition-opacity duration-500 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#6D38FF] to-[#D11DD9] rounded-full blur-sm opacity-70"></div>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="relative w-24 h-24 object-cover rounded-full"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => manualChange("prev")}
              className="bg-white hover:bg-[#0201BF] hover:text-white text-[#0201BF] w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button
              onClick={() => manualChange("next")}
              className="bg-white hover:bg-[#0201BF] hover:text-white text-[#0201BF] w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
