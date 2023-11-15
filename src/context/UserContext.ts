// hook
import { createContext } from "react";

// type
import { UserContextValues } from "../Types/Types";

// create the context to be used by the provider
export const userIdContext = createContext<UserContextValues | null>(null);
