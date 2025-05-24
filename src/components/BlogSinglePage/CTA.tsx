export const CTA = () => {
    return(
        <>
            {/* <!-- CTA --> */}
            <section className="bg-fuchsia-50 py-24 text-center px-6 z-[1] sticky top-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Enjoyed This Post?</h2>
                <p className="text-gray-700 max-w-xl mx-auto mb-6">Subscribe for weekly insights, devotionals, and updates from Dr. Pam directly in your inbox.</p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
                    <input type="email" placeholder="Your email address" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                    <button type="submit" className="px-6 py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800 transition">Subscribe</button>
                </form>
            </section>
        </>
    )
}