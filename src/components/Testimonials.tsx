import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Марія Петренко",
      age: 67,
      text: "Дуже вдячна лікарям центру Alex! Після операції катаракти знову бачу світ яскравим і чітким. Професіонали своєї справи!",
      rating: 5,
    },
    {
      name: "Іван Коваленко",
      age: 72,
      text: "Не вірив, що так швидко можна відновити зір. Операція пройшла безболісно, а персонал дуже уважний і турботливий.",
      rating: 5,
    },
    {
      name: "Олена Шевченко",
      age: 58,
      text: "Офтальмобус — це дуже зручно! Не треба їхати до Києва. Сучасне обладнання та кваліфіковані лікарі прямо у нашому місті.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Відгуки наших пацієнтів
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Нам довіряють тисячі людей по всій Україні
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border bg-gradient-to-br from-card to-secondary/5"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-foreground text-base leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age} років</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
