"use client"
import "./globals.css";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/FooterSection/Footer"
import { createClient } from "../prismicio";

async function RootLayout({ children }) {
  const client = createClient();
  let navbar, footer;

  try {
    navbar = await client.getSingle('navbar');
    footer = await client.getSingle('footer');
  } catch (error) {
    console.error('Error fetching navbar or footer:', error);
  }
  return (
    <html lang="en">
      <body>
      {navbar && <Navbar navbar={navbar} />}
        {children}
        {footer && <Footer footer={footer} />}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
export default RootLayout;
