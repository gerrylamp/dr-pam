import { useFadeIn } from "../../hooks/useFadeIn";

export const Mission = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        // Mission Section
        <section className="bg-fuchsia-50 py-20 text-center px-6 z-[1] sticky top-0">
            <div ref={ref} className={`${fadeInClass}`} style={style}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">My Mission</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-700">
                    To empower individuals and businesses to overcome challenges, embrace their purpose, and walk in clarity, confidence, and spiritual wholeness.
                </p>
            </div>
        </section>
    )
}