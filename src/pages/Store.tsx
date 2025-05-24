import { Contact } from "../components/Contact"
import { CTA } from "../components/Store/CTA"
import { Hero } from "../components/Store/Hero"
import { Products } from "../components/Store/Products"

export const Store = () => {
    return (
        <>
            <Hero />
            <Products />
            <CTA />
            <Contact />
        </>
    )
}