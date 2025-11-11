import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import alexLogo from "@/assets/alex-logo.png";
import busExterior from "@/assets/bus-exterior-hero.png";

export const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("booking-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Mobile background image */}
      <div 
        className="absolute inset-0 lg:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${busExterior})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95"></div>
      </div>
      
      {/* Desktop gradient background */}
      <div className="absolute inset-0 hidden lg:block bg-gradient-to-br from-secondary/60 via-secondary/40 to-secondary/20"></div>
      
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <img 
              src={alexLogo} 
              alt="Alex Офтальмологічний Центр" 
              className="h-16 md:h-20 w-auto"
            />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Діагностика зору біля вашого дому
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Відновлюємо зір. Повертаємо радість життя.
            </p>
            
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg h-14 px-8 w-full sm:w-auto"
              onClick={scrollToForm}
            >
              Записатися на діагностику
            </Button>
            
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>~30 хвилин</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Безболісно</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={busExterior} 
                alt="Офтальмологічний мобільний кабінет Alex" 
                className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
