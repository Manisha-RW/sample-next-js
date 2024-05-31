import React from "react";
import { Raleway } from "next/font/google";
import {
  aboutData,
  bannerData,
  contactData,
  faqsData,
  navbarData,
  ourClientData,
  projectData,
  statisticData,
  navData,
  brandData,
} from "../mock_data";
import About from "@/components/AboutUs/About";
import Banner from "@/components/HeaderSection/Banner";
import ContactUs from "@/components/Contact/ContactUs";
import Faq from "@/components/FaqSection/Faq";
import Navbar from "@/components/Navbars/Navbar";
import OurBrand from "@/components/Brands/OurBrand";
import OurClient from "@/components/OurClients/OurClient";
import OurProjects from "@/components/ProjectSection/OurProjects";
import Statistics from "@/components/MoreInfo/Statistics";
import TopNavbar from "@/components/Navbars/TopNavbar";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className= {raleway.className}>
      <TopNavbar props= { navData } />
      <Navbar props= { navbarData } />
      <Banner props= { bannerData } />
      <Statistics props= { statisticData } />
      <About props= { aboutData } />
      <OurBrand props= { brandData } />
      <OurClient props= { ourClientData } />
      <OurProjects props={projectData}/>
      <Faq props= { faqsData } />
      <ContactUs props= { contactData } />
    </main>
  );
}
