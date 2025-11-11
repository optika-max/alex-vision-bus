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
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBadges />
      <DiagnosticsInfo />
      
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg h-14 px-8"
            onClick={() => {
              const formElement = document.getElementById("booking-form");
              formElement?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Записатися на діагностику
          </Button>
        </div>
      </section>
      
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
