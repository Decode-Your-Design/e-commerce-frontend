import * as React from "react";

import { createContext } from "react";
// type appContextType = {
//   openToastify: boolean;
// };
// const AppContext= {
//   openToastify: false,
// };

export const appContext = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [openToastify, setOpenToastify] = React.useState(false);
const [backgroundColor,setBackgroundColor] = React.useState("")
  const [toastifyContent, setToastifyContent] = React.useState("");
  return (
    <appContext.Provider
      value={{
        setToastifyContent,
        toastifyContent,
        openToastify,
        setOpenToastify,
        backgroundColor,
        setBackgroundColor
      }}
    >
      {children}
    </appContext.Provider>
  );
};
