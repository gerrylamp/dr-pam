import { Contact } from "../components/Contact"
import { CTA } from "../components/Ministry/CTA"
import { Hero } from "../components/Ministry/Hero"
import { MinistryMissionStatement } from "../components/Ministry/MinistryMissionStatement"
import { MinistryServiceArea } from "../components/Ministry/MinistryServiceArea"

export const Ministry = () => {
    return (
        <>
            <Hero />
            <MinistryServiceArea />
            <MinistryMissionStatement />
            <CTA />
            <Contact />
        </>
    )
}