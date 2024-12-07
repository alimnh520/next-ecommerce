import localFont from "next/font/local";
import "./globals.css";
import { Cairo } from 'next/font/google';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const cairo = Cairo({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
