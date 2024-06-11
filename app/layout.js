import { Alexandria } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const alexandria = Alexandria({ subsets: ["latin"] });

export const metadata = {
  title: "Raa World",
  description: "First ecommerce website on nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alexandria.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
