export const Stats = () => {
  const stats = [
    { number: "10", label: "кращих офтальмохірургів України" },
    { number: "14,639", label: "задоволених пацієнтів" },
    { number: "2,121", label: "операцій з видалення катаракти" },
    { number: "637", label: "успішні блефаропластики та інші косметичні операції" },
    { number: "154", label: "операції з корекції косоокості" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Цифри, які говорять самі за себе
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Довіра тисяч пацієнтів, підтверджена роками успішної роботи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold mb-3 text-accent">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/90 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
