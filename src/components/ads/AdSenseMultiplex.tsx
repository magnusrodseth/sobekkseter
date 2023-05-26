import Script from "next/script";
import React from "react";

const AdSenseMultiplex = () => {
  return (
    <>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
        }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-3731844450515812"
        data-ad-slot="5549051322"
      ></ins>
      <Script id="multiplex-custom">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </>
  );
};

export default AdSenseMultiplex;
