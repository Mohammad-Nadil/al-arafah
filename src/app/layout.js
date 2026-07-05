import { Cinzel, Hind_Siliguri, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import PublicHeader from "@/components/layout/PublicHeader";
import SmoothScrollProvider from "@/providers/SmoothScrollProviders";
import Footer from "@/components/layout/Footer";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "900"],
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  variable: "--font-hind-siliguri",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Al-Arafah International School & College",
  description: "Integrating Academic Excellence with Divine Islamic Tarbiyah",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSerif.variable} ${cinzel.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <SmoothScrollProvider>
              <PublicHeader />
              {children}
              <Footer />
            </SmoothScrollProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
