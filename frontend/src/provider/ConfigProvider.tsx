import React, { useState } from "react";
import Progress from "@/components/custom/loader/Progress";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ConfigProviderProps {
  children: React.ReactNode;
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  const [query] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={query}>
        <Progress>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {children}
        </Progress>
      </QueryClientProvider>
    </>
  );
};

export default ConfigProvider;
