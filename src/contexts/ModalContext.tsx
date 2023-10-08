import { createContext, useState, useContext } from "react";

export interface ModalContextType {
  profileModal: boolean;
  setProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  companiesModal: boolean;
  setCompaniesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ModalContextType | null>(null);

export default function ModalProvider(props:{
  children: React.ReactNode
}){
  const [profileModal, setProfileModal] = useState(false);
  const [companiesModal, setCompaniesModal] = useState(false);
  return (<Context.Provider value={{
    profileModal,
    setProfileModal,
    companiesModal,
    setCompaniesModal,
  }}>
    {props.children}
  </Context.Provider>)
}

export const useModalContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}
