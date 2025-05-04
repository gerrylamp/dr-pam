import { About } from "../components/About";
import { Blogs } from "../components/Blogs";
import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import Services from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact"; // ✅ Correct import

export const Home = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Blogs />
      <CTA />
      <Contact />
    </main>
  );
};
