import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InfosSection from "@/components/InfosSection";
import ResidentsSection from "@/components/ResidentsSection";
import Footer from "@/components/Footer";
import House from "@/components/House";
import Party from "@/components/Party";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="República estudantil de São Carlos com estudantes da USP e UFSCar.
Venha vivenciar a melhor experiência da sua vida!"
        />
        <meta property="og:title" content="República Our - São Carlos" />
        <meta property="og:site_name" content="República Our - São Carlos" />
        <meta
          property="og:description"
          content="República estudantil de São Carlos com estudantes da USP e UFSCar.
          Venha vivenciar a melhor experiência da sua vida!"
        />
        <meta
          property="og:image"
          content="https://repour.vercel.app/logos/logo.webp"
        />
        <meta
          property="og:url"
          content="https://repour.vercel.app/"
        />
        <title>República Our - São Carlos</title>
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
        <Footer />
      </main>
    </>
  );
}
