import { useFadeIn } from "../../hooks/useFadeIn";

export const Differentiator = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Differentiator Section --> */}
            <section className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-24 text-center px-6 z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Just Coaching — It's a Calling</h2>
                    <p className="max-w-2xl mx-auto text-lg">
                    Some professionals offer services. I offer transformation. Rooted in experience, guided by faith, and built on results — my work helps you move forward with clarity and confidence.
                    </p>
                </div>
            </section>
        </>
    )
}