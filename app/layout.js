// import Footer from "@/components/FooterSection/Footer";
import "./globals.css";
// import { footerData } from "../mock_data";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'


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
