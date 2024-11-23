import { useContext } from "react";
import { FetchContext } from "../utils/context";

export const useFetchContext = () => {
  const context = useContext(FetchContext);
  if (context === undefined) {
    throw new Error("useFetchContext must be used within a FetchContextProvider");
  }
  return context;
};