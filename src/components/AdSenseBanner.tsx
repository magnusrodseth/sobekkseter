import Script from "next/script";
import React from "react";

const AdSenseBanner = () => {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3731844450515812"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
        }}
        data-ad-client="ca-pub-3731844450515812"
        data-ad-slot="3565089650"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="custom">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </>
  );
};

export default AdSenseBanner;
