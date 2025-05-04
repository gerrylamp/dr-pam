import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';
export const Contact = () => {
  const {
    ref: sectionRef,
    fadeInClass: sectionFade
  } = useFadeIn(0.1);
  const {
    ref: formRef,
    fadeInClass: formFade
  } = useFadeIn(0.1, 300);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };
  const contactInfo = [{
    icon: <Phone size={20} className="text-[#0201BF]" />,
    title: 'Phone',
    details: '(555) 123-4567',
    action: 'tel:+15551234567'
  }, {
    icon: <Mail size={20} className="text-[#6D38FF]" />,
    title: 'Email',
    details: 'contact@drpamrussell.com',
    action: 'mailto:contact@drpamrussell.com'
  }, {
    icon: <MapPin size={20} className="text-[#D11DD9]" />,
    title: 'Address',
    details: '123 Professional Plaza, Suite 101, Anytown, USA',
    action: '#'
  }, {
    icon: <Clock size={20} className="text-[#50F2FD]" />,
    title: 'Hours',
    details: 'Monday-Friday: 9AM-5PM',
    action: '#'
  }];
  return <section id="contact" className="py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${sectionFade}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0201BF] to-[#D11DD9] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to schedule an appointment? Reach out and
            I'll be happy to help.
          </p>
        </div>
        <div ref={formRef} className={`grid md:grid-cols-5 gap-8 ${formFade}`}>
          <div className="md:col-span-2 space-y-6">
            {contactInfo.map((item, index) => <a key={index} href={item.action} className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </div>
              </a>)}
          </div>
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              {submitted ? <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                  Thank you for your message! I'll get back to you as soon as
                  possible.
                </div> : <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D38FF] focus:border-transparent outline-none transition-all" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D38FF] focus:border-transparent outline-none transition-all" required />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D38FF] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D38FF] focus:border-transparent outline-none transition-all" required></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className={`bg-[#0201BF] hover:bg-[#6D38FF] text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                    {isSubmitting ? 'Sending...' : <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>}
                  </button>
                </form>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};