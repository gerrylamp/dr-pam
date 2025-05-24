import { useEffect, useState } from "react";
import { useFadeIn } from "../../hooks/useFadeIn";

export const FAQSection = () => {
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

    return(
        <>
            {/* FAQ Section */}
            <section className="py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-4xl mx-auto ${fadeInClass}`} style={style}>
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
        
        </>
    )
}