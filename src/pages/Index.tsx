import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/', isLink: true },
    { name: 'Каталог', href: '/catalog', isLink: true },
    { name: 'Решения', href: '#solutions', isLink: false },
    { name: 'Проекты', href: '#projects', isLink: false },
    { name: 'Поддержка', href: '#support', isLink: false },
    { name: 'О компании', href: '#about', isLink: false },
    { name: 'Контакты', href: '#contacts', isLink: false },
    { name: 'Новости', href: '#news', isLink: false }
  ];

  const products = [
    {
      id: 1,
      name: 'Дисплей покупателя DS-15',
      category: 'Дисплеи',
      price: '12 500 ₽',
      description: 'Высококонтрастный 15" LCD дисплей для розничной торговли',
      features: ['Full HD', 'USB/RS232', 'Яркость 400 cd/m²'],
      icon: 'Monitor'
    },
    {
      id: 2,
      name: 'Медиаплеер MP-4K Pro',
      category: 'Медиаплееры',
      price: '28 900 ₽',
      description: 'Профессиональный медиаплеер с поддержкой 4K',
      features: ['4K HDR', 'Android 11', '32GB память'],
      icon: 'Tv'
    },
    {
      id: 3,
      name: 'LED экран Outdoor 55"',
      category: 'Рекламные экраны',
      price: '89 000 ₽',
      description: 'Уличный рекламный экран с высокой яркостью',
      features: ['IP65', '2500 cd/m²', 'Wi-Fi/LAN'],
      icon: 'Tv2'
    },
    {
      id: 4,
      name: 'Видеостена VSW-46',
      category: 'Видеостены',
      price: '145 000 ₽',
      description: 'Профессиональная видеостена 2x2 с узкой рамкой',
      features: ['Узкая рамка 1.8мм', '700 cd/m²', '24/7'],
      icon: 'LayoutGrid'
    }
  ];

  const benefits = [
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: 'Официальная гарантия до 3 лет на все оборудование'
    },
    {
      icon: 'Rocket',
      title: 'Быстрая доставка',
      description: 'Доставка по России за 2-5 дней, экспресс за 24 часа'
    },
    {
      icon: 'Headphones',
      title: 'Техподдержка 24/7',
      description: 'Круглосуточная техническая поддержка специалистов'
    },
    {
      icon: 'Settings',
      title: 'Индивидуальные решения',
      description: 'Разработка решений под конкретные задачи бизнеса'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Rocket" size={28} className="text-primary" />
            <span className="text-2xl font-heading font-bold">Tsiolkovskiy</span>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => 
              item.isLink ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex">
              Связаться с нами
            </Button>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => 
                    item.isLink ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="container relative py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
              Профессиональное оборудование
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Технологии для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Поставляем профессиональное медиа-оборудование: дисплеи, медиаплееры, 
              рекламные экраны и видеостены. Инновационные решения для розничной торговли, 
              HORECA, транспорта и корпоративного сектора.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog">
                <Button size="lg" className="text-lg">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-slide-up">
            <Badge className="mb-4 bg-secondary/20 text-secondary hover:bg-secondary/30">
              Каталог
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              Популярное оборудование
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональные решения для бизнеса любого масштаба
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={product.icon as any} size={28} className="text-primary" />
                  </div>
                  <Badge variant="outline" className="w-fit mb-2">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-heading font-bold text-primary">
                        {product.price}
                      </span>
                      <Button size="sm" variant="ghost">
                        <Icon name="ArrowRight" size={18} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button size="lg" variant="outline">
                Смотреть весь каталог
                <Icon name="ExternalLink" size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный подход к каждому проекту
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={benefit.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container">
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl lg:text-4xl font-heading mb-4">
                Готовы начать проект?
              </CardTitle>
              <CardDescription className="text-lg">
                Получите бесплатную консультацию специалиста и индивидуальное предложение
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Написать нам
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Rocket" size={24} className="text-primary" />
                <span className="text-xl font-heading font-bold">Tsiolkovskiy</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное медиа-оборудование для вашего бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#news" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Проекты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
                <li><a href="#solutions" className="hover:text-primary transition-colors">Решения</a></li>
                <li><a href="#support" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@tsiolkovskiy.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Tsiolkovskiy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;