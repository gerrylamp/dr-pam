import { assets } from "../../assets/assets";
import { useFadeIn } from "../../hooks/useFadeIn";

export const Hero = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* Hero Section */}
            <section className="bg-indigo-900 text-white text-center">
                <div
                className="relative h-[80vh] overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${assets.bg_whyChooseMe})`,
                }}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-indigo-900/80" />

                    <div
                        ref={ref}
                        className={`fixed h-[inherit] inset-0 flex flex-col justify-center items-center text-white text-center px-4 ${fadeInClass}`}
                        style={style}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose Dr. Pamela Russell?</h1>
                        <p className="text-lg max-w-3xl mx-auto">
                        A trusted guide with decades of experience, a heart for purpose, and a mind for strategy. I’m here to empower your personal or organizational breakthrough.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}