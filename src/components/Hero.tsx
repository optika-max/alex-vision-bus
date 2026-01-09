import { Button } from "@/components/ui/button";
import alexLogo from "@/assets/alex-logo.png";

export const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("booking-form");
    formElement?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <img src={alexLogo} alt="Alex Офтальмологічний Центр" className="h-16 md:h-20 w-auto" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">Діагностика      зору </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Відновлюємо зір. Повертаємо радість життя.
            </p>
            
            <Button size="lg" variant="hero" className="text-lg h-14 px-8 w-full sm:w-auto" onClick={scrollToForm}>
              Записатися на діагностику
            </Button>
            
            <div className="flex items-center gap-6 pt-4 text-base md:text-lg text-muted-foreground">
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
          
          {/* Right side intentionally left empty - video is the visual focus */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>;
};