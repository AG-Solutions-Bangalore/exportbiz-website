import CtaBanner from "../components/CtaBanner";
import DocumentManagement from "../components/DocumentManagement";
import FeatureGrid from "../components/FeatureGrid";
import Hero from "../components/Hero";
import PlatformFeatures from "../components/PlatformFeatures";
import Solutions from "../components/Solutions";

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
