
import { useFadeIn } from "../hooks/useFadeIn";
import { assets } from "../assets/assets";

export const AboutMe = () => {
  return (
    <section className="bg-white text-gray-800 font-sans">

      {/* ✅ Hero Section */}
      <section
        className="relative h-[80vh] overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.profile})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-indigo-900/60" />

        {/* Text Group with Fade In */}
        <div
          ref={heroText.ref}
          className={`fixed w-full h-[inherit] flex flex-col justify-center items-center text-white text-center px-4 ${heroText.fadeInClass}`}
          style={heroText.style}
        >
          <h1 className="text-4xl font-bold mb-4">Meet Dr. Pamela Russell</h1>
          <p className="text-lg max-w-2xl">
            Guiding individuals and organizations toward clarity, growth, and purpose.
          </p>
          <a
            href="/contact"
            className="mt-6 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition duration-300 transform hover:scale-105"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Bio Section */}
      <section
        className={`relative bg-white py-16`}
      >
        <div ref={bio.ref} className={`max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center px-6 ${bio.fadeInClass}`}>
          <img
            src="/images/dr-pam-headshot.jpg"
            alt="Dr. Pam Russell"
            className="w-64 h-auto rounded-2xl shadow-xl"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-gray-700 leading-relaxed">
              I’m Dr. Pamela Russell — a third-generation preacher, pastoral counselor,
              certified life coach, and business consultant with a passion for
              purpose-driven transformation. As the founder of Pamela Russell Ministries and A God Send, Inc., my life’s work is dedicated to helping individuals and organizations grow spiritually, emotionally, and strategically.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section
        ref={credentials.ref}
        className={`bg-gray-50 py-12 ${credentials.fadeInClass}`}
        style={credentials.style}
      >
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-6">My Qualifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "🎓 B.A. in Chemistry & Biblical Studies",
              "🎓 M.A. in Organizational Development",
              "🎓 TH.D. in Counseling & Leadership",
              "🏅 Certified Life Coach",
              "⚓ U.S. Navy Lieutenant (Ret.)",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-white shadow rounded-lg transition-transform hover:scale-105 duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        ref={mission.ref}
        className={`bg-fuchsia-50 py-16 text-center px-6 ${mission.fadeInClass}`}
        style={mission.style}
      >
        <h2 className="text-2xl font-bold mb-4">My Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          To empower individuals and businesses to overcome challenges, embrace their purpose, and walk in clarity, confidence, and spiritual wholeness.
        </p>
      </section>

      {/* Timeline */}
      <section
        ref={journey.ref}
        className={`bg-white py-16 px-6 ${journey.fadeInClass}`}
        style={journey.style}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">My Journey</h2>
          <div className="space-y-6">
            {[
              { label: "⏳ Early Life", text: "Raised in a family of faith leaders, I felt a strong calling to help others from a young age..." },
              { label: "📚 Education", text: "My academic journey led me to degrees in chemistry, theology, and organizational development..." },
              { label: "💼 Professional Work", text: "I've served as a counselor, military officer, nonprofit leader, and consultant for over 25 years..." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 transition-opacity duration-500">
                <span className="text-indigo-600 font-bold">{item.label}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={cta.ref}
        className={`bg-indigo-900 text-white py-12 text-center px-6 ${cta.fadeInClass}`}
        style={cta.style}
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="mb-6">
          Let’s talk about how I can help you or your organization grow.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition duration-300 transform hover:scale-105"
        >
          Book a Consultation
        </a>
      </section>
    </section>
  );
};
