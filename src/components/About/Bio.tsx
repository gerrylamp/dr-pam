import { assets } from "../../assets/assets";
import { useFadeIn } from "../../hooks/useFadeIn";

export const Bio = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <section className="bg-white z-[1] sticky top-0 py-20">
            <div ref={ref} className={`max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center px-6 ${fadeInClass}`} style={style}>
                <img src={assets.profile} alt="Dr. Pam Russell" className="w-96 h-auto rounded-2xl shadow-xl"/>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Who I Am</h2>
                    <p className="text-gray-700 leading-relaxed">
                    I’m Dr. Pamela Russell — a third-generation preacher, pastoral counselor, certified life coach, and business consultant with a passion for purpose-driven transformation. As the founder of Pamela Russell Ministries and A God Send, Inc., my life’s work is dedicated to helping individuals and organizations grow spiritually, emotionally, and strategically.
                    </p>
                </div>
            </div>
        </section>
    )
}