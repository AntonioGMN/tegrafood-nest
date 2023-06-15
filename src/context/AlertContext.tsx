"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast, ToastContainer } from "react-toastify";

type AlertContextInterface = {
  alertErro: (message: string) => void;
  setMessage: Dispatch<SetStateAction<string>>;
};

export const AlertContext = createContext({} as AlertContextInterface);

export default function AlertProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState("");

  function alertErro(message: string) {
    // toast.error(message, {
    //   position: toast.POSITION.TOP_LEFT,
    // });
  }

  return (
    <AlertContext.Provider value={{ alertErro, setMessage }}>
      {children}
      <ToastContainer />
    </AlertContext.Provider>
  );
}

export const useAlert = () => useContext(AlertContext);
