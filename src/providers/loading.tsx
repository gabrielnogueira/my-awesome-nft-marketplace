import React, { createContext, useContext, useState } from "react";

export interface LoadingProps {
  isLoading?: boolean;
}
export const LoadingContext = createContext({});

export function withLoadingContext<T>(Component: React.FC<T & LoadingProps>) {
  return (props: T) => {
    const contextProps = useContext(LoadingContext);
    return <Component {...contextProps} {...props} />;
  };
}
