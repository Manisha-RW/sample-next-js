import Footer from "@/components/FooterSection/Footer";
import "./globals.css";
// import { footerData } from "../mock_data";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

export const metadata = {
  title: "Next App",
  description: "Sample Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        {/* <Footer props={footerData} /> */}
      </body>
    </html>
  );
}