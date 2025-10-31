import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import alexLogo from "@/assets/alex-logo.png";
import busExterior from "@/assets/bus-exterior.png";

export const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("booking-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-muted/30 via-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 lg:py-20">
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
            
            <div className="bg-accent/20 border-l-4 border-accent px-6 py-4 rounded-r-lg">
              <p className="text-lg font-medium text-foreground">
                📍 м. Тетіїв, вул. Цвіткова, 26
              </p>
              <p className="text-lg font-medium text-foreground mt-1">
                📅 Центральна районна лікарня
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg h-14 px-8"
                onClick={scrollToForm}
              >
                Записатися на діагностику
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg h-14 px-8"
                asChild
              >
                <a href="tel:0800330149">
                  <Phone className="mr-2" />
                  0800 330 149
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>~30 хвилин</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Безболісно</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>500 грн</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center">
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
