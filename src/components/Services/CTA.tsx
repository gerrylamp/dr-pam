import { useFadeIn } from "../../hooks/useFadeIn";

export const CTA = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        <>
            {/* <!-- CTA --> */}
            <section className="bg-indigo-900 text-white py-24 text-center px-6 z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="mb-6 max-w-xl mx-auto">Let’s discover what’s possible when faith meets strategy. Schedule a call today and let’s build something meaningful.</p>
                    <a href="#contact" className="inline-block px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition">
                    Book a Consultation
                    </a>
                </div>
            </section>
        </>
    )
}