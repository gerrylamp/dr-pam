import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';
export const About = () => {
  const {
    ref: sectionRef,
    fadeInClass: sectionFade
  } = useFadeIn(0.1);
  const {
    ref: textRef,
    fadeInClass: textFade
  } = useFadeIn(0.1, 200);
  const {
    ref: cardsRef,
    fadeInClass: cardsFade
  } = useFadeIn(0.1, 400);
  const highlights = [{
    icon: <Award size={24} className="text-[#0201BF]" />,
    title: 'Expert Credentials',
    description: 'Years of specialized education and professional experience in the field.'
  }, {
    icon: <Users size={24} className="text-[#6D38FF]" />,
    title: 'Client-Centered Approach',
    description: 'Personalized care tailored to your unique needs and goals.'
  }, {
    icon: <BookOpen size={24} className="text-[#D11DD9]" />,
    title: 'Evidence-Based Methods',
    description: 'Using proven techniques backed by the latest research.'
  }];
  return <section id="about" className="py-16 md:py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${sectionFade}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Dr. Pam Russell
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0201BF] to-[#D11DD9] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className={textFade}>
            <p className="text-lg text-gray-700 mb-6">
              Dr. Pam Russell brings over 20 years of experience to her
              practice, combining academic excellence with a compassionate
              approach to patient care.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a doctorate from a prestigious institution and extensive
              training in advanced techniques, Dr. Russell has dedicated her
              career to helping individuals achieve their optimal health and
              wellness.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Her unique methodology integrates traditional practices with
              innovative approaches, ensuring each client receives the most
              effective care tailored to their specific needs.
            </p>
            <div className="mt-8">
              <a href="#contact" className="bg-[#6D38FF] hover:bg-[#0201BF] text-white px-6 py-3 rounded-full transition-colors duration-300 inline-block">
                Schedule a Consultation
              </a>
            </div>
          </div>
          <div ref={cardsRef} className={`space-y-6 ${cardsFade}`}>
            {highlights.map((item, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex transform hover:scale-105 hover:-translate-y-1">
                <div className="mr-4 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};