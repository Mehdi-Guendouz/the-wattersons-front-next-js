import About from "@/components/About";
import Contactus from "@/components/ContactUs";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import JTTS from "@/components/JTTS";
import SecHeading from "@/components/SecHeading";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navba";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Heading myString="About TrackUp" />
      <About />
      <SecHeading myString="Join the trial System" />
      <JTTS />
      <Contactus />
      <Footer />
    </main>
  );
}
