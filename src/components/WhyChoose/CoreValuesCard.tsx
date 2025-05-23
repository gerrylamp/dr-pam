import { useFadeIn } from "../../hooks/useFadeIn";

export const CoreValuesCard = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Core Value Cards --> */}
            <section className="bg-white py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-6xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">What Sets Me Apart</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-linear-gradient p-6 border rounded-xl shadow transition-transform duration-300 hover:scale-105" >
                            <h3 className="text-primary text-xl font-semibold mb-2">25+ Years of Experience</h3>
                            <p className="text-black">A seasoned voice in business, counseling, ministry, and coaching. I've walked the journey — and I walk it with you.</p>
                        </div>

                        <div className="bg-linear-gradient p-6 border rounded-xl shadow transition-transform duration-300 hover:scale-105" >
                            <h3 className="text-primary text-xl font-semibold mb-2">Purpose-Driven Process</h3>
                            <p className="text-black">Every client gets a tailored strategy — rooted in faith, designed for action, and aligned with your calling.</p>
                        </div>

                        <div className="bg-linear-gradient p-6 border rounded-xl shadow transition-transform duration-300 hover:scale-105">
                            <h3 className="text-primary text-xl font-semibold mb-2">Support with Integrity</h3>
                            <p className="text-black">I don’t promise everything. I promise truth, wisdom, and real help — or I’ll point you to someone who can.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}