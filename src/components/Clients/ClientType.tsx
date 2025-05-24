import { useFadeIn } from "../../hooks/useFadeIn";

export const ClientType = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Client Types Grid --> */}
            <section className="py-24 px-6 bg-white z-[1] sticky top-0">
                <div ref={ref} className={`max-w-6xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent" >Who I Work With</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition" >
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Individuals Seeking Clarity</h3>
                            <p className="text-gray-600">Helping people overcome life transitions, uncover purpose, and take strategic steps forward.</p>
                        </div>

                        <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition"  >
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Entrepreneurs & Leaders</h3>
                            <p className="text-gray-600">Strategic coaching for business professionals ready to align goals with faith and mission.</p>
                        </div>

                        <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition"  >
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Churches & Faith-Based Teams</h3>
                            <p className="text-gray-600">Organizational clarity, leadership development, and ministry consulting rooted in biblical principles.</p>
                        </div>

                        <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition" >
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Nonprofit Founders</h3>
                            <p className="text-gray-600">Launching and growing mission-driven organizations with strategic and spiritual guidance.</p>
                        </div>

                        <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition"  >
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Corporate Teams</h3>
                            <p className="text-gray-600">Workshops and coaching for executive alignment, team culture, and leadership unity.</p>
                        </div>

                        <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition"  >
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Authors & Speakers</h3>
                            <p className="text-gray-600">Helping creatives refine their voice, publish their message, and reach their audience with impact.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}