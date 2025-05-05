import { useFadeIn } from "../hooks/useFadeIn";
import { assets } from "../assets/assets";

export const CTA = () => {
  const { ref, fadeInClass, style } = useFadeIn(0.2, 0); // 0.2 threshold, no delay

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 scale-100 transform transition-transform duration-[3000ms] ease-out will-change-transform"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20professional%20background%20with%20soft%20gradient%20of%20blue%20and%20purple%2C%20clean%20modern%20design%2C%20suitable%20for%20text%20overlay%2C%20minimalist%20elegant%20style%20for%20coaching%20business%2C%20high-end%20business%20atmosphere&width=1920&height=600&seq=cta1&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-primary/80"></div> */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${assets.office})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>



      {/* Animated Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transform ${fadeInClass}`}
          style={style}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Leadership Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a complimentary 30-minute consultation to discuss your goals and explore how we can work together.
          </p>
          <a
            href="#contact"
            className="btn-secondary text-white font-semibold px-8 py-4 !rounded-button inline-block whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
