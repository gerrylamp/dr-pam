import { Contact } from "../components/Contact";
import { useFadeIn } from "../hooks/useFadeIn";

export const Testimonials = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative h-[80vh] bg-fixed bg-no-repeat bg-cover bg-center flex items-center justify-center text-white text-center px-6"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.5), rgba(29,78,216,0.7)), url('https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg')",
                }}
            >
                <div ref={ref} className={`fixed ${fadeInClass}`} style={style}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Clients Are Saying</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Real stories of transformation, growth, and clarity through faith, strategy, and support.
                    </p>
                </div>
            </section>

            {/* <!-- Testimonials Grid --> */}
            <section className="py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-6xl mx-auto ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent" >Praise from Purpose-Driven Clients</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Testimonial Card --> */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition" >
                            <p className="italic mb-4">“Dr. Pam helped me rediscover my purpose and launch my coaching business with confidence.”</p>
                            <p className="font-semibold text-fuchsia-700">— Angela T., Life Coach</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"  >
                            <p className="italic mb-4">“Through her guidance, I built a nonprofit from scratch. Her clarity and spirit are unmatched.”</p>
                            <p className="font-semibold text-fuchsia-700">— Marcus R., Nonprofit Founder</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"  >
                            <p className="italic mb-4">“The spiritual coaching was life-changing. I left with peace, vision, and a plan.”</p>
                            <p className="font-semibold text-fuchsia-700">— Denise F., Pastor</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition" >
                            <p className="italic mb-4">“Her business insight and faith-based leadership helped us restructure our ministry team with success.”</p>
                            <p className="font-semibold text-fuchsia-700">— Harold W., Church Administrator</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"  >
                            <p className="italic mb-4">“I felt heard, supported, and empowered. Dr. Pam's approach is one-of-a-kind.”</p>
                            <p className="font-semibold text-fuchsia-700">— Keisha B., Entrepreneur</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"  >
                            <p className="italic mb-4">“My team now operates with unity and direction thanks to her group strategy sessions.”</p>
                            <p className="font-semibold text-fuchsia-700">— Laura M., Executive Director</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Call to Action --> */}
            <section className="bg-indigo-900 text-white py-24 text-center px-6 z-[1] sticky top-0" >
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">You Could Be the Next Success Story</h2>
                    <p className="mb-6 max-w-xl mx-auto">If you're ready to move forward with clarity, faith, and strategy — let's connect and start your journey.</p>
                    <a href="#contact" className="inline-block px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition">
                    Book a Consultation
                    </a>
                </div>
            </section>

            <Contact />
        </>
    );
};
