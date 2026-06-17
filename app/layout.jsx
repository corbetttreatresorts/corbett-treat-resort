import { Cormorant_Garamond, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://corbetttreatresort.com"),
  title: "Luxury Resort in Jim Corbett | Corbett Treat Resort",
  description:
    "Corbett Treat Resort is a luxury resort in Jim Corbett National Park. Perfect for destination weddings, events, jungle safaries and budget stay in Ramnagar.",
  openGraph: {
    title: "Luxury Resort in Jim Corbett | Corbett Treat Resort",
    description: "Corbett Treat Resort is a luxury resort in Jim Corbett National Park. Perfect for destination weddings, events, jungle safaries and budget stay in Ramnagar.",
    url: "https://corbetttreatresort.com",
    siteName: "Corbett Treat Resort",
    images: [
      {
        url: "/assets/images/resort-logo.png",
        width: 800,
        height: 600,
        alt: "Corbett Treat Resort Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Resort in Jim Corbett | Corbett Treat Resort",
    description: "Experience the ultimate luxury retreat at Corbett Treat Resort. Book your stay today!",
    images: ["/assets/images/resort-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${cormorant.variable} ${poppins.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
