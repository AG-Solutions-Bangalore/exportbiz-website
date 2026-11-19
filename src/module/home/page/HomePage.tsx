import Hero from "../components/Hero";
import MetricsBar from "../components/MetricsBar";
import PlatformFeatures from "../components/PlatformFeatures";
import DocumentManagement from "../components/DocumentManagement";
import FeatureGrid from "../components/FeatureGrid";
import Solutions from "../components/Solutions";
import CtaBanner from "../components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
     
      <PlatformFeatures />
      <DocumentManagement />
      <FeatureGrid />
      <Solutions />
      <CtaBanner />
    </>
  );
}
