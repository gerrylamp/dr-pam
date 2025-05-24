import { useFadeIn } from "../../hooks/useFadeIn";

export const CTA = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Call to Action --> */}
            <section className="bg-fuchsia-50 py-24 px-6 text-center z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing a Resource?</h2>
                    <p className="text-gray-700 max-w-xl mx-auto mb-6">If you're unsure what resource is right for your journey, feel free to reach out and let’s talk about your next step.</p>
                    <a href="#contact" className="inline-block px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white font-semibold transition">
                    Contact Dr. Pam
                    </a>
                </div>
            </section>
        </>
    )
}