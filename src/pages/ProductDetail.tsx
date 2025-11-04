import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const navigation = [
    { name: 'Главная', href: '/', isLink: true },
    { name: 'Каталог', href: '/catalog', isLink: true },
    { name: 'Решения', href: '/#solutions', isLink: false },
    { name: 'Проекты', href: '/#projects', isLink: false },
    { name: 'Поддержка', href: '/#support', isLink: false },
    { name: 'О компании', href: '/#about', isLink: false },
    { name: 'Контакты', href: '/#contacts', isLink: false },
    { name: 'Новости', href: '/#news', isLink: false }
  ];

  const allProducts = {
    '1': {
      id: 1,
      name: 'Дисплей покупателя DS-15',
      category: 'Дисплеи покупателей',
      price: 12500,
      oldPrice: 15000,
      description: 'Высококонтрастный 15" LCD дисплей для розничной торговли',
      fullDescription: 'Профессиональный дисплей покупателя DS-15 предназначен для использования в розничной торговле. Высокое качество изображения, надежная конструкция и простота установки делают его идеальным решением для кассовых зон магазинов, супермаркетов и торговых центров.',
      features: ['Full HD разрешение (1920x1080)', 'USB и RS232 интерфейсы', 'Яркость 400 cd/m²', 'Контрастность 1000:1', 'Угол обзора 178°', 'Время отклика 5мс'],
      specifications: {
        'Диагональ': '15 дюймов',
        'Разрешение': '1920x1080 (Full HD)',
        'Тип матрицы': 'IPS LCD',
        'Яркость': '400 cd/m²',
        'Контрастность': '1000:1',
        'Интерфейсы': 'USB, RS232, HDMI',
        'Питание': '12V DC',
        'Размеры': '340 x 220 x 45 мм',
        'Вес': '1.2 кг'
      },
      icon: 'Monitor',
      inStock: true,
      warranty: '3 года',
      images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
    },
    '3': {
      id: 3,
      name: 'Медиаплеер MP-4K Pro',
      category: 'Медиаплееры',
      price: 28900,
      oldPrice: null,
      description: 'Профессиональный медиаплеер с поддержкой 4K',
      fullDescription: 'MP-4K Pro - это мощный медиаплеер для воспроизведения контента в разрешении 4K. Работает на базе Android, поддерживает все популярные форматы видео и имеет встроенную память 32GB для хранения контента. Идеален для рекламных экранов, информационных табло и цифровых вывесок.',
      features: ['4K разрешение', 'Android 11', '32GB встроенной памяти', 'Wi-Fi 5GHz', 'Bluetooth 5.0', 'HDMI 2.0'],
      specifications: {
        'Процессор': 'Quad-core ARM Cortex-A55',
        'Память RAM': '4GB DDR4',
        'Встроенная память': '32GB eMMC',
        'ОС': 'Android 11',
        'Видео': '4K UHD (3840x2160) 60fps',
        'Сеть': 'Wi-Fi 802.11ac, Ethernet',
        'Интерфейсы': 'HDMI 2.0, USB 3.0 x2',
        'Размеры': '120 x 120 x 25 мм',
        'Вес': '0.3 кг'
      },
      icon: 'Tv',
      inStock: true,
      warranty: '2 года',
      images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
    }
  };

  const product = allProducts[id as keyof typeof allProducts];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-12 text-center">
          <Icon name="PackageX" size={64} className="mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-heading font-bold mb-4">Товар не найден</h2>
          <p className="text-muted-foreground mb-6">Запрашиваемый товар не существует или был удален</p>
          <Link to="/catalog">
            <Button>
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Вернуться в каталог
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const relatedProducts = [
    {
      id: 2,
      name: 'Дисплей покупателя DS-20 Touch',
      price: 18900,
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Медиаплеер MP-HD Basic',
      price: 14500,
      image: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'LED экран Indoor 43"',
      price: 45000,
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
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

      <div className="container py-8">
        <div className="mb-6 animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => navigate('/catalog')}
            className="gap-2"
          >
            <Icon name="ChevronLeft" size={18} />
            Назад в каталог
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4 animate-scale-in">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                    selectedImage === index
                      ? 'border-primary shadow-lg'
                      : 'border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - изображение ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <div>
              <Badge variant="outline" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-heading font-bold text-primary">
                {product.price.toLocaleString()} ₽
              </span>
              {product.oldPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  {product.oldPrice.toLocaleString()} ₽
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              {product.inStock ? (
                <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30 border-green-500/30">
                  <Icon name="CheckCircle2" size={16} className="mr-1" />
                  В наличии
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                  <Icon name="Clock" size={16} className="mr-1" />
                  Под заказ
                </Badge>
              )}
              <Badge variant="outline">
                <Icon name="Shield" size={16} className="mr-1" />
                Гарантия {product.warranty}
              </Badge>
              <Badge variant="outline">
                <Icon name="Truck" size={16} className="mr-1" />
                Быстрая доставка
              </Badge>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Количество:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1 text-lg">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Добавить в корзину
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              <Button variant="outline" size="lg" className="w-full">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Sparkles" size={20} className="text-primary" />
                  Преимущества покупки
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Официальная гарантия {product.warranty}
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Бесплатная доставка при заказе от 50 000 ₽
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Техническая поддержка 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Возможность рассрочки и лизинга
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Подробное описание
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.fullDescription}
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Ключевые особенности
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Технические характеристики
                </h2>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Доставка и оплата
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Truck" size={20} className="text-primary" />
                      Варианты доставки
                    </h3>
                    <ul className="space-y-2 ml-7 text-muted-foreground">
                      <li>• Курьерская доставка по Москве - 500 ₽ (1-2 дня)</li>
                      <li>• Доставка по России - от 1000 ₽ (2-5 дней)</li>
                      <li>• Экспресс доставка - от 2000 ₽ (24 часа)</li>
                      <li>• Самовывоз из офиса - бесплатно</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-3 flex items-center gap-2">
                      <Icon name="CreditCard" size={20} className="text-primary" />
                      Способы оплаты
                    </h3>
                    <ul className="space-y-2 ml-7 text-muted-foreground">
                      <li>• Банковские карты (Visa, MasterCard, МИР)</li>
                      <li>• Безналичный расчет для юридических лиц</li>
                      <li>• Наличными при получении</li>
                      <li>• Рассрочка и лизинг</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div>
          <h2 className="text-3xl font-heading font-bold mb-8">
            Рекомендуемые товары
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-heading font-bold text-primary">
                      {item.price.toLocaleString()} ₽
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <footer className="py-12 border-t border-border mt-20">
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
                <li><a href="/#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="/#news" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="/#projects" className="hover:text-primary transition-colors">Проекты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
                <li><a href="/#solutions" className="hover:text-primary transition-colors">Решения</a></li>
                <li><a href="/#support" className="hover:text-primary transition-colors">Поддержка</a></li>
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

export default ProductDetail;
