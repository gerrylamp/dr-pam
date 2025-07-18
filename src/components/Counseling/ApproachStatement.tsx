import { useFadeIn } from "../../hooks/useFadeIn";

export const ApproachStatement = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Approach Statement --> */}
            <section className="bg-fuchsia-50 py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-3xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">My Counseling Approach</h2>
                    <p className="text-lg text-gray-700">
                        My approach combines clinical insight, life experience, and spiritual discernment. I walk alongside you — not with judgment, but with compassion, confidentiality, and care grounded in God’s truth.
                    </p>
                </div>
            </section>
        </>
    )
}