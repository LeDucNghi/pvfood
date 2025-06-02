"use client";

import * as React from "react";

import { SWRConfig } from "swr";
import axiosClient from "@/app/lib/api/axios-client";

export interface ISWRConfigWrapperProps {
  children: React.ReactNode;
}

export default function SWRConfigWrapper({ children }: ISWRConfigWrapperProps) {
  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        fetcher: (url) => axiosClient.get(url),
      }}
    >
      {children}
    </SWRConfig>
  );
}
