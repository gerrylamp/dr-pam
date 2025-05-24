import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useFadeIn } from "../hooks/useFadeIn";
import { Contact } from "../components/Contact";

export const FAQ = () => {
  const { ref, fadeInClass, style } = useFadeIn(0.1, 0);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 0 = first item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:   
        "I offer life coaching, business consulting, spiritual counseling, publishing services, mediation, and more. Each service is personalized to your goals.",
    },
    {
      question: "Are sessions available online?",
      answer:
        "Yes, sessions can be conducted via Zoom or phone depending on your location and preference.",
    },
    {
      question: "Do you work with organizations as well as individuals?",
      answer:
        "Absolutely. I provide consulting and development services for nonprofits, churches, and businesses looking to grow strategically and spiritually.",
    },
    {
      question: "How can I book a session?",
      answer:
        "You can visit the Contact page or click “Book a Consultation” anywhere on the site to schedule your first session.",
    },
    {
      question: "What’s your faith background?",
      answer:
        "I’m a third-generation preacher and ordained minister with a deep commitment to biblical principles and holistic development — spiritually, personally, and professionally.",
    },
  ];

  return (
    <>
        {/* Hero Section */}
        <section className="bg-indigo-900 text-white text-center">
            <div
            className="relative h-[80vh] overflow-hidden bg-fixed bg-cover [background-position:0_-250px] bg-no-repeat"
            style={{
                backgroundImage: `url(${assets.faq_bg})`,
            }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-indigo-900/80" />

                <div
                    ref={ref}
                    className={`fixed h-[inherit] inset-0 flex flex-col justify-center items-center text-white text-center px-4 ${fadeInClass}`}
                    style={style}
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        Answers to common questions. Still need help? Reach out anytime.
                    </p>
                </div>
            </div>
        </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 z-[1] sticky top-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">
            General Questions
          </h2>

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
                <div key={index} className="mb-6 border-b pb-4">
                <button
                    onClick={() => toggleFAQ(index)}
                    className="faq-toggle w-full text-left font-semibold text-lg flex justify-between items-center"
                >
                    {faq.question}
                    <span className="toggle-icon text-xl transition">{isOpen ? "–" : "+"}</span>
                </button>

                <div
                    className={`faq-answer text-gray-700 transition-all duration-500 ease-in-out overflow-hidden`}
                    style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    paddingTop: isOpen ? "0.5rem" : "0",
                    opacity: isOpen ? 1 : 0,
                    }}
                >
                    {faq.answer}
                </div>
                </div>
            );
            })}
        </div>
      </section>

        {/* <!-- Still Have Questions CTA --> */}
        <section className="bg-gray-50 py-16 text-center px-6 z-[1] sticky top-0" >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Still have questions?</h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">I’m here to help. Whether you’re curious about coaching, need help navigating life transitions, or want guidance for your business, let’s talk.</p>
            <a href="#contact" className="inline-block px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full font-semibold transition">
            Contact Me
            </a>
        </section>

        <Contact />
    </>
  );
};
