import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/50 via-accent/30 to-secondary/40 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-card p-8 lg:p-12 rounded-2xl shadow-elegant border-2 border-primary/20 text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
          Дякуємо за Вашу довіру!
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          Ми вже отримали ваш запит і дуже скоро з вами зв'яжеться наш адміністратор.
        </p>

        <div className="text-left mb-4 max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Що буде далі:
          </h2>
          
          <ul className="space-y-1.5 text-base md:text-lg text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Узгодимо зручний час візиту</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>З радістю чекатимемо на зустріч</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Проведемо турботливу діагностику зору</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Надамо детальні рекомендації саме для Вас</span>
            </li>
          </ul>
        </div>

        <p className="text-base md:text-lg text-muted-foreground mb-6">
          Ви - в надійних руках. З турботою, команда офтальмологічного центру «Алекс»
        </p>

        <Button 
          size="lg" 
          variant="hero"
          className="text-lg h-14 px-8"
          onClick={() => navigate("/")}
        >
          Повернутися на головну
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
