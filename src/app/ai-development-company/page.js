import Header from "@/components/Header";
import AiHero from "@/app/ai-development-company/AiHero";
import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq"
import Footer from "@/components/Footer";



export default function Home() {
    return (
        <main>
            <Header transparent />
            <AiHero />
            <Clients />
            <Contactform />
            <OurBlog />
            <Faq />
            <Footer />

        </main>
    )
}