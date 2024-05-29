import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Navbar from "@/components/Navbar";
import OurBrand from "@/components/OurBrand";
import OurClient from "@/components/OurClient";
import OurProjects from "@/components/OurProjects";
import Statistics from "@/components/Statistics";
import TopNavbar from "@/components/TopNavbar";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TopNavbar />
      <Navbar/>
      <Banner />
      <Statistics/>
      <About />
      {/* <OurBrand /> */}
      <OurClient />
      {/* <OurProjects /> */}
      <Faq />
      <ContactUs />
    </div>
  );
}            
