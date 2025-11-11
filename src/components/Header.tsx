import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import alexMonogram from "@/assets/alex-monogram.png";

export const Header = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("booking-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-2">
          <img 
            src={alexMonogram} 
            alt="Alex" 
            className="h-10 sm:h-12 w-auto"
          />
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button 
              variant="outline"
              size="lg"
              asChild
            >
              <a href="tel:0800332143" className="flex items-center">
                <Phone className="h-5 w-5" />
                <span className="hidden sm:inline sm:ml-2">0 800 332 143</span>
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="hero"
              onClick={scrollToForm}
              className="text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Записатися на діагностику</span>
              <span className="sm:hidden">Записатися</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
