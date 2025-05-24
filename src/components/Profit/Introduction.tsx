import { useFadeIn } from "../../hooks/useFadeIn";

export const Introduction = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Introduction --> */}
            <section className="py-24 px-6 bg-white z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <div className="max-w-5xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Purpose Over Pressure. Margin Without Compromise.</h2>
                        <p className="text-gray-600 text-lg">I guide entrepreneurs and founders to earn well — without losing their mission, ethics, or peace. Profit is not the problem. Misalignment is. Let’s change that.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Revenue Alignment</h3>
                            <p className="text-gray-600">Match your pricing, programs, or products to your mission so income supports your impact.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Stewardship Planning</h3>
                            <p className="text-gray-600">Create systems that track, honor, and multiply what flows into your business or ministry.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Profit Systems & SOPs</h3>
                            <p className="text-gray-600">Build a back end that supports cash flow, automation, delegation, and peace of mind.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Faith-Based Pricing Models</h3>
                            <p className="text-gray-600">Charge in a way that reflects value and service, not fear or apology. Let’s set your worth right.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Profit-First Planning</h3>
                            <p className="text-gray-600">Implement budgeting and account practices that prioritize margin and sustainability.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Scaling with Purpose</h3>
                            <p className="text-gray-600">Ready to grow? Let’s make sure the next level is rooted in clarity, not chaos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}