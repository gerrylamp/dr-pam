import { useFadeIn } from "../../hooks/useFadeIn";

export const ImpactHighlights = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Impact Highlights --> */}
            <section className="bg-fuchsia-50 py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-4xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Real Impact. Purposeful Results.</h2>
                    <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-700 text-base space-y-2">
                        <li>Scaled small businesses into structured operations with clarity & confidence</li>
                        <li>Helped founders align their faith with their business model and decision-making</li>
                        <li>Restructured nonprofit and for-profit teams to foster leadership and mission alignment</li>
                        <li>Guided burned-out leaders back to joy, rhythm, and results</li>
                    </ul>
                </div>
            </section>
        </>
    )
}