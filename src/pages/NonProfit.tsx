import { Contact } from "../components/Contact"
import { CTA } from "../components/NonProfit/CTA"
import { Hero } from "../components/NonProfit/Hero"
import { ImpactHighlights } from "../components/NonProfit/ImpactHighlights"
import { Introduction } from "../components/NonProfit/Introduction"

export const NonProfit = () => {
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