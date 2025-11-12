import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import alexMonogram from "@/assets/alex-monogram.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Що входить у діагностику?", id: "diagnostics" },
    { label: "Наші послуги", id: "services" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <img 
            src={alexMonogram} 
            alt="Alex" 
            className="h-10 sm:h-12 w-auto"
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg text-foreground hover:text-primary transition-colors font-medium py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

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
              onClick={() => scrollToSection("booking-form")}
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
