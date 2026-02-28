import { Header, Footer } from "@/components/layout";
import {
  Hero,
  HowItWorks,
  IntegrationsGrid,
  OpenSourceSection,
  CTASection,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <Header />
      <Hero />
      <HowItWorks />
      <IntegrationsGrid />
      <OpenSourceSection />
      <CTASection />
      <Footer />
    </main>
  );
}
