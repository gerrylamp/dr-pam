import { Contact } from "../components/Contact"
import { ApproachStatement } from "../components/Counseling/ApproachStatement"
import { CTA } from "../components/Counseling/CTA"
import { Hero } from "../components/Counseling/Hero"
import { Overview } from "../components/Counseling/Overview"

export const Counseling = () => {
    return (
        <>
            <Hero />
            <Overview />
            <ApproachStatement />
            <CTA />
            <Contact />
        </>
    )
}