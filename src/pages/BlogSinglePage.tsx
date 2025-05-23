import { BlogContent } from "../components/BlogSinglePage/BlogContent"
import { CTA } from "../components/BlogSinglePage/CTA"
import { Hero } from "../components/BlogSinglePage/Hero"
import { Note } from "../components/BlogSinglePage/Note"

export const BlogSinglePage = () => {
    return (
        <>
            <Hero />
            <Note />
            <BlogContent />
            <CTA />
        </>
    )
}