import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Homepage from "@/components/Home/Homepage";
import Client from "@/components/Home/Client";
import Works from "@/components/Home/Works";

export default function Home() {
  return (
    <main>
      <Header />
      <Homepage />
      <Client />
      <Works />
      <Footer />
    </main>
  );
}

