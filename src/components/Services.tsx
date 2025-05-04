import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { assets } from "../assets/assets";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const serviceData = [
  {
    title: "Balance Body Mind",
    desc: "Finding a workout is as easy as scrolling down, picking out the session that matches.",
    img: assets.img1,
    icon: "flaticon-medical",
  },
  {
    title: "Physical Activity",
    desc: "Finding a workout is as easy as scrolling down, picking out the session that matches.",
    img: assets.img2,
    icon: "flaticon-sports",
  },
  {
    title: "Support & Motivation",
    desc: "Finding a workout is as easy as scrolling down, picking out the session that matches.",
    img: assets.img3,
    icon: "flaticon-line",
  },
  {
    title: "Exercise Program",
    desc: "Finding a workout is as easy as scrolling down, picking out the session that matches.",
    img: assets.img4,
    icon: "flaticon-people",
  },
  {
    title: "Exercise Program",
    desc: "Finding a workout is as easy as scrolling down, picking out the session that matches.",
    img: assets.img4,
    icon: "flaticon-people",
  },
  {
    title: "Exercise Program",
    desc: "Finding a workout is as easy as scrolling down, picking out the session that matches.",
    img: assets.img4,
    icon: "flaticon-people",
  },
  {
    title: "Exercise Program",
    desc: "Finding a workout is as easy as scrolling down, picking out the session that matches.",
    img: assets.img4,
    icon: "flaticon-people",
  },
];

export const Services = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [mountedSlides, setMountedSlides] = useState<number[]>([]);

  // Animates each slide in sequence
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMountedSlides(serviceData.map((_, index) => index));
    }, 100); // slight delay for smoother animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="services" className="py-12">
      <div className="container mx-auto px-4">
        {/* Heading and Controls */}
        <div className="flex items-center justify-between flex-wrap mb-10">
          <div>
            <h3 className="text-lg text-blue-600 uppercase courgette-regular">What We Do</h3>
            <h1 className="text-3xl font-bold">Our Services</h1>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button
              ref={prevRef}
              className="text-xl border-2 border-gray-200 text-gray-400 hover:border-blue-600 hover:text-blue-600 px-3 py-1 rounded font-medium transition-all duration-500"
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button
              ref={nextRef}
              className="text-xl border-2 border-gray-200 text-gray-400 hover:border-blue-600 hover:text-blue-600 px-3 py-1 rounded font-medium transition-all duration-500"
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          onInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!px-2 !py-4"
        >
          {serviceData.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`
                  bg-white shadow-md rounded-xl overflow-hidden 
                  transform transition duration-700 ease-in-out
                  ${mountedSlides.includes(idx) ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5 text-center">
                  <div className="mb-2">
                    <span className={service.icon}></span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                  <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
