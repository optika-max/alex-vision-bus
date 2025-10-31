import { Award, Heart, MapPin, Microscope } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Award,
      title: "Найкращі офтальмохірурги України",
      description: "Досвід, якому довіряють",
    },
    {
      icon: Microscope,
      title: "Найсучасніше обладнання",
      description: "Точність і безпека кожної операції",
    },
    {
      icon: Heart,
      title: "Комфортний сервіс",
      description: "Щира турбота про пацієнта на кожному етапі",
    },
    {
      icon: MapPin,
      title: "Поруч із вашим домом",
      description: "Якісне лікування без поїздок до Києва, економія часу та грошей",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                  {badge.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
