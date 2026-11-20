import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

interface ModalContextType {
  isDemoModalOpen: boolean;
  openDemoModal: () => void;
  closeDemoModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = useCallback(() => {
    setIsDemoModalOpen(true);
  }, []);

  const closeDemoModal = useCallback(() => {
    setIsDemoModalOpen(false);
  }, []);

  // One-time automatic popup trigger on initial visit
  useEffect(() => {
    const hasSeenAutoPopup = sessionStorage.getItem("hasSeenEnquiryPopup");
    if (!hasSeenAutoPopup) {
      const timer = setTimeout(() => {
        setIsDemoModalOpen(true);
        sessionStorage.setItem("hasSeenEnquiryPopup", "true");
      }, 2500); // Trigger smoothly after 2.5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <ModalContext.Provider value={{ isDemoModalOpen, openDemoModal, closeDemoModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
