import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
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
  }];
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0201BF] to-[#6D38FF] bg-clip-text text-transparent">
              Dr. Pam Russell
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-700 hover:text-[#D11DD9] transition-colors duration-200 font-medium">
                  {link.name}
                </a>)}
              <a href="#contact" className="bg-[#0201BF] hover:bg-[#6D38FF] text-white px-6 py-2 rounded-full transition-colors duration-300">
                Book Now
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navLinks.map(link => <a key={link.name} href={link.href} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>)}
            <a href="#contact" className="block w-full text-center bg-[#0201BF] hover:bg-[#6D38FF] text-white px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              Book Now
            </a>
          </div>
        </div>}
    </nav>;
};