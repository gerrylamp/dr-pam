import { useFadeIn } from "../../hooks/useFadeIn";

export const CTA = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Call to Action --> */}
            <section className="bg-indigo-900 text-white text-center py-24 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Purpose-Filled Progress?</h2>
                    <p className="mb-6 max-w-xl mx-auto">If you're ready to discover your purpose, lead with clarity, or take your life in a new direction — let’s start together.</p>
                    <a href="/contact" className="inline-block px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition">
                    Book a Coaching Session
                    </a>
                </div>
            </section>
        </>
    )
}