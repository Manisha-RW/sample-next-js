import About from "@/components/About";
import "./globals.css";

export const metadata = {
  title: "Next App",
  description: "Sample Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <About>{children}</About>
      </body>
    </html>
  );
}
