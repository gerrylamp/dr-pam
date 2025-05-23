import { Contact } from "../components/Contact"
import { CTA } from "../components/Services/CTA"
import { Hero } from "../components/Services/Hero"
import { Process } from "../components/Services/Process"
import { ServicesGrid } from "../components/Services/ServicesGrid"

export const Services = () => {
    return (
        <>
            <Hero />
            <ServicesGrid />
            <Process />
            <CTA />
            <Contact />
        </>
    )
}