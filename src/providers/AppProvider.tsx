import Layout from "@/components/Layout";
import type { FC } from "react";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <Layout>
      {children}

      <Analytics />

      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3731844450515812"
        crossOrigin="anonymous"
      ></Script>
    </Layout>
  );
};

export default AppProvider;
