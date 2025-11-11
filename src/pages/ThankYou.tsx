import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/50 via-accent/30 to-secondary/40 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-card p-8 lg:p-12 rounded-2xl shadow-elegant border-2 border-primary/20 text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Вашу заявку прийнято
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Протягом декількох хвилин наш оператор зв'яжеться з вами.
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
