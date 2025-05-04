import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: <Facebook size={20} />,
    href: '#'
  }, {
    icon: <Twitter size={20} />,
    href: '#'
  }, {
    icon: <Instagram size={20} />,
    href: '#'
  }, {
    icon: <Linkedin size={20} />,
    href: '#'
  }];
  const quickLinks = [{
    name: 'Home',
    href: '#'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }, {
    name: 'Contact',
    href: '#contact'
  }, {
    name: 'Privacy Policy',
    href: '#'
  }, {
    name: 'Terms of Service',
    href: '#'
  }];
  return <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#50F2FD] to-[#D11DD9] bg-clip-text text-transparent mb-4">
              Dr. Pam Russell
            </h3>
            <p className="mb-4 max-w-md">
              Dedicated to providing exceptional care and personalized solutions
              to help you achieve your optimal health and wellness goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => <a key={index} href={link.href} className="bg-gray-800 hover:bg-[#0201BF] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  {link.icon}
                </a>)}
            </div>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link, index) => <li key={index}>
                  <a href={link.href} className="hover:text-[#50F2FD] transition-colors duration-200">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {quickLinks.slice(4).map((link, index) => <li key={index}>
                  <a href={link.href} className="hover:text-[#50F2FD] transition-colors duration-200">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Dr. Pam Russell. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed with <span className="text-[#D11DD9]">♥</span> for
            professionals
          </p>
        </div>
      </div>
    </footer>;
};