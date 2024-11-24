import React from "react";
import useFlatsData, { UseFlatDataReturn } from "../../hooks/useFlatsData";
import { FetchContext } from "../context";

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataContextProvider: React.FC<DataProviderProps> = ({ children }) => {
  const data: UseFlatDataReturn = useFlatsData();

  return (
    <FetchContext.Provider value={data}>
      {children}
    </FetchContext.Provider>
  )
};

