import { BlogGrid } from "../components/Blog/BlogGrid"
import { Hero } from "../components/Blog/Hero"
import { NewsletterSignup } from "../components/Blog/NewsletterSignup"

export const Blog = () => {
    return (
        <>
            <Hero />
            <BlogGrid />
            <NewsletterSignup />
        </>
    )
}