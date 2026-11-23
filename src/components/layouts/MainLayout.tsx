import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FloatingActions from "../FloatingActions";
import SmoothScroll from "../SmoothScroll";
import { ModalProvider, useModal } from "../../context/ModalContext";
import { SiteSeo } from "../../SEO";

const EnquiryModal = lazy(
  () => import("../../module/Enquiry/components/EnquiryModal"),
);

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
        {isDemoModalOpen && (
          <Suspense fallback={null}>
            <EnquiryModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
          </Suspense>
        )}
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
