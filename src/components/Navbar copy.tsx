import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, ChevronDown } from 'lucide-react';
import { assets } from "../assets/assets";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-50 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href='/' className="text-3xl !font-bold bg-gradient-to-r from-[#0201BF] to-[#6D38FF] bg-clip-text text-transparent courgette-regular">
            <img className='w-24' src={assets.logo} alt="logo" loading='lazy' />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className={`${isScrolled ? 'text-gray-700' : 'text-gray-50'} hover:text-[#D11DD9] font-bold transition duration-300`}>Home</a>
            {/* About Dropdown */}
            <div className="relative group">
              <a href='/about' className={`${isScrolled ? 'text-gray-700' : 'text-gray-50'} hover:text-[#D11DD9] font-bold flex items-center gap-1 transition duration-300`}>
                About
                <ChevronDown size={16} />
              </a>

              {/* First-level dropdown */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a href="/about" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">About me</a>
                <a href="/why-choose" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">Why choose</a>
                <a href="/faq" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">FAQ</a>
                <a href="/testimonials" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">Testimonials</a>
                <a href="/clients" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">Clients</a>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <a href='/services' className={`${isScrolled ? 'text-gray-700' : 'text-gray-50'} hover:text-[#D11DD9] font-bold flex items-center gap-1 transition duration-300`}>
                Our Services
                <ChevronDown size={16} />
              </a>

              {/* First-level dropdown */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a href="/coaching" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">Coaching</a>
                <a href="/ministry" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">Ministry</a>
                <a href="/store" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">Store</a>
                <a href="/counseling" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">Counseling</a>

                {/* Nested Dropdown */}
                {/* <div className="relative group/nested">
                  <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition duration-200">
                    Wellness Coaching
                    <ChevronDown size={14} />
                  </div>

                  <div className="absolute top-0 left-full ml-1 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 z-50">
                    <a href="#nutrition" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">Nutrition Plans</a>
                    <a href="#mindfulness" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">Mindfulness</a>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Business Dropdown */}
            <div className="relative group">
              <a href='/business' className={`${isScrolled ? 'text-gray-700' : 'text-gray-50'} hover:text-[#D11DD9] font-bold flex items-center gap-1 transition duration-300`}>
                Business
                <ChevronDown size={16} />
              </a>

              {/* First-level dropdown */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a href="/non-profit" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">Non-Profit</a>
                <a href="/profit" className="block font-bold px-4 py-2 text-gray-700 hover:bg-[#0201BF] hover:text-white transition duration-500">Profit</a>
              </div>
            </div>

            <a href="/contact" className={`${isScrolled ? 'text-gray-700' : 'text-gray-50'} hover:text-[#D11DD9] font-bold transition duration-300`}>Contact Us</a>
            <a href="/contact" className="bg-[#0201BF] hover:bg-[#6D38FF] text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 transition duration-300">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-2">
          {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-gray-700 hover:text-[#D11DD9] font-bold transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center bg-[#0201BF] hover:bg-[#6D38FF] text-white px-4 py-2 rounded-md transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};
