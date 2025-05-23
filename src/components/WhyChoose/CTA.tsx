import { useFadeIn } from "../../hooks/useFadeIn";

export const CTA = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Final CTA --> */}
            <section className="bg-indigo-900 text-white text-center py-24 px-6 z-[1] sticky top-0" >
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Something Purposeful</h2>
                    <p className="mb-6">Are you ready to step into clarity and growth? Let’s begin your journey.</p>
                    <a href="#contact" className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition duration-300 transform hover:scale-105">
                    Schedule a Consultation
                    </a>
                </div>
            </section>
        </>
    )
}