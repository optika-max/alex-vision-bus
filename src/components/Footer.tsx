import { Phone, MapPin, Clock } from "lucide-react";
import alexLogo from "@/assets/alex-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <img 
              src={alexLogo} 
              alt="Alex Офтальмологічний Центр" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Відновлюємо зір. Повертаємо радість життя. Офтальмологічний центр Alex — ваш партнер у здоров'ї очей.
            </p>
            <a 
              href="https://alexcentr.com.ua" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              alexcentr.com.ua
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Контакти</h3>
            <div className="space-y-3">
              <a 
                href="tel:0800332143"
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 group-hover:text-accent transition-colors" />
                <div>
                  <div className="font-medium">0 800 332 143</div>
                  <div className="text-sm text-primary-foreground/60">Безкоштовно по Україні</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Локація офтальмобуса</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <div>
                  <div>м. Тетіїв</div>
                  <div>вул. Цвіткова, 26</div>
                  <div className="text-sm text-primary-foreground/60 mt-1">
                    Центральна районна лікарня
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <Clock className="w-5 h-5 mt-0.5 text-accent" />
                <div className="text-sm">
                  Режим роботи: за попереднім записом
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Alex Офтальмологічний Центр. Всі права захищено.</p>
          <p className="mt-2">Ліцензія від 13.05.2021 р. №919 «Про ліцензування медичної практики»</p>
        </div>
      </div>
    </footer>
  );
};
