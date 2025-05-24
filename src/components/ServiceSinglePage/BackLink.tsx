import { useFadeIn } from "../../hooks/useFadeIn";

export const BackLink = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Back Link --> */}
            <section className="bg-white text-center py-10 z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <a href="/services" className="text-indigo-700 font-semibold hover:underline">← Back to Services</a>
                </div>
            </section>
        </>
    )
}