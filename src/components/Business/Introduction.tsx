import { useFadeIn } from "../../hooks/useFadeIn";

export const Introduction = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Introduction --> */}
            <section className="py-24 px-6 bg-white z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <div className="max-w-5xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Your Business, Your Mission</h2>
                        <p className="text-gray-600 text-lg">I work with purpose-driven professionals to build stronger organizations — guided by vision, built with structure, and sustained by values that align with faith and excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Startup Consulting</h3>
                            <p className="text-gray-600">Helping first-time founders set structure, define goals, and establish kingdom-minded strategy.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Organizational Planning</h3>
                            <p className="text-gray-600">Support with creating mission-aligned systems, SOPs, and workflows for operational clarity.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Executive Coaching</h3>
                            <p className="text-gray-600">1-on-1 strategy sessions for CEOs, directors, and team leads to lead better and with balance.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Faith-Driven Leadership</h3>
                            <p className="text-gray-600">Aligning biblical values with boardroom strategy so your leadership is anchored in purpose.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Team Culture Consulting</h3>
                            <p className="text-gray-600">Guidance for improving morale, trust, and accountability across departments and teams.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Strategic Retreats & Planning</h3>
                            <p className="text-gray-600">In-person or virtual strategy days for leaders who want alignment, vision, and execution tools.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}