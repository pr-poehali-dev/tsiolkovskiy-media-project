import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 text-base px-4 py-1.5">
              О компании
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Tsiolkovskiy — профессиональное медиа-оборудование
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 text-left">
              <p>
                Компания <strong>Tsiolkovskiy</strong> — ведущий поставщик профессионального медиа-оборудования 
                в России. Мы специализируемся на комплексных решениях для Digital Signage, 
                видеостен, интерактивных систем и рекламных экранов.
              </p>
              <p>
                За 10+ лет работы мы реализовали более 500 проектов для компаний из различных сегментов: 
                от небольших розничных магазинов до крупных торговых центров, аэропортов и корпоративных офисов.
              </p>
              <p>
                Наша команда состоит из квалифицированных инженеров и специалистов по внедрению, 
                которые обеспечивают полный цикл работ: от проектирования до монтажа и технической поддержки.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Наша миссия</CardTitle>
                <CardDescription className="text-base">
                  Предоставлять инновационные медиа-решения, которые помогают бизнесу эффективно взаимодействовать с клиентами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Eye" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Наше видение</CardTitle>
                <CardDescription className="text-base">
                  Стать лидером рынка профессионального медиа-оборудования в России и СНГ
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Наши ценности</CardTitle>
                <CardDescription className="text-base">
                  Качество, надежность, инновации и клиентоориентированность во всем, что мы делаем
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
