import { Inter } from "next/font/google";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function AppLayout({ children }) {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <Meta />
      <Header />
      <main className="flex-grow bg-[#f7f7f7]">{children}</main>
      <Footer />
    </div>
  );
}
