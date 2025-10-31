import { CheckCircle2, Clock, Shield, Sparkles } from "lucide-react";
import busExterior from "@/assets/bus-exterior.png";
export const DiagnosticsInfo = () => {
  const included = ["Перевірка гостроти зору", "Авторефрактометрія", "Вимірювання внутрішньоочного тиску", "Біомікроскопія переднього відрізка ока", "Офтальмоскопія", "Консультація офтальмолога"];
  const features = [{
    icon: Clock,
    text: "~30 хвилин"
  }, {
    icon: Shield,
    text: "Безболісно"
  }, {
    icon: Sparkles,
    text: "Сучасні технології"
  }];
  return <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent opacity-20 blur-2xl rounded-3xl"></div>
              <img src={busExterior} alt="Офтальмобус Alex - мобільний діагностичний центр" className="relative w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 lg:text-4xl">Що входить у діагностику в офтальмобусі?</h2>
              <p className="text-xl text-muted-foreground">
                Комплексна перевірка зору на найсучаснішому обладнанні
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => {
              const Icon = feature.icon;
              return <div key={index} className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{feature.text}</span>
                  </div>;
            })}
            </div>

            <div className="space-y-4">
              {included.map((item, index) => <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{item}</span>
                </div>)}
            </div>

            <div className="bg-accent/20 border-l-4 border-accent px-6 py-5 rounded-r-xl">
              <p className="text-2xl font-bold text-foreground">
                Вартість: 500 грн
              </p>
              <p className="text-muted-foreground mt-1">
                Повна діагностика за доступною ціною
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};