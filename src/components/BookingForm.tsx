import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, User, CheckCircle } from "lucide-react";
export const BookingForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        variant: "destructive",
        title: "Помилка",
        description: "Будь ласка, заповніть всі поля"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявку відправлено!",
        description: "Ми зв'яжемося з вами найближчим часом"
      });
      setFormData({
        name: "",
        phone: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return <section id="booking-form" className="py-16 lg:py-24 bg-gradient-to-br from-secondary/50 via-accent/30 to-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Запишіться на діагностику в офтальмобусі</h2>
            <p className="text-xl text-muted-foreground">
              Заповніть форму, і наш фахівець зв'яжеться з вами для підтвердження запису
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 lg:p-10 rounded-2xl shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">
                Ім'я
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input id="name" type="text" placeholder="Введіть ваше ім'я" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="pl-11 h-12 text-base" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-semibold">
                Телефон
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input id="phone" type="tel" placeholder="+380 XX XXX XX XX" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} className="pl-11 h-12 text-base" required />
              </div>
            </div>

            <Button type="submit" size="lg" variant="hero" className="w-full h-14 text-lg" disabled={isSubmitting}>
              {isSubmitting ? "Відправляємо..." : <>
                  <CheckCircle className="mr-2" />
                  Записатися на прийом
                </>}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності
            </p>
          </form>

          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Або зателефонуйте нам прямо зараз:
            </p>
            <a href="tel:0800332143" className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-7 h-7" />
              0 800 332 143
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Безкоштовно по Україні
            </p>
          </div>
        </div>
      </div>
    </section>;
};