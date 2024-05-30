"use client";

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

// Define the shape of the context state
type AuthContextProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

// Define the initial values for the context
const initialContextValues: AuthContextProps = {
  currentStep: 1,
  setCurrentStep: () => {
    // No-op function for initial context
    console.warn("setCurrentStep is not initialized");
  },
};

// Create the context with the initial values
const AuthContext = createContext<AuthContextProps>(initialContextValues);

// AuthContextProvider component to provide context to children components
export function AuthContextProvider({ children }: PropsWithChildren<{}>) {
  const [currentStep, setCurrentStep] = useState<number>(
    initialContextValues.currentStep
  );

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ currentStep, setCurrentStep }),
    [currentStep]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);

  // Handle the case where the context is used outside of its provider
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }

  return context;
};
