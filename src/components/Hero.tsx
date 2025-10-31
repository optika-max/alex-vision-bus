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
    <section className="relative min-h-screen flex items-center bg-secondary">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Ліва колонка з текстом */}
          <div className="space-y-10 animate-fade-in">
            <img 
              src={alexLogo} 
              alt="Alex Офтальмологічний Центр" 
              className="h-12 w-auto mb-12"
            />
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Сучасна<br />
                Офтальмохірургія<br />
                в Білій Церкві
              </h1>
              
              <p className="text-2xl md:text-3xl font-medium text-foreground/80 leading-tight">
                Діагностика — запорука<br />
                комфортного завтра.
              </p>
            </div>
            
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-lg font-medium text-foreground">м. Тетіїв, вул. Цвіткова, 26</p>
                  <p className="text-base text-foreground/70">Центральна районна лікарня</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-lg font-medium text-foreground">Запис за телефоном</p>
                  <a href="tel:0800332143" className="text-xl font-bold text-foreground hover:text-foreground/70 transition-colors">
                    0 800 332 143
                  </a>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="text-lg h-16 px-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full"
              onClick={scrollToForm}
            >
              Записатися на діагностику
            </Button>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 text-base text-foreground/70">
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
          
          {/* Права колонка з зображенням */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <img 
                src={busExterior} 
                alt="Офтальмологічний мобільний кабінет Alex" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
