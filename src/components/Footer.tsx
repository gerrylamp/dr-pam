import { useEffect, useState } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer */}
      <footer className="gradient-bg py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <a href="/" className="text-3xl font-['Pacifico'] text-white mb-4 inline-block">
                Dr. Pam Russell
              </a>
              <p className="text-white/80 mb-6">
                Professional coaching and consulting services to help individuals and organizations achieve their full potential.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/drparussell/" className="social-icon w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20">
                  <i className="ri-facebook-fill" />
                </a>
                <a href="https://twitter.com/DrPaRussell" className="social-icon w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20">
                  <i className="ri-twitter-fill" />
                </a>
                <a href="https://www.instagram.com/drparussell/" className="social-icon w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20">
                  <i className="ri-instagram-fill" />
                </a>
                <a href="https://www.linkedin.com/company/54156449/admin/" className="social-icon w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20">
                  <i className="ri-linkedin-fill" />
                </a>
                <a href="https://www.youtube.com/channel/UCxmCR21nRpVrT2X-nTOlPKg" className="social-icon w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20">
                  <i className="ri-youtube-fill" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
                <li><a href="/about" className="text-white/80 hover:text-white transition-colors">About</a></li>
                <li><a href="/testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Executive Coaching</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Organizational Consulting</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Life & Career Coaching</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Workshop Facilitation</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Wellness Coaching</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Group Coaching Programs</a></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Subscribe</h4>
              <p className="text-white/80 mb-4">
                Join my newsletter for insights, tips, and resources on leadership and personal development.
              </p>
              <form>
                <div className="flex mb-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-l-lg border-none focus:outline-none text-gray-800"
                  />
                  <button type="submit" className="bg-secondary px-4 py-3 rounded-r-lg text-white">
                    <i className="ri-send-plane-fill" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 mb-4 md:mb-0">© 2025 Dr. Pam Russell. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="/terms-of-service" className="text-white/80 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="/cookie-policy" className="text-white/80 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center transition-all z-50 ${
          isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <i className="ri-arrow-up-line ri-lg" />
      </button>
    </>
  );
};
