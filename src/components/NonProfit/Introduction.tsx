import { useFadeIn } from "../../hooks/useFadeIn";

export const Introduction = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Introduction --> */}
            <section className="py-24 px-6 bg-white z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <div className="max-w-5xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Build Your Mission. Lead with Purpose.</h2>
                        <p className="text-gray-600 text-lg">From formation to funding, I walk alongside nonprofit leaders to strengthen impact, clarify operations, and lead with faith and wisdom.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Formation & Launch</h3>
                            <p className="text-gray-600">501(c)(3) consulting, board development, and mission/vision planning for new organizations.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Board & Governance</h3>
                            <p className="text-gray-600">Strengthen leadership structure, define roles, and equip boards with tools for sustainability and integrity.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Fundraising Strategy</h3>
                            <p className="text-gray-600">Develop fundraising campaigns, donor strategies, and systems that align with your mission.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Operational Systems</h3>
                            <p className="text-gray-600">Improve internal workflows, team culture, and systems that keep your nonprofit thriving and compliant.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Mission Clarity Sessions</h3>
                            <p className="text-gray-600">1-on-1 or team workshops to reconnect with your why and recalibrate your direction.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Retreats & Vision Planning</h3>
                            <p className="text-gray-600">Custom leadership retreats for alignment, spiritual renewal, and long-term planning.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}