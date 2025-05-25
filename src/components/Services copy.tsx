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
    desc: "Tailored coaching programs to help you grow, gain clarity, and reach your full potential in life and career.",
    img: assets.PersonalDevelopment,
    icon: assets.PersonalDevelopmentIcon,
  },
  {
    title: "Coaching",
    desc: "Personalized coaching to inspire transformation, build resilience, and support sustained progress.",
    img: assets.Coaching,
    icon: assets.CoachingIcon,
  },
  {
    title: "Pastoral Counseling",
    desc: "Faith-informed counseling to nurture emotional, spiritual, and relational well-being.",
    img: assets.PastoralCounseling,
    icon: assets.PastoralCounselingIcon,
  },
  {
    title: "Meditation",
    desc: "Guided meditation sessions to cultivate mindfulness, focus, and inner peace in a busy world.",
    img: assets.Meditation,
    icon: assets.MeditationIcon,
  },
  {
    title: "Anger Management",
    desc: "Strategies to identify triggers, manage emotional responses, and build healthier relationships.",
    img: assets.AngerManagement,
    icon: assets.AngerManagementIcon,
  },
  {
    title: "Publishing",
    desc: "Support for authors and speakers in editing, designing, and launching impactful publications.",
    img: assets.Publishing,
    icon: assets.PublishingIcon,
  },
  {
    title: "Notary Services",
    desc: "Trusted and efficient notarial services for personal and business documentation.",
    img: assets.NotaryServices,
    icon: assets.NotaryServicesicon,
  },
  {
    title: "Training",
    desc: "Engaging workshops and programs to upskill teams and empower individual performance.",
    img: assets.Training,
    icon: assets.TrainingIcon,
  },
  {
    title: "Spiritual Connection",
    desc: "Sessions that help you reconnect with your values, purpose, and inner wisdom.",
    img: assets.SpiritualConnection,
    icon: assets.SpiritualConnectionicon,
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
                      <img className="w-16 h-16" src={service.icon} alt={`${service.title} icon`} />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
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
                      <img className="w-16 h-16" src={service.icon} alt={`${service.title} icon`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
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
