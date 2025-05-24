import { Contact } from "../components/Contact";
import { Testimonials } from "../components/Testimonials";
import { assets } from "../assets/assets";
import { useFadeIn } from "../hooks/useFadeIn";
import { Hero } from "../components/WhyChoose/Hero";
import { CoreValuesCard } from "../components/WhyChoose/CoreValuesCard";
import { UniqueApproach } from "../components/WhyChoose/UniqueApproach";
import { Differentiator } from "../components/WhyChoose/Differentiator";
import { CTA } from "../components/WhyChoose/CTA";

export const WhyChoose = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        // <div className="h-96 flex items-center container mx-auto">
        //     <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0201BF] to-[#6D38FF] bg-clip-text text-transparent">Why Choose</h1>
        // </div>
        <>
            <Hero />
            <CoreValuesCard />
            <UniqueApproach />
            <Differentiator />
            <section className="z-[1] sticky top-0 bg-white">
                <Testimonials />
            </section>
            <CTA />
            <Contact />
        </>
    )
}