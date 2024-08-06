"use client";

import { customTheme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
// import { store } from "@/store/index";
import NextTopLoader from "nextjs-toploader";

// const queryClient = new QueryClient();

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
        <ThemeProvider theme={customTheme}>
              <NextTopLoader color="#5b3a3a" showSpinner={false} />
          {children}
          </ThemeProvider>
  );
}
