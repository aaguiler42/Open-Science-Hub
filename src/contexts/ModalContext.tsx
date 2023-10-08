import { createContext, useState, useContext } from "react";

export interface ModalContextType {
  profileModal: boolean;
  setProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  companiesModal: boolean;
  setCompaniesModal: React.Dispatch<React.SetStateAction<boolean>>;
  statsModal: boolean;
  setStatsModal: React.Dispatch<React.SetStateAction<boolean>>;
  chatModal: boolean;
  setChatModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ModalContextType | null>(null);

export default function ModalProvider(props:{
  children: React.ReactNode
}){
  const [profileModal, setProfileModal] = useState(false);
  const [companiesModal, setCompaniesModal] = useState(false);
  const [statsModal, setStatsModal] = useState(false);
  const [chatModal, setChatModal] = useState(false);
  return (<Context.Provider value={{
    profileModal,
    setProfileModal,
    companiesModal,
    setCompaniesModal,
    statsModal,
    setStatsModal,
    chatModal,
    setChatModal
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
