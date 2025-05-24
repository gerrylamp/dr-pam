import { useFadeIn } from "../../hooks/useFadeIn";

export const UniqueApproach = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Unique Approach Section --> */}
            <section className="bg-fuchsia-50 py-24 px-6 text-center z-[1] sticky top-0" >
                <div ref={ref} className={`max-w-4xl mx-auto ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">How I Work</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        I don’t use a cookie-cutter model. Every person and every organization is different — and I listen before I lead.
                    </p>
                    <ul className="text-left list-disc list-inside text-gray-700 space-y-3 max-w-xl mx-auto">
                        <li>In-depth consultation and honest discovery</li>
                        <li>Spiritually grounded, ethically sound guidance</li>
                        <li>Custom plans built around your needs — not mine</li>
                        <li>Continued support, not just a one-time session</li>
                    </ul>
                </div>
            </section>
        </>
    )
}