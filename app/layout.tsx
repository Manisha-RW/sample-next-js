import "./globals.css";
// import { footerData } from "../mock_data";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import Layout from "../components/globals/Layout";
import {Raleway} from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
})

export const metadata = {
  title: "Next App",
  description: "Sample Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <main className={raleway.className}>
        <Layout>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
          {/* <Footer props={footerData} /> */}
        </Layout>
        </main>
      </body>
    </html>
  );
}
