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
  title: "Corbett Treat Resort",
  description:
    "Experience the wild in luxury at Corbett Treat Resort. Book your unforgettable wilderness adventure today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable} ${playfair.variable}`}>
      <body  cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
