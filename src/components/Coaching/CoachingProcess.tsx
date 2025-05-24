import { useFadeIn } from "../../hooks/useFadeIn";

export const CoachingProcess = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        <>
            {/* <!-- Coaching Process --> */}
            <section className="bg-fuchsia-50 py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-4xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">What Coaching with Me Looks Like</h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-10 text-left text-gray-700">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-2">1. Explore</h3>
                            <p>We begin with a conversation about your goals, obstacles, and purpose.</p>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-2">2. Equip</h3>
                            <p>Through coaching sessions, I equip you with tools and strategies tailored to you.</p>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-2">3. Empower</h3>
                            <p>You’ll leave each session with confidence, action steps, and accountability.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}