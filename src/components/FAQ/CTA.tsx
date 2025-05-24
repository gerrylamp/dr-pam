import { useFadeIn } from "../../hooks/useFadeIn";

export const CTA = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Still Have Questions CTA --> */}
            <section className="bg-gray-50 py-24 text-center px-6 z-[1] sticky top-0" >
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Still have questions?</h2>
                    <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">I’m here to help. Whether you’re curious about coaching, need help navigating life transitions, or want guidance for your business, let’s talk.</p>
                    <a href="#contact" className="inline-block px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full font-semibold transition">
                    Contact Me
                    </a>
                </div>
            </section>
        </>
    )
}