import { useFadeIn } from "../../hooks/useFadeIn";

export const CTA = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- CTA Section --> */}
            <section className="bg-indigo-900 text-white text-center py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">You Don’t Have to Carry It Alone</h2>
                    <p className="mb-6 max-w-xl mx-auto">Let's talk about what you're facing. Whether you need one session or an ongoing partnership, I’m here to support you with faith and wisdom.</p>
                    <a href="/contact" className="inline-block px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition">
                    Schedule a Counseling Session
                    </a>
                </div>
            </section>
        </>
    )
}