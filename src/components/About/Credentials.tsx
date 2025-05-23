import { useFadeIn } from "../../hooks/useFadeIn";

export const Credentials = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        // <!Credentials Grid
        <section className="bg-gray-50 py-20 z-[1] sticky top-0">
            <div ref={ref} className={`max-w-6xl mx-auto text-center px-6 ${fadeInClass}`} style={style}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">My Qualifications</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">🎓 B.A. in Chemistry & Biblical Studies</div>
                    <div className="p-4 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">🎓 M.A. in Organizational Development</div>
                    <div className="p-4 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">🎓 TH.D. in Counseling & Leadership</div>
                    <div className="p-4 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">🏅 Certified Life Coach</div>
                    <div className="p-4 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">⚓ U.S. Navy Lieutenant (Ret.)</div>
                </div>
            </div>
        </section>
    )
}