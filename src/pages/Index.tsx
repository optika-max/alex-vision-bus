import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { DiagnosticsInfo } from "@/components/DiagnosticsInfo";
import { BookingForm } from "@/components/BookingForm";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBadges />
      <DiagnosticsInfo />
      <Services />
      <Stats />
      <BookingForm />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
