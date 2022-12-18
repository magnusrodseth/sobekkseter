import AppProvider from "@/providers/AppProvider";
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
