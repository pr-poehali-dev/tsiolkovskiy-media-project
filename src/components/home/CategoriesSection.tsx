import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: 'Дисплеи покупателя',
      description: 'Профессиональные LCD дисплеи для торговых точек',
      icon: 'Monitor',
      count: '15+ моделей',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 2,
      name: 'Медиаплееры',
      description: 'Мощные решения для воспроизведения контента',
      icon: 'Tv',
      count: '12+ моделей',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 3,
      name: 'Рекламные экраны',
      description: 'Уличные и интерьерные LED экраны',
      icon: 'Tv2',
      count: '20+ моделей',
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      id: 4,
      name: 'Видеостены',
      description: 'Профессиональные видеостены любого масштаба',
      icon: 'LayoutGrid',
      count: '8+ решений',
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  return (
    <section id="categories" className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-slide-up">
          <Badge className="mb-4 bg-secondary/20 text-secondary hover:bg-secondary/30 text-base px-4 py-1.5">
            Категории оборудования
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Наши категории
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор профессионального оборудования для любых задач
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={category.id} to="/catalog">
              <Card 
                className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-scale-in h-full cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Package" size={16} className="mr-2" />
                    {category.count}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
