import React, { createContext } from "react";
import { Flat, UseFlatDataReturn } from "../../hooks/useFlatsData";

interface FlatContextType {
  flat: Flat | undefined;
  setFlat: (flat: Flat) => void;
}

export const FetchContext = createContext(undefined) as React.Context<UseFlatDataReturn | undefined>;
export const FlatContext = createContext<FlatContextType | undefined>(undefined);