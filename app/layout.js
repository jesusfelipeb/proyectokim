import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-linen text-obsidian antialiased">
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}