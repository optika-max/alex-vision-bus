import { Eye, Sparkles, Activity, Droplets, Scissors, Focus } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Лікування катаракти",
      description: "Відновлення чіткого зору",
    },
    {
      icon: Activity,
      title: "Лікування сітківки",
      description: "Лазерна та ін'єкційна терапія для збереження зору",
    },
    {
      icon: Focus,
      title: "Лікування глаукоми",
      description: "Контроль і зупинка прогресування хвороби лазерними та хірургічними методами",
    },
    {
      icon: Droplets,
      title: "Лікування синдрому сухого ока",
      description: "Відновлення комфорту та здоров'я очей за допомогою технології IPL",
    },
    {
      icon: Scissors,
      title: "Блефаропластика",
      description: "Естетична корекція та омолодження зони навколо очей",
    },
    {
      icon: Sparkles,
      title: "Лікування косоокості та двоїння",
      description: "Відновлення бінокулярного зору у дітей та дорослих",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Наші послуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Повний спектр офтальмологічних послуг від діагностики до складних операцій
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-to-br from-card to-secondary/10"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
