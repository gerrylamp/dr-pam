import { useFadeIn } from "../../hooks/useFadeIn";

export const CoachingBenefits = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        <>
            {/* <!-- Coaching Benefits --> */}
            <section className="py-16 px-6 bg-white">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <div className="max-w-5xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Is Coaching Right for You?</h2>
                        <p className="text-gray-600 text-lg">Coaching is for anyone ready to grow personally, spiritually, or professionally. I help you move forward — with purpose.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Clarity & Direction</h3>
                            <p className="text-gray-600">Overcome confusion and set clear, aligned goals for your life or calling.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Faith-Centered Growth</h3>
                            <p className="text-gray-600">Grow with coaching rooted in biblical truth and spiritual discernment.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Leadership Development</h3>
                            <p className="text-gray-600">Become a more effective, emotionally aware, and purpose-driven leader.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}