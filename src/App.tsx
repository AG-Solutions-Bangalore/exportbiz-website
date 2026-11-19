import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MetricsBar from "./components/MetricsBar";
import PlatformFeatures from "./components/PlatformFeatures";
import DocumentManagement from "./components/DocumentManagement";
import FeatureGrid from "./components/FeatureGrid";
import Solutions from "./components/Solutions";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-navy-800">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MetricsBar />
        <PlatformFeatures />
        <DocumentManagement />
        <FeatureGrid />
        <Solutions />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
