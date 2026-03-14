import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Location from "@/components/Location";
import Reservar from "@/components/Reservar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <StatusBar />
      <Hero />
      <div className="neon-divider w-full" />
      <About />
      <div className="neon-divider w-full" />
      <Events />
      <div className="neon-divider w-full" />
      <Gallery />
      <div className="neon-divider w-full" />
      <Services />
      <div className="neon-divider w-full" />
      <Location />
      <div className="neon-divider w-full" />
      <Reservar />
      <Footer />
    </main>
  );
}
