import React, { createContext, useContext } from "react";

export interface LoadingProps {
  isLoading?: boolean;
}
export const LoadingContext = createContext({});
//this provider handles the loading scenarios
//all components that have a loading state should listen to this provider to 
//show the correct state. used to show skeleton loading of the components when the page is not ready
export function withLoadingContext<T>(Component: React.FC<T & LoadingProps>) {
  return (props: T) => {
    const contextProps = useContext(LoadingContext);
    return <Component {...contextProps} {...props} />;
  };
}
