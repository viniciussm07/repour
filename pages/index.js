import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InfosSection from "@/components/InfosSection";
import ResidentsSection from "@/components/ResidentsSection";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";
import House from "@/components/House";
import Party from "@/components/Party";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rep Our</title>
        <meta
          name="description"
          content="República estudantil de São Carlos com estudantes da USP e UFSCar.
Venha vivenciar a melhor experiência da sua vida!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <InfosSection />
        <House />
        <ResidentsSection />
        {/* <Party /> */}
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
