import { useFadeIn } from "../../hooks/useFadeIn";

export const Process = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        <>
            {/* <!-- Process Section --> */}
            <section className="bg-fuchsia-50 py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-4xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent" >How It Works</h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-10 text-left text-gray-700">
                        <div >
                            <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-2">1. Discovery</h3>
                            <p>We start with a conversation to understand your needs and goals — personal, spiritual, or organizational.</p>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-2">2. Strategy</h3>
                            <p>Based on what we uncover, I design a path forward — whether that’s a single session, a workshop, or a long-term plan.</p>
                        </div>
                        <div >
                            <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-2">3. Empowerment</h3>
                            <p>You’ll leave with direction, clarity, and tools — and support that continues if needed.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}