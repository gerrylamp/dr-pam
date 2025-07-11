import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { assets } from "../assets/assets";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const serviceData = [
  {
    title: "Business Services",
    desc: "Strategic guidance for entrepreneurs and organizations seeking growth with clarity and purpose.",
    img: assets.BusinessServices,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6M5 8h14M4 6h16a1 1 0 011 1v13a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"/>
        </svg>
    ),
  },
  {
    title: "Personal Development",
    desc: "Tools and strategies to help you become your best self — emotionally, spiritually, and practically.",
    img: assets.PersonalDevelopment,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    )
  },
  {
    title: "Coaching",
    desc: "One-on-one sessions to help clarify vision, set goals, and take action with confidence and faith.",
    img: assets.Coaching,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke-width="1.5" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v5l3 2" />
        </svg>
    )
  },
  {
    title: "Pastoral Counseling",
    desc: "Faith-based emotional and spiritual support for individuals navigating grief, anxiety, or life transitions.",
    img: assets.PastoralCounseling,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
    )
  },
  {
    title: "Meditation",
    desc: "Neutral, faith-guided resolution for individuals or teams in conflict — promoting understanding and peace.",
    img: assets.Meditation,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6M5 4h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"/>
        </svg>
    )
  },
  {
    title: "Anger Management",
    desc: "Christ-centered programs to help you manage emotional responses and build healthy communication patterns.",
    img: assets.AngerManagement,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 9h.01M9 9h.01M8 15c1.5-1 6-1 8 0" />
        </svg>
    )
  },
  {
    title: "Publishing",
    desc: "Support for aspiring authors — from manuscript coaching to publishing and promotion.",
    img: assets.Publishing,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
    )
  },
  {
    title: "Notary Services",
    desc: "Quick, local notarization with professionalism and integrity.",
    img: assets.NotaryServices,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 4.5h13.5v15H5.25z" />
        </svg>
    )
  },
  {
    title: "Training",
    desc: "Leadership, ministry, and organizational development sessions tailored for transformation.",
    img: assets.Training,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6l4 2" />
        </svg>
    )
  },
  {
    title: "Spiritual Connection",
    desc: "Helping you reconnect with your spiritual walk, prayer life, and divine purpose through guided sessions.",
    img: assets.SpiritualConnection,
    icon: (
        <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 2" />
        </svg>
    )
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
    <section id="services" className="py-12 bg-gray-100/80 h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Heading and Controls */}
        <div className="flex items-center justify-between flex-wrap mb-10">
          <div>
            {/* <h3 className="text-lg text-blue-600 uppercase courgette-regular">What We Do</h3> */}
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Our Services</h1>
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
                  group bg-white shadow-md rounded-xl overflow-hidden 
                  transform transition duration-700 ease-in-out
                  ${mountedSlides.includes(idx) ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />

                
                <div
                  className="
                    absolute top-[-20rem] left-4 right-4 bottom-[25rem]
                    bg-white rounded-xl shadow-md 
                    text-center
                    transition-all duration-500 
                    transform group-hover:top-4 group-hover:bottom-4
                    
                  "
                >
                  <div className="bg-linear-gradient2 p-5 flex justify-center flex-col h-full">
                    <div className="mb-2 flex justify-center">
                      {/* <img className="w-16 h-16" src={service.icon} alt={`${service.title} icon`} /> */}
                      {service.icon}
                    </div>

                    <h3 className="text-[1vw] font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.desc}</p>

                    <div>
                      <a
                        href="/service-single-page"
                        className="inline-block border-blue-600 border-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-transparent hover:text-blue-600 font-semibold transition-colors duration-300"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="
                    absolute bottom-4 left-4 right-4 
                    bg-white rounded-xl shadow-md 
                    text-center
                    transition-all duration-500 
                    transform group-hover:translate-y-[10rem]
                  "
                >
                  <div className="bg-linear-gradient p-5">
                    <div className="mb-2 flex justify-center">
                      {/* <img className="w-16 h-16" src={service.icon} alt={`${service.title} icon`} /> */}
                      {service.icon}
                    </div>
                    <h3 className="text-[1vw] font-semibold text-gray-800">{service.title}</h3>
                  </div>
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
