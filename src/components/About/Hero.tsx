import { useFadeIn } from "../../hooks/useFadeIn";
import { assets } from "../../assets/assets";

export const Hero = () => {
  const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

  return (
    <section className="bg-white text-gray-800 font-sans">
      {/* ✅ Hero Section */}
      <div
        className="relative h-[80vh] overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.profile})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-indigo-900/60" />

        {/* ✅ Fixed Text Group with Fade In */}
        <div
          ref={ref}
          className={`fixed h-[inherit] inset-0 flex flex-col justify-center items-center text-white text-center px-4 ${fadeInClass}`}
          style={style}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Dr. Pamela Russell</h1>
          <p className="text-xl max-w-2xl">
            Guiding individuals and organizations toward clarity, growth, and purpose.
          </p>
          <a
            href="#contact"
            className="mt-6 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition duration-300 transform hover:scale-105"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
