import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/', isLink: true },
    { name: 'Каталог', href: '/catalog', isLink: true },
    { name: 'Решения', href: '#solutions', isLink: false },
    { name: 'О компании', href: '#about', isLink: false },
    { name: 'Контакты', href: '#contacts', isLink: false }
  ];

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

  const stats = [
    { value: '500+', label: 'Довольных клиентов' },
    { value: '1000+', label: 'Установленных систем' },
    { value: '10+', label: 'Лет на рынке' },
    { value: '24/7', label: 'Техподдержка' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Icon name="Rocket" size={28} className="text-primary" />
            <span className="text-2xl font-heading font-bold">Tsiolkovskiy</span>
          </Link>

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
            <Button className="hidden md:inline-flex" asChild>
              <a href="#contacts">Связаться с нами</a>
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

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <Badge className="mb-4 bg-secondary/20 text-secondary hover:bg-secondary/30 text-base px-4 py-1.5">
                Контакты
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Готовы ответить на ваши вопросы и помочь подобрать оптимальное решение
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Телефон</CardTitle>
                        <CardDescription className="text-base">
                          <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                            +7 (495) 123-45-67
                          </a>
                          <br />
                          <a href="tel:+78001234567" className="hover:text-primary transition-colors">
                            8 (800) 123-45-67
                          </a>
                          <span className="text-xs"> (бесплатно по России)</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Email</CardTitle>
                        <CardDescription className="text-base">
                          <a href="mailto:info@tsiolkovskiy.ru" className="hover:text-primary transition-colors">
                            info@tsiolkovskiy.ru
                          </a>
                          <br />
                          <a href="mailto:sales@tsiolkovskiy.ru" className="hover:text-primary transition-colors">
                            sales@tsiolkovskiy.ru
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Адрес офиса</CardTitle>
                        <CardDescription className="text-base">
                          г. Москва, ул. Космонавтов, д. 1<br />
                          БЦ "Орбита", офис 42<br />
                          Пн-Пт: 9:00 - 18:00
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Техподдержка</CardTitle>
                        <CardDescription className="text-base">
                          Круглосуточно, 24/7<br />
                          Всегда на связи для наших клиентов
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                  <CardDescription className="text-base">
                    Заполните форму и наш менеджер свяжется с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Опишите ваш проект или задачу" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Rocket" size={24} className="text-primary" />
                <span className="text-xl font-heading font-bold">Tsiolkovskiy</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Профессиональное медиа-оборудование для вашего бизнеса
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Icon name="Phone" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Icon name="Mail" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Icon name="MessageCircle" size={18} />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Дисплеи покупателя</Link></li>
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Медиаплееры</Link></li>
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Рекламные экраны</Link></li>
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Видеостены</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#solutions" className="hover:text-primary transition-colors">Решения</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Техподдержка 24/7</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; 2024 Tsiolkovskiy. Все права защищены.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
