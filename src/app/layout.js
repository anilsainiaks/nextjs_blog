import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { template } from "lodash";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:{
    default:"NextJS HomePage",
    template:"%s | Nextjs"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
