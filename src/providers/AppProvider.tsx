import Layout from "@/components/Layout";
import type { FC } from "react";
import { Analytics } from "@vercel/analytics/react";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <Layout>
      {children}

      <Analytics />
    </Layout>
  );
};

export default AppProvider;
