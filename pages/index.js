import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rep Our</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
      <HeroSection/>
      <AboutSection/>
      </main>
    </>
  );
}
