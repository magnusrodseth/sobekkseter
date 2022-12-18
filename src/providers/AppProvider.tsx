import Layout from "@/components/Layout";
import type { FC } from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default AppProvider;
