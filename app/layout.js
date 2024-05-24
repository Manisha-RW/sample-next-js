import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Next App",
  description: "Sample Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
