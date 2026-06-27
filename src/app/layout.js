import { Cinzel, Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
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
      className={`${inter.variable} ${cinzel.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
