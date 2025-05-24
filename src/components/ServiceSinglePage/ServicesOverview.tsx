import { useFadeIn } from "../../hooks/useFadeIn";

export const ServicesOverview = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Service Overview --> */}
            <section className="py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">What This Coaching Is About</h2>
                        <p className="text-gray-700 text-lg">This is not just motivational talk. It's purpose-driven guidance rooted in truth, strategy, and experience — to help you move forward with confidence and faith.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">What You'll Receive</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>1-on-1 Zoom sessions with Dr. Pam</li>
                            <li>Clarity exercises and journaling prompts</li>
                            <li>Goal mapping and decision-making support</li>
                            <li>Email check-ins between sessions</li>
                            </ul>
                        </div>
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Who It's For</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>People in transition or seeking direction</li>
                                <li>Faith-driven entrepreneurs or creatives</li>
                                <li>Leaders ready for personal realignment</li>
                                <li>Anyone feeling stuck, restless, or unclear</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}