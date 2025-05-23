import { useFadeIn } from "../../hooks/useFadeIn";

export const Products = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Products Grid --> */}
            <section className="py-24 px-6 bg-white z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <div className="max-w-6xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Browse the Store</h2>
                        <p className="text-gray-600">Each resource is written, curated, or developed by Dr. Pam to guide, teach, and transform.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {/* <!-- Product Card --> */}
                        <div className="border rounded-xl shadow hover:shadow-md transition p-6 text-left">
                            <img src="/images/book1.jpg" alt="Product 1" className="w-full h-64 object-cover rounded-md mb-4" />
                            <h3 className="text-lg font-semibold text-indigo-800 mb-1">Living on Purpose: A 30-Day Devotional</h3>
                            <p className="text-sm text-gray-500 mb-3">A daily journey to reconnect with your calling and refresh your spirit.</p>
                            <p className="font-bold text-fuchsia-700 mb-4">$12.99</p>
                            <a href="#" className="inline-block bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800 transition">Add to Cart</a>
                        </div>

                        <div className="border rounded-xl shadow hover:shadow-md transition p-6 text-left">
                            <img src="/images/book2.jpg" alt="Product 2" className="w-full h-64 object-cover rounded-md mb-4" />
                            <h3 className="text-lg font-semibold text-indigo-800 mb-1">From Vision to Vessel: Ministry Planning Guide</h3>
                            <p className="text-sm text-gray-500 mb-3">Practical steps to launch or grow your God-given vision with structure and prayer.</p>
                            <p className="font-bold text-fuchsia-700 mb-4">$24.99</p>
                            <a href="#" className="inline-block bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800 transition">Learn More</a>
                        </div>

                        <div className="border rounded-xl shadow hover:shadow-md transition p-6 text-left">
                            <img src="/images/course.jpg" alt="Product 3" className="w-full h-64 object-cover rounded-md mb-4" />
                            <h3 className="text-lg font-semibold text-indigo-800 mb-1">Purpose Coaching Mini-Course</h3>
                            <p className="text-sm text-gray-500 mb-3">Self-paced online course to clarify your path and take confident action.</p>
                            <p className="font-bold text-fuchsia-700 mb-4">$49.00</p>
                            <a href="#" className="inline-block bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800 transition">Enroll Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}