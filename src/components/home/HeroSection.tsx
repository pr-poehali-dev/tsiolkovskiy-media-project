import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="container relative py-24 lg:py-32">
        <div className="max-w-4xl animate-fade-in">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 text-base px-4 py-1.5">
            Профессиональное медиа-оборудование
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Технологии будущего для вашего бизнеса
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            Поставляем профессиональное медиа-оборудование: дисплеи покупателя, медиаплееры, 
            рекламные экраны и видеостены. Инновационные решения для розничной торговли, 
            HORECA, транспорта и корпоративного сектора.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg h-14 px-8" asChild>
              <Link to="/catalog">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Смотреть каталог
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
              <a href="#contacts">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
