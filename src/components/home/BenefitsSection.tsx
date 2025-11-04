import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: 'Официальная гарантия до 3 лет на все оборудование от ведущих производителей'
    },
    {
      icon: 'Rocket',
      title: 'Быстрая доставка',
      description: 'Доставка по России за 2-5 дней. Экспресс-доставка по Москве за 24 часа'
    },
    {
      icon: 'Headphones',
      title: 'Техподдержка 24/7',
      description: 'Круглосуточная техническая поддержка квалифицированных специалистов'
    },
    {
      icon: 'Settings',
      title: 'Индивидуальные решения',
      description: 'Разработка и внедрение решений под конкретные задачи вашего бизнеса'
    },
    {
      icon: 'ShieldCheck',
      title: 'Сертификация',
      description: 'Все оборудование имеет необходимые сертификаты и разрешения РФ'
    },
    {
      icon: 'Users',
      title: 'Профессиональная команда',
      description: 'Более 50 реализованных проектов и 10+ лет опыта на рынке'
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-slide-up">
          <Badge className="mb-4 bg-secondary/20 text-secondary hover:bg-secondary/30 text-base px-4 py-1.5">
            Преимущества
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Надежный партнер в мире профессионального медиа-оборудования
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={benefit.icon as any} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {benefit.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
