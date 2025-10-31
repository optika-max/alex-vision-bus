import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Чи потрібна попередня підготовка до діагностики?",
      answer: "Ні, спеціальної підготовки не потрібно. Просто прийдіть у призначений час. Якщо ви носите контактні лінзи, бажано зняти їх за 2-3 години до огляду.",
    },
    {
      question: "Скільки часу займає діагностика?",
      answer: "Повна діагностика займає приблизно 30 хвилин. Це включає всі необхідні обстеження та консультацію з офтальмологом.",
    },
    {
      question: "Чи можна прийти без попереднього запису?",
      answer: "Рекомендуємо попередньо записатися, щоб уникнути черги та гарантувати собі зручний час. Але за можливості приймаємо і без запису.",
    },
    {
      question: "Які методи оплати ви приймаєте?",
      answer: "Ми приймаємо готівку та безготівкову оплату (картка). Вартість діагностики — 500 грн.",
    },
    {
      question: "Чи можна отримати довідку після діагностики?",
      answer: "Так, після огляду ви отримаєте висновок офтальмолога з результатами всіх обстежень та рекомендаціями.",
    },
    {
      question: "Що робити, якщо виявлять проблеми зі зором?",
      answer: "Якщо діагностика виявить проблеми, наш лікар надасть детальні рекомендації та запропонує план лікування. За необхідності ви маєте змогу звернутися до нашого центру в місті Біла Церква та продовжити лікування там.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Часті запитання
            </h2>
            <p className="text-xl text-muted-foreground">
              Відповіді на найпопулярніші питання про нашу послугу
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
