import { useFadeIn } from "../../hooks/useFadeIn";
import { assets } from "../../assets/assets";

export const BlogGrid = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Blog Grid --> */}
            <section className="py-24 px-6 bg-white z-[1]">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <div className="max-w-6xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Latest Articles</h2>
                        <p className="text-gray-600">Explore thoughts from Dr. Pam on personal growth, spiritual development, and kingdom-minded leadership.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {/* <!-- Blog Card --> */}
                        <article className="border rounded-xl shadow hover:shadow-md transition overflow-hidden text-left">
                            <img src="https://images.pexels.com/photos/4300115/pexels-photo-4300115.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 1" className="w-full h-48 object-cover" />
                            <div className="p-6">
                            <p className="text-sm text-fuchsia-700 uppercase font-semibold mb-2">Faith & Life</p>
                            <h3 className="text-lg font-semibold mb-2 text-indigo-800">When God Says Wait: Finding Peace in Delay</h3>
                            <p className="text-gray-600 text-sm mb-4">What do you do when you're ready but the breakthrough hasn't come yet? Let's talk about delay, trust, and divine timing...</p>
                            <a href="/blog-single-page" className="text-indigo-700 font-semibold hover:underline">Read More →</a>
                            </div>
                        </article>

                        <article className="border rounded-xl shadow hover:shadow-md transition overflow-hidden text-left">
                            <img src="https://images.pexels.com/photos/1827215/pexels-photo-1827215.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 2" className="w-full h-48 object-cover" />
                            <div className="p-6">
                            <p className="text-sm text-fuchsia-700 uppercase font-semibold mb-2">Leadership</p>
                            <h3 className="text-lg font-semibold mb-2 text-indigo-800">Leading Without Losing Yourself</h3>
                            <p className="text-gray-600 text-sm mb-4">How to lead others effectively while maintaining your identity, energy, and spiritual rhythm...</p>
                            <a href="/blog-single-page" className="text-indigo-700 font-semibold hover:underline">Read More →</a>
                            </div>
                        </article>

                        <article className="border rounded-xl shadow hover:shadow-md transition overflow-hidden text-left">
                            <img src="https://images.pexels.com/photos/3396673/pexels-photo-3396673.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 3" className="w-full h-48 object-cover" />
                            <div className="p-6">
                            <p className="text-sm text-fuchsia-700 uppercase font-semibold mb-2">Purpose</p>
                            <h3 className="text-lg font-semibold mb-2 text-indigo-800">Purpose Is Not a Destination</h3>
                            <p className="text-gray-600 text-sm mb-4">Many people wait for purpose like a sign. But purpose is already inside you — let’s uncover how it shows up daily...</p>
                            <a href="/blog-single-page" className="text-indigo-700 font-semibold hover:underline">Read More →</a>
                            </div>
                        </article>

                        <article className="border rounded-xl shadow hover:shadow-md transition overflow-hidden text-left">
                            <img src="https://readdy.ai/api/search-image?query=professional%20meeting%20with%20diverse%20team%20discussing%20leadership%20strategies%20in%20modern%20office%20environment%2C%20business%20coaching%20session%2C%20professional%20setting%20with%20natural%20lighting&width=600&height=400&seq=blog1&orientation=landscape" alt="Blog Post 3" className="w-full h-48 object-cover" />
                            <div className="p-6">
                            <p className="text-sm text-fuchsia-700 uppercase font-semibold mb-2">Leadership
</p>
                            <h3 className="text-lg font-semibold mb-2 text-indigo-800">5 Strategies for Leading Through Uncertainty</h3>
                            <p className="text-gray-600 text-sm mb-4">Practical approaches to help leaders navigate complexity and guide their teams through challenging times....</p>
                            <a href="/blog-single-page" className="text-indigo-700 font-semibold hover:underline">Read More →</a>
                            </div>
                        </article>

                        <article className="border rounded-xl shadow hover:shadow-md transition overflow-hidden text-left">
                            <img src="https://readdy.ai/api/search-image?query=professional%20organizational%20chart%20or%20team%20structure%20visualization%20in%20modern%20office%20setting%2C%20business%20strategy%20planning%2C%20professional%20environment%20with%20clean%20design%20elements&width=600&height=400&seq=blog2&orientation=landscape" alt="Blog Post 3" className="w-full h-48 object-cover" />
                            <div className="p-6">
                            <p className="text-sm text-fuchsia-700 uppercase font-semibold mb-2">Organizational Development</p>
                            <h3 className="text-lg font-semibold mb-2 text-indigo-800">Building a Culture of Innovation and Agility</h3>
                            <p className="text-gray-600 text-sm mb-4">How organizations can foster environments that encourage creative thinking and adaptability....</p>
                            <a href="/blog-single-page" className="text-indigo-700 font-semibold hover:underline">Read More →</a>
                            </div>
                        </article>

                        <article className="border rounded-xl shadow hover:shadow-md transition overflow-hidden text-left">
                            <img src="https://readdy.ai/api/search-image?query=professional%20person%20in%20meditation%20or%20mindfulness%20pose%20in%20bright%20modern%20office%20environment%2C%20work-life%20balance%20concept%2C%20wellness%20in%20workplace%2C%20clean%20professional%20setting&width=600&height=400&seq=blog3&orientation=landscape" alt="Blog Post 3" className="w-full h-48 object-cover" />
                            <div className="p-6">
                            <p className="text-sm text-fuchsia-700 uppercase font-semibold mb-2">Personal Growth</p>
                            <h3 className="text-lg font-semibold mb-2 text-indigo-800">Mindfulness Practices for Busy Professionals</h3>
                            <p className="text-gray-600 text-sm mb-4">Simple techniques to incorporate mindfulness into your daily routine for improved focus and well-being....</p>
                            <a href="/blog-single-page" className="text-indigo-700 font-semibold hover:underline">Read More →</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}