import { useContext } from "react";
import { FlatContext } from "../utils/context";

const useFlatContext = () => {
  const context = useContext(FlatContext);
  if (!context) {
    throw new Error("useFlatContext must be used within a FlatContextProvider");
  }
  return context;
};

export default useFlatContext;