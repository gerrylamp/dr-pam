import { useFadeIn } from "../../hooks/useFadeIn";

export const Prices = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Pricing / CTA --> */}
            <section className="bg-fuchsia-50 py-24 text-center px-6 z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">How to Get Started</h2>
                    <p className="text-gray-700 max-w-xl mx-auto mb-6">Coaching is a 1-on-1 experience. You can book a single session or a 4-session package depending on your needs.</p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <div className="bg-white p-6 border rounded-xl shadow w-72">
                            <h3 className="text-lg font-bold text-indigo-700 mb-2">Single Session</h3>
                            <p className="text-gray-600 mb-4">1 hour on Zoom with action plan</p>
                            <p className="text-fuchsia-700 font-bold text-xl mb-4">$95 USD</p>
                            <a href="/contact" className="inline-block bg-indigo-900 text-white px-5 py-2 rounded hover:bg-indigo-800">Book Now</a>
                        </div>
                        <div className="bg-white p-6 border rounded-xl shadow w-72">
                            <h3 className="text-lg font-bold text-indigo-700 mb-2">4-Session Package</h3>
                            <p className="text-gray-600 mb-4">Save 20% – great for deeper breakthroughs</p>
                            <p className="text-fuchsia-700 font-bold text-xl mb-4">$320 USD</p>
                            <a href="/contact" className="inline-block bg-indigo-900 text-white px-5 py-2 rounded hover:bg-indigo-800">Book Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}