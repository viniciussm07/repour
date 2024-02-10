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
        <meta httpEquiv="content-language" content="pt-br" />
        <title>República Our - São Carlos</title>
        <meta
          name="description"
          content="República estudantil em São Carlos com estudantes da USP e UFSCar.
Venha vivenciar a melhor experiência da sua vida!"
        />
        <meta property="og:title" content="República Our - São Carlos" />
        <meta property="og:site_name" content="República Our - São Carlos" />
        <meta
          property="og:description"
          content="República estudantil em São Carlos com estudantes da USP e UFSCar.
          Venha vivenciar a melhor experiência da sua vida!"
        />
        <meta
          property="og:image"
          content="https://repour.vercel.app/logos/logo-pequeno.webp"
        />
        <meta
          name="twitter:image"
          content="https://repour.vercel.app/logos/logo-pequeno.webp"
        />
        <meta property="og:url" content="https://repour.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="canonical" href="https://repour.vercel.app/" />
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
