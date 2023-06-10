import Script from "next/script";
import React from "react";

const isDevelopment = process.env.NODE_ENV === "development";

const GoogleAnalytics = () => {
  if (isDevelopment) return null;

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-JNJ2KTJ1ZB`} />
      <Script
        id="gtag-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-JNJ2KTJ1ZB', {
              page_path: window.location.pathname,
            });
        `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;