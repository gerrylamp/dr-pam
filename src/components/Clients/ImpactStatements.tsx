import { useFadeIn } from "../../hooks/useFadeIn";

export const ImpactStatements = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        <>
            {/* <!-- Impact Statements --> */}
            <section className="bg-fuchsia-50 py-24 px-6 z-[1]">
                <div ref={ref} className={`max-w-4xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Real Results, Meaningful Change</h2>

                    <p className="text-lg text-gray-700 mb-6" >
                        From startups to established ministries, my work supports clients with both strategy and spirit:
                    </p>

                    <ul className="text-left list-disc list-inside text-gray-700 space-y-2 max-w-xl mx-auto text-base">
                        <li>Launched 30+ nonprofit organizations with clear governance</li>
                        <li>Guided faith-based teams through leadership transitions</li>
                        <li>Developed scalable coaching systems for solopreneurs</li>
                        <li>Helped churches realign staff and structure around mission</li>
                    </ul>
                </div>
            </section>
        </>
    )
}