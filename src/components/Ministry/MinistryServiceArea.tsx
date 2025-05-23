import { useFadeIn } from "../../hooks/useFadeIn";

export const MinistryServiceArea = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Ministry Service Areas --> */}
            <section className="py-24 px-6 bg-white z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <div className="max-w-5xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Faith Meets Strategy</h2>
                        <p className="text-gray-600 text-lg">I partner with ministries to create clarity in leadership, communication, and spiritual growth — all guided by biblical principles and practical wisdom.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Church Consulting</h3>
                            <p className="text-gray-600">Helping churches define vision, align leadership, and strengthen ministry structures.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Leadership Training</h3>
                            <p className="text-gray-600">Workshops and coaching for pastors, deacons, and ministry teams to grow as servant-leaders.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Spiritual Development</h3>
                            <p className="text-gray-600">Guiding individuals and teams in growing deeper in the Word, prayer, and purpose.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Women's Ministry Support</h3>
                            <p className="text-gray-600">Empowering women leaders and ministry groups with biblical encouragement and strategic guidance.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Workshops & Retreats</h3>
                            <p className="text-gray-600">Faith-based sessions to recharge, realign, and refocus your team or congregation.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Event Speaking</h3>
                            <p className="text-gray-600">Dynamic speaking engagements for conferences, prayer breakfasts, and special church events.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}