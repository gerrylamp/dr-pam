import { useFadeIn } from "../../hooks/useFadeIn";

export const ImpactHighlights = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Impact Highlights --> */}
            <section className="bg-fuchsia-50 py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-4xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">The Results We Build</h2>
                    <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-700 text-base space-y-2">
                        <li>Launched 20+ nonprofits from vision to incorporation</li>
                        <li>Reorganized boards for integrity, clarity, and mission focus</li>
                        <li>Helped raise over $500K in combined donor and grant support</li>
                        <li>Empowered leaders to move from burnout to aligned growth</li>
                    </ul>
                </div>
            </section>
        </>
    )
}