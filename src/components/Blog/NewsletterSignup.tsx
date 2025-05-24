import { useFadeIn } from "../../hooks/useFadeIn";

export const NewsletterSignup = () => {
    const { ref, fadeInClass, style } = useFadeIn(0.1, 0);

    return(
        <>
            {/* <!-- Newsletter Signup (Optional) --> */}
            <section className="bg-fuchsia-50 py-24 text-center px-6 z-[1] sticky top-0">
                <div ref={ref} className={`${fadeInClass}`} style={style}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Stay Encouraged</h2>
                    <p className="text-gray-700 max-w-xl mx-auto mb-6">Join Dr. Pam’s mailing list to receive new articles, event updates, and inspiration straight to your inbox.</p>
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
                        <input type="email" placeholder="Your email address" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                        <button type="submit" className="px-6 py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800 transition">Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    )
}