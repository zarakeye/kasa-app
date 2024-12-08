import { useContext } from "react";
import { FetchContext } from "../utils/context";

/**
 * Custom hook to access the FetchContext.
 * 
 * This hook provides access to data and methods from the FetchContext.
 * It should be used within a FetchContextProvider to ensure the context is available.
 * 
 * @throws Will throw an error if used outside of a FetchContextProvider.
 * @returns The context value from FetchContext.
 */
export const useFetchContext = () => {
  const context = useContext(FetchContext);
  if (context === undefined) {
    throw new Error("useFetchContext must be used within a FetchContextProvider");
  }
  return context;
};