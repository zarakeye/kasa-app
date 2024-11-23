import React from "react";
import useFlatsData, { Flat, UseFlatDataReturn } from "../../hooks/useFlatsData";
import { FetchContext, FlatContext } from "../context";
// import { Link } from "react-router-dom";

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const data: UseFlatDataReturn = useFlatsData();

  return (
    <FetchContext.Provider value={data}>
      {children}
    </FetchContext.Provider>
  )
};


export const FlatProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [flat, setFlat] = React.useState<Flat | undefined>(undefined); // Define the state for the flat data

  return (
    <FlatContext.Provider value={{ flat, setFlat }}>
        {children}
    </FlatContext.Provider>
  )
};