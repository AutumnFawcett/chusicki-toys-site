import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Chusicki Toys | Anime Figures & Convention Pop-Up Shop",
  description: "Authentic anime figures and convention pop-up vendor in Alberta.",
  metadataBase: new URL("https://chusicki.com"),
  openGraph: {
    title: "Chusicki Toys",
    description: "Anime figures • Convention Pop-Up Shop",
    url: "https://chusicki.com",
    siteName: "Chusicki Toys",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-brandBlack">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
