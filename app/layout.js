import Footer from "@/components/Footer";
import "./globals.css";
import Faq from "@/components/Faq";

export const metadata = {
  title: "Next App",
  description: "Sample Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <Faq/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
