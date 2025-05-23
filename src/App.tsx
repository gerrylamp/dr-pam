import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'; // Home includes Hero, About, etc.
import { Blog } from './pages/Blog';
import { Services } from './pages/Services';
import { AboutMe } from './pages/About';
import { Testimonials } from './pages/Testimonials';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { BlogSinglePage } from './pages/BlogSinglePage';
import { WhyChoose } from './pages/WhyChoose';
import { FAQ } from './pages/FAQ';
import { Clients } from './pages/Clients';
import { Coaching } from './pages/Coaching';
import { Ministry } from './pages/Ministry';
import { Store } from './pages/Store';
import { Counseling } from './pages/Counseling';
import { Business } from './pages/Business';
import { NonProfit } from './pages/NonProfit';
import { Profit } from './pages/Profit';

export function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/why-choose" element={<WhyChoose />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/store" element={<Store />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/business" element={<Business />} />
        <Route path="/non-profit" element={<NonProfit />} />
        <Route path="/profit" element={<Profit />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/blog-single-page" element={<BlogSinglePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
