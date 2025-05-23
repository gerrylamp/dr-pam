import { Contact } from "../components/Contact";
import { Testimonials } from "../components/Testimonials";
import { assets } from "../assets/assets";
import { useFadeIn } from "../hooks/useFadeIn";

export const WhyChoose = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        // <div className="h-96 flex items-center container mx-auto">
        //     <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0201BF] to-[#6D38FF] bg-clip-text text-transparent">Why Choose</h1>
        // </div>
        <>
            {/* Hero Section */}
            <section className="bg-indigo-900 text-white text-center">
                <div
                className="relative h-[80vh] overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${assets.bg_whyChooseMe})`,
                }}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-indigo-900/80" />

                    <div
                        ref={ref}
                        className={`fixed h-[inherit] inset-0 flex flex-col justify-center items-center text-white text-center px-4 ${fadeInClass}`}
                        style={style}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose Dr. Pamela Russell?</h1>
                        <p className="text-lg max-w-3xl mx-auto">
                        A trusted guide with decades of experience, a heart for purpose, and a mind for strategy. I’m here to empower your personal or organizational breakthrough.
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- Core Value Cards --> */}
            <section className="bg-white py-24 px-6 z-[1] sticky top-0">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">What Sets Me Apart</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-linear-gradient p-6 border rounded-xl shadow transition-transform duration-300 hover:scale-105" >
                            <h3 className="text-primary text-xl font-semibold mb-2">25+ Years of Experience</h3>
                            <p className="text-black">A seasoned voice in business, counseling, ministry, and coaching. I've walked the journey — and I walk it with you.</p>
                        </div>

                        <div className="bg-linear-gradient p-6 border rounded-xl shadow transition-transform duration-300 hover:scale-105" >
                            <h3 className="text-primary text-xl font-semibold mb-2">Purpose-Driven Process</h3>
                            <p className="text-black">Every client gets a tailored strategy — rooted in faith, designed for action, and aligned with your calling.</p>
                        </div>

                        <div className="bg-linear-gradient p-6 border rounded-xl shadow transition-transform duration-300 hover:scale-105">
                            <h3 className="text-primary text-xl font-semibold mb-2">Support with Integrity</h3>
                            <p className="text-black">I don’t promise everything. I promise truth, wisdom, and real help — or I’ll point you to someone who can.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Unique Approach Section --> */}
            <section className="bg-fuchsia-50 py-20 px-6 text-center z-[1] sticky top-0" >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">How I Work</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        I don’t use a cookie-cutter model. Every person and every organization is different — and I listen before I lead.
                    </p>
                    <ul className="text-left list-disc list-inside text-gray-700 space-y-3 max-w-xl mx-auto">
                        <li>In-depth consultation and honest discovery</li>
                        <li>Spiritually grounded, ethically sound guidance</li>
                        <li>Custom plans built around your needs — not mine</li>
                        <li>Continued support, not just a one-time session</li>
                    </ul>
                </div>
            </section>

            {/* <!-- Differentiator Section --> */}
            <section className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-20 text-center px-6 z-[1] sticky top-0">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Just Coaching — It's a Calling</h2>
                    <p className="max-w-2xl mx-auto text-lg">
                    Some professionals offer services. I offer transformation. Rooted in experience, guided by faith, and built on results — my work helps you move forward with clarity and confidence.
                    </p>
                </div>
            </section>

            <section className="z-[1] sticky top-0 bg-white">
                <Testimonials />
            </section>

            {/* <!-- Final CTA --> */}
            <section className="bg-indigo-900 text-white text-center py-24 px-6 z-[1] sticky top-0" >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Something Purposeful</h2>
                <p className="mb-6">Are you ready to step into clarity and growth? Let’s begin your journey.</p>
                <a href="#contact" className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition duration-300 transform hover:scale-105">
                Schedule a Consultation
                </a>
            </section>
            
            <Contact />
        </>
    )
}