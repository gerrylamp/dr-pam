import { CTA } from "../components/Business/CTA"
import { Hero } from "../components/Business/Hero"
import { ImpactHighlights } from "../components/Business/ImpactHighlights"
import { Introduction } from "../components/Business/Introduction"
import { Contact } from "../components/Contact"

export const Business = () => {
    return (
        <>
            <Hero />
            <Introduction />
            <ImpactHighlights />
            <CTA />
            <Contact />
        </>
    )
}