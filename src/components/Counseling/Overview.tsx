import { useFadeIn } from "../../hooks/useFadeIn";

export const Overview = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Overview Section --> */}
            <section className="py-24 px-6 bg-white z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <div className="max-w-5xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Support for the Whole Person</h2>
                        <p className="text-gray-600 text-lg">Whether you're facing grief, anxiety, transition, or a personal crossroad, I offer a safe and sacred space to process, heal, and grow through it — spiritually and practically.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Grief & Loss Counseling</h3>
                            <p className="text-gray-600">Compassionate support for those navigating the loss of a loved one, a relationship, or a season of life.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Faith & Identity Struggles</h3>
                            <p className="text-gray-600">Explore doubts, restore confidence, and reconnect with your identity in Christ.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Relationship Support</h3>
                            <p className="text-gray-600">Guidance for individuals or couples seeking restoration, clarity, or healing in personal relationships.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Life Transitions</h3>
                            <p className="text-gray-600">Support through major changes — career shifts, parenthood, retirement, or spiritual redirection.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Burnout & Stress Management</h3>
                            <p className="text-gray-600">Christian-based approaches to rest, restoration, and boundaries for leaders and caregivers.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Pastoral Counseling</h3>
                            <p className="text-gray-600">Support from someone who understands both ministry and mental health challenges.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}