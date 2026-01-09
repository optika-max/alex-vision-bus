import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force play on mobile
      video.play().catch(() => {
        // If autoplay fails, try again on user interaction
        const playOnInteraction = () => {
          video.play();
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('click', playOnInteraction);
        };
        document.addEventListener('touchstart', playOnInteraction, { once: true });
        document.addEventListener('click', playOnInteraction, { once: true });
      });
    }
  }, []);

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
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight -mt-4">Діагностика зору</h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 max-w-xl font-medium drop-shadow-md">
              Відновлюємо зір. Повертаємо радість життя.
            </p>
            
            <Button size="lg" variant="hero" className="text-lg h-14 px-8 w-full sm:w-auto mt-8" onClick={scrollToForm}>
              Записатися на діагностику
            </Button>
            
            <div className="flex items-center gap-6 pt-4 text-base md:text-lg text-foreground/80 font-medium drop-shadow-md">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-accent rounded-full shadow-sm"></span>
                <span>~30 хвилин</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-accent rounded-full shadow-sm"></span>
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
