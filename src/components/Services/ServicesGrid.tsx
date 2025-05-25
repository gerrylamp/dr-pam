import { useFadeIn } from "../../hooks/useFadeIn";

export const ServicesGrid = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        <>
            {/* <!-- Services Grid --> */}
            <section className="py-24 px-6 bg-white z-[1]">
                <div ref={ref} className={`max-w-6xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <div className="max-w-6xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Our Services</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">Serving purpose-driven individuals, ministries, and organizations with faith-centered, results-oriented services.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
                        {/* <!-- Business Services --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6M5 8h14M4 6h16a1 1 0 011 1v13a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Business Services</h3>
                            <p className="text-gray-700 text-sm mb-4">Strategic guidance for entrepreneurs and organizations seeking growth with clarity and purpose.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>

                        {/* <!-- Personal Development --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Personal Development</h3>
                            <p className="text-gray-700 text-sm mb-4">Tools and strategies to help you become your best self — emotionally, spiritually, and practically.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>

                        {/* <!-- Coaching --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" stroke-width="1.5" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v5l3 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Coaching</h3>
                            <p className="text-gray-700 text-sm mb-4">One-on-one sessions to help clarify vision, set goals, and take action with confidence and faith.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>

                        {/* <!-- Pastoral Counseling --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Pastoral Counseling</h3>
                            <p className="text-gray-700 text-sm mb-4">Faith-based emotional and spiritual support for individuals navigating grief, anxiety, or life transitions.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>

                        {/* <!-- Mediation --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6M5 4h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Mediation</h3>
                            <p className="text-gray-700 text-sm mb-4">Neutral, faith-guided resolution for individuals or teams in conflict — promoting understanding and peace.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>

                        {/* <!-- Anger Management --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke-width="1.5" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 9h.01M9 9h.01M8 15c1.5-1 6-1 8 0" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Anger Management</h3>
                            <p className="text-gray-700 text-sm mb-4">Christ-centered programs to help you manage emotional responses and build healthy communication patterns.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>

                        {/* <!-- Publishing --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Publishing</h3>
                            <p className="text-gray-700 text-sm mb-4">Support for aspiring authors — from manuscript coaching to publishing and promotion.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>

                        {/* <!-- Notary --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 4.5h13.5v15H5.25z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Notary Services</h3>
                            <p className="text-gray-700 text-sm mb-4">Quick, local notarization with professionalism and integrity.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>

                        {/* <!-- Training --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Training</h3>
                            <p className="text-gray-700 text-sm mb-4">Leadership, ministry, and organizational development sessions tailored for transformation.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>

                        {/* <!-- Spiritual Connection --> */}
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition text-center">
                            <div className="mb-4 flex justify-center">
                                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke-width="1.5" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Spiritual Connection</h3>
                            <p className="text-gray-700 text-sm mb-4">Helping you reconnect with your spiritual walk, prayer life, and divine purpose through guided sessions.</p>
                            <a href="/service-single-page" className="text-indigo-600 font-medium hover:underline">Learn more →</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}