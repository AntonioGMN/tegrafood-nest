"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function QueryProvider({ children }: React.PropsWithChildren) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default QueryProvider;
