import { ClientLogos } from "../components/Clients/ClientLogos"
import { ClientType } from "../components/Clients/ClientType"
import { CTA } from "../components/Clients/CTA"
import { Hero } from "../components/Clients/Hero"
import { ImpactStatements } from "../components/Clients/ImpactStatements"
import { Contact } from "../components/Contact"

export const Clients = () => {
    return (
        <>
            <Hero />
            <ClientType />
            <ClientLogos />
            <ImpactStatements />
            <CTA />
            <Contact />
        </>
    )
}