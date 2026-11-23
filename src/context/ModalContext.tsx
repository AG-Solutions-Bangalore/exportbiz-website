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

  // Optimized smart auto-popup: triggers on user engagement (scroll > 350px, exit intent, or 7s timer)
  // Ensures 0 impact on initial PageSpeed/Speed Index while capturing maximum real visitor leads
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeenAutoPopup = sessionStorage.getItem("hasSeenEnquiryPopup");
    if (hasSeenAutoPopup) return;

    let triggered = false;

    const triggerPopup = () => {
      if (triggered) return;
      triggered = true;
      sessionStorage.setItem("hasSeenEnquiryPopup", "true");
      setIsDemoModalOpen(true);
      cleanup();
    };

    const handleScroll = () => {
      if (window.scrollY > 350) {
        triggerPopup();
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        triggerPopup();
      }
    };

    const timer = setTimeout(() => {
      triggerPopup();
    }, 7000);

    const cleanup = () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return cleanup;
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
