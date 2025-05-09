import { useFadeIn } from "../hooks/useFadeIn";
import { useParallax } from "../hooks/useParallax";

export const Contact = () => {
  const headingFade = useFadeIn(0.2, 0);
  const infoFade = useFadeIn(0.2, 100);
  const formFade = useFadeIn(0.2, 200);
  const videoFade = useFadeIn(0.2, 200);

  const { x, y } = useParallax(0.02);

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      {/* Background Blur Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute right-0 top-0 w-1/2 h-1/2 bg-[#50F2FD] opacity-10 rounded-full blur-3xl"
          style={{
            transform: `translate(${x * 2}px, ${y * 2}px)`,
          }}
        />
        <div
          className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#D11DD9] opacity-10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-x * 2}px, ${-y * 2}px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div
          ref={headingFade.ref}
          className={`text-center mb-16 ${headingFade.fadeInClass}`}
          style={headingFade.style}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your journey? Reach out to schedule a consultation or learn more about my services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            ref={formFade.ref}
            className={`bg-white p-8 rounded-lg shadow-md ${formFade.fadeInClass}`}
            style={formFade.style}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-0"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-0"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-0"
                  placeholder="Message subject"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                <div className="relative">
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-0 appearance-none pr-8"
                    defaultValue=""
                  >
                    <option value="">Select a service</option>
                    <option value="executive-coaching">Executive Coaching</option>
                    <option value="organizational-consulting">Organizational Consulting</option>
                    <option value="life-career-coaching">Life & Career Coaching</option>
                    <option value="workshop-facilitation">Workshop Facilitation</option>
                    <option value="wellness-coaching">Wellness Coaching</option>
                    <option value="group-coaching">Group Coaching Programs</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-0"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="custom-checkbox" required/>
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the privacy policy and terms of service
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary text-white font-semibold px-8 py-4 w-full !rounded-button whitespace-nowrap hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div ref={videoFade.ref} className={`z-10 ${videoFade.fadeInClass}`} style={videoFade.style}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5_lIAaMPX9k?si=yhFvSba5ZdzCY-qL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        {/* Contact Information */}
        <div
            ref={infoFade.ref}
            className={`flex mt-8 gap-40 items-center bg-white p-8 rounded-lg shadow-md ${infoFade.fadeInClass}`}
            style={infoFade.style}
        >
            <div className="space-y-6 flex-1">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              {/* Location */}
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                  <i className="ri-map-pin-line text-primary"></i>
                </div>
                <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md">
                  <h4 className="font-medium text-gray-900">Office Location</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9107550020026!2d-122.39651502369506!3d37.79213121115926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580645cffb28d%3A0x45b3070d055523f8!2sThe%20Leadership%20Institute!5e0!3m2!1sen!2sph!4v1746342876525!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                    <i className="ri-mail-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:contact@drpamrussell.com" className="text-gray-600">contact@drpamrussell.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                    <i className="ri-phone-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <a href="tel:(904) 830 0737" className="text-gray-600">(904) 830 0737</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                    <i className="ri-time-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 7:00 AM - 7:00 PM<br />
                      Virtual appointments available
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Socials */}
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {[
                    { name: "facebook", url: "https://www.facebook.com/drparussell/" },
                    { name: "twitter", url: "https://twitter.com/DrPaRussell" },
                    { name: "instagram", url: "https://www.instagram.com/drparussell/" },
                    { name: "linkedin", url: "https://www.linkedin.com/company/54156449/admin/" },
                    { name: "youtube", url: "https://www.youtube.com/channel/UCxmCR21nRpVrT2X-nTOlPKg" },
                  ].map(({ name, url }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full hover:shadow-md transition-all duration-300"
                    >
                      <i className={`ri-${name}-fill`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
