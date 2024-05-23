import Faq from "@/components/Faq";
import "./globals.css";

export const metadata = {
  title: "Next App",
  description: "Sample Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Faq>{children}</Faq></body>
    </html>
  );
}
