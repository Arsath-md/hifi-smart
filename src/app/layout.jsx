import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "HIFI Smart | Web & Mobile App Development Agency",
    template: "%s | HIFI Smart",
  },

  description:
    "HIFI Smart builds modern web applications, mobile apps, and digital marketing solutions for startups and local businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}