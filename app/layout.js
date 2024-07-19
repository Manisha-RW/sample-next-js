import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/FooterSection/Footer";
import { createClient } from "../prismicio";
import TopNavbar from "../components/Navbars/TopNavbar";

async function RootLayout({ children }) {
  const client = createClient();
  let navbar, footer, topNavbar;

  try {
    topNavbar = await client.getSingle("topNavbar");
    navbar = await client.getSingle("navbar");
    footer = await client.getSingle("footer");
  } catch (error) {
    console.error("Error fetching navbar or footer:", error);
  }
  return (
    <html lang="en">
      <body>
        {topNavbar && <TopNavbar topNavbar={topNavbar} />}
        {navbar && <Navbar navbar={navbar} />}
        {children}
        {footer && <Footer footer={footer} />}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
export default RootLayout;
