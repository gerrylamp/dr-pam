import { useFadeIn } from "../../hooks/useFadeIn";

export const ServicesGrid = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return (
        <>
            {/* <!-- Services Grid --> */}
            <section className="py-24 px-6 bg-white z-[1] sticky top-0">
                <div ref={ref} className={`max-w-6xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent" >What I Offer</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition" >
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Life & Purpose Coaching</h3>
                            <p className="text-gray-600">1-on-1 sessions to help individuals discover purpose, build confidence, and pursue meaningful goals.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition"  >
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Spiritual Counseling</h3>
                            <p className="text-gray-600">Faith-based guidance for emotional healing, spiritual growth, and navigating life transitions.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition"  >
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Business & Nonprofit Consulting</h3>
                            <p className="text-gray-600">Strategic support for founders, ministries, and startups to grow with structure, clarity, and purpose.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition" >
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Workshops & Leadership Training</h3>
                            <p className="text-gray-600">Interactive workshops for teams and leaders on communication, alignment, and spiritual leadership.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition"  >
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Publishing & Book Consulting</h3>
                            <p className="text-gray-600">From writing to printing, I support aspiring authors in telling their stories with confidence and professionalism.</p>
                        </div>

                        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition"  >
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Notary Services</h3>
                            <p className="text-gray-600">Quick, professional notary services for local clients in a faith-led, trustworthy environment.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}