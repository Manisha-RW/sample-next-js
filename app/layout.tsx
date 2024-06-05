import "./globals.css";
// import { footerData } from "../mock_data";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import Layout from "../components/globals/Layout";

export const metadata = {
  title: "Next App",
  description: "Sample Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
          {/* <Footer props={footerData} /> */}
        </Layout>
      </body>
    </html>
  );
}
