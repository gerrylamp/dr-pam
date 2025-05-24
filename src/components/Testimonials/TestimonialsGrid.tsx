import { useFadeIn } from "../../hooks/useFadeIn";

export const TestimonialsGrid = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);
    
    return(
        <>
            {/* <!-- Testimonials Grid --> */}
            <section className="py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-6xl mx-auto ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent" >Praise from Purpose-Driven Clients</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Testimonial Card --> */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center" >
                            <img
                                src="https://randomuser.me/api/portraits/women/59.jpg"
                                alt="Angela T."
                                className="w-16 h-16 mx-auto rounded-full object-cover mb-4 border-2 border-fuchsia-600"
                            />
                            <p className="italic mb-4">“Dr. Pam helped me rediscover my purpose and launch my coaching business with confidence.”</p>
                            <p className="font-semibold text-fuchsia-700">— Angela T., Life Coach</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center"  >
                            <img
                                src="https://randomuser.me/api/portraits/men/64.jpg"
                                alt="Angela T."
                                className="w-16 h-16 mx-auto rounded-full object-cover mb-4 border-2 border-fuchsia-600"
                            />
                            <p className="italic mb-4">“Through her guidance, I built a nonprofit from scratch. Her clarity and spirit are unmatched.”</p>
                            <p className="font-semibold text-fuchsia-700">— Marcus R., Nonprofit Founder</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center"  >
                            <img
                                src="https://randomuser.me/api/portraits/men/21.jpg"
                                alt="Angela T."
                                className="w-16 h-16 mx-auto rounded-full object-cover mb-4 border-2 border-fuchsia-600"
                            />
                            <p className="italic mb-4">“The spiritual coaching was life-changing. I left with peace, vision, and a plan.”</p>
                            <p className="font-semibold text-fuchsia-700">— Denise F., Pastor</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center" >
                            <img
                                src="https://randomuser.me/api/portraits/men/37.jpg"
                                alt="Angela T."
                                className="w-16 h-16 mx-auto rounded-full object-cover mb-4 border-2 border-fuchsia-600"
                            />
                            <p className="italic mb-4">“Her business insight and faith-based leadership helped us restructure our ministry team with success.”</p>
                            <p className="font-semibold text-fuchsia-700">— Harold W., Church Administrator</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center"  >
                            <img
                                src="https://randomuser.me/api/portraits/men/62.jpg"
                                alt="Angela T."
                                className="w-16 h-16 mx-auto rounded-full object-cover mb-4 border-2 border-fuchsia-600"
                            />
                            <p className="italic mb-4">“I felt heard, supported, and empowered. Dr. Pam's approach is one-of-a-kind.”</p>
                            <p className="font-semibold text-fuchsia-700">— Keisha B., Entrepreneur</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center"  >
                            <img
                                src="https://randomuser.me/api/portraits/women/7.jpg"
                                alt="Angela T."
                                className="w-16 h-16 mx-auto rounded-full object-cover mb-4 border-2 border-fuchsia-600"
                            />
                            <p className="italic mb-4">“My team now operates with unity and direction thanks to her group strategy sessions.”</p>
                            <p className="font-semibold text-fuchsia-700">— Laura M., Executive Director</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}