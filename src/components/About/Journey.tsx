import { useFadeIn } from "../../hooks/useFadeIn";

export const Journey = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        // Journey Section
        <section className="bg-white py-20 px-6 z-[1] sticky top-0">
            <div ref={ref} className={`max-w-4xl mx-auto ${fadeInClass}`} style={style}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">My Journey</h2>

                <table className="w-full border-separate [border-spacing:50px_30px]">
                    <tbody>
                        <tr>
                            <td className="whitespace-nowrap text-indigo-600 font-bold">⏳ Early Life</td>
                            <td>Raised in a family of faith leaders, I felt a strong calling to help others from a young age...</td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap text-indigo-600 font-bold">📚 Education</td>
                            <td>My academic journey led me to degrees in chemistry, theology, and organizational development...</td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap text-indigo-600 font-bold">💼 Professional Work</td>
                            <td>I've served as a counselor, military officer, nonprofit leader, and consultant for over 25 years...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}