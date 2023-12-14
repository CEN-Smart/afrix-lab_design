"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

type ChakraProvidersProps = {
  children: React.ReactNode;
};

export function ChakraProviders({ children }: ChakraProvidersProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
