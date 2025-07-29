import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Været på Søbekkseter",
  description:
    "Været på Søbekkseter. Nettsiden viser nåværende værforhold, live webkamera-bilde og annen nyttig informasjon for hytteeiere i Søbekklia.",
  keywords: `
    søbekkseter, været på søbekkseter, været på sobekkseter, 
    sobekkseter, hytta, valdres, vær, weather, webcamera, 
    hedalen, hedalen vær, hedalen søbekkseter, sobekklia, søbekklia,
    værvarsel, værvarsel søbekkseter, værvarsel sobekkseter,
    værvarsel hedalen, værvarsel valdres, værvarsel søbekklia,
    sanntid, sanntid vær, sanntid værvarsel, sanntid værvarsel søbekkseter,
    værdata, værdata søbekkseter, værdata sobekkseter, værdata hedalen,
    sanntidsvær, sanntidsværvarsel, værkamera, værkamera søbekkseter,
    sanntidsværmelding,
    webcamera, været 
    `.replace(/\s+/g, " "),
  icons: [{ rel: "icon", href: "/img/logo.png", url: "/img/logo.png" }],
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="no">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
