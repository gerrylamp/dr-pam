import { Contact } from "../components/Contact"
import { CTA } from "../components/Profit/CTA"
import { Hero } from "../components/Profit/Hero"
import { Introduction } from "../components/Profit/Introduction"
import { ProfitPhilosophy } from "../components/Profit/ProfitPhilosophy"

export const Profit = () => {
    return (
        <>
            <Hero />
            <Introduction />
            <ProfitPhilosophy />
            <CTA />
            <Contact />
        </>
    )
}