import React, { createContext } from "react";
import { UseFlatDataReturn } from "../../hooks/useFlatsData";

export const FetchContext = createContext(undefined) as React.Context<UseFlatDataReturn | undefined>;