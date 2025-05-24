import { BackLink } from "../components/ServiceSinglePage/BackLink"
import { Hero } from "../components/ServiceSinglePage/Hero"
import { Note } from "../components/ServiceSinglePage/Note"
import { Prices } from "../components/ServiceSinglePage/Prices"
import { ServicesOverview } from "../components/ServiceSinglePage/ServicesOverview"

export const ServiceSinglePage = () => {
    return(
        <>
            <Hero />
            <Note />
            <ServicesOverview />
            <Prices />
            <BackLink />
        </>
    )
}