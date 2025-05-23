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
                        "linear-gradient(to right, rgba(0,0,0,0.8), rgba(29,78,216,0.7)), url('https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg')",
                }}
            >
                <div ref={ref} className={`fixed ${fadeInClass}`} style={style}>
                    <p className="text-sm uppercase text-fuchsia-300 font-semibold mb-2 z-[-1]">Faith & Life</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Insights & Inspiration</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Devotionals, leadership wisdom, life coaching tips, and encouragement for the journey.
                    </p>
                </div>
            </section>
        </>
    )
}