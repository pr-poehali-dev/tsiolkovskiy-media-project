const StatsSection = () => {
  const stats = [
    { value: '500+', label: 'Довольных клиентов' },
    { value: '1000+', label: 'Установленных систем' },
    { value: '10+', label: 'Лет на рынке' },
    { value: '24/7', label: 'Техподдержка' }
  ];

  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
