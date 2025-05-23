import { useFadeIn } from "../../hooks/useFadeIn";

export const Hero = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative h-[80vh] bg-fixed bg-no-repeat bg-cover bg-center flex items-center justify-center text-white text-center px-6"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.8), rgba(29,78,216,0.7)), url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')",
                }}
            >
                <div ref={ref} className={`fixed ${fadeInClass}`} style={style}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Faith-Fueled Resources</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Books, devotionals, courses, and tools to empower your purpose journey.
                    </p>
                </div>
            </section>
        </>
    )
}