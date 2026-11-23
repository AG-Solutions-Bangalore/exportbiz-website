import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FloatingActions from "../FloatingActions";
import SmoothScroll from "../SmoothScroll";
import { ModalProvider, useModal } from "../../context/ModalContext";
import { EnquiryModal } from "../../module/Enquiry";
import { SiteSeo } from "../../SEO";

function LayoutContent() {
  const { isDemoModalOpen, closeDemoModal } = useModal();
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-white text-navy-800">
        <SiteSeo />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
        <EnquiryModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
      </div>
    </SmoothScroll>
  );
}

export default function MainLayout() {
  return (
    <ModalProvider>
      <LayoutContent />
    </ModalProvider>
  );
}
