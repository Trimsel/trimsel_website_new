import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Homepage from "@/components/Home/Homepage";
import Client from "@/components/Home/Client";
import Works from "@/components/Home/Works";
import Getintouch from "@/components/Home/Getintouch";
import Whatwedo from "@/components/Home/Whatwedo";
import Fivestage from "@/components/Home/Fivestage";
import Testimonial from "@/components/Home/testimonial";
import OurBlog from "@/components/Home/OurBlog";
import Industries from "@/components/Home/Industries";
import Contactform from "@/components/Home/Contactform";

export default function Home() {
  return (
    <main>
      <Header />
      <Homepage />
      <Client />
      <Works />
      <Getintouch />
      <Whatwedo />
      <Fivestage />
      <Industries />
      <Testimonial />
      <Contactform />
      <OurBlog />
      <Footer />
    </main>
  );
}

