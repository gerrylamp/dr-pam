import { CoachingBenefits } from "../components/Coaching/CoachingBenefits"
import { CoachingProcess } from "../components/Coaching/CoachingProcess"
import { CTA } from "../components/Coaching/CTA"
import { Hero } from "../components/Coaching/Hero"
import { Contact } from "../components/Contact"

export const Coaching = () => {
    return (
        <>
            <Hero />
            <CoachingBenefits />
            <CoachingProcess />
            <CTA />
            <Contact />
        </>
    )
}