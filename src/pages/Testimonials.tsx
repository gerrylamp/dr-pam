import { Contact } from "../components/Contact";
import { CTA } from "../components/Testimonials/CTA";
import { Hero } from "../components/Testimonials/Hero";
import { TestimonialsGrid } from "../components/Testimonials/TestimonialsGrid";


export const Testimonials = () => {
    return (
        <>
            <Hero />
            <TestimonialsGrid />
            <CTA />
            <Contact />
        </>
    );
};
