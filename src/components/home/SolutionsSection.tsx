import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Розничная торговля',
      description: 'Комплексные решения для магазинов, супермаркетов и торговых центров',
      icon: 'ShoppingCart',
      features: ['Дисплеи покупателя', 'Digital Signage', 'Интерактивные киоски']
    },
    {
      title: 'HORECA',
      description: 'Медиа-решения для ресторанов, отелей и развлекательных центров',
      icon: 'Coffee',
      features: ['Меню-борды', 'Информационные табло', 'Навигация']
    },
    {
      title: 'Транспорт',
      description: 'Информационные системы для аэропортов, вокзалов и общественного транспорта',
      icon: 'Plane',
      features: ['Табло прибытия/отправления', 'Навигация', 'Реклама']
    },
    {
      title: 'Корпоративный сектор',
      description: 'Видеостены и презентационное оборудование для офисов',
      icon: 'Building2',
      features: ['Конференц-залы', 'Ресепшн зоны', 'Ситуационные центры']
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-slide-up">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 text-base px-4 py-1.5">
            Отраслевые решения
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Решения для вашего бизнеса
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексные медиа-решения для различных отраслей экономики
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={solution.icon as any} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="mr-2 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
