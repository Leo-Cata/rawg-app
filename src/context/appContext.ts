// hook
import { createContext } from "react";

// type
import { appContextValues } from "../Types/Types";

// create the context to be used by the provider
export const appContext = createContext<appContextValues | null>(null);
