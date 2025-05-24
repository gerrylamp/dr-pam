import { useFadeIn } from "../../hooks/useFadeIn";
import { assets } from "../../assets/assets";

export const ClientLogos = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Client Logos Section (Optional) --> */}
            <section className="py-24 bg-gray-50 px-6 z-[1] sticky top-0">
                <div ref={ref} className={`max-w-6xl mx-auto text-center ${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Organizations I’ve Worked With</h2>
                    <p className="mb-10 text-gray-600">Trusted by leaders across ministries, nonprofits, and business communities.</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
                        <div className="py-10">
                            <img src={assets.client1} alt="Client 1" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div>
                            <img src={assets.client2} alt="Client 2" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client3} alt="Client 3" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client4} alt="Client 4" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client5} alt="Client 5" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client6} alt="Client 6" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client7} alt="Client 7" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client8} alt="Client 8" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client9} alt="Client 9" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client10} alt="Client 10" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client11} alt="Client 11" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                        <div className="py-10">
                            <img src={assets.client12} alt="Client 12" className="h-12 mx-auto hover:scale-125 transition duration-300" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}