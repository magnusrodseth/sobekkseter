import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Styles for loading progress bar

// Binding events for loading progress
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
