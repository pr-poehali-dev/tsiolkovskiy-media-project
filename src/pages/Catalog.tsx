import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Решения', href: '/#solutions' },
    { name: 'Проекты', href: '/#projects' },
    { name: 'Поддержка', href: '/#support' },
    { name: 'О компании', href: '/#about' },
    { name: 'Контакты', href: '/#contacts' },
    { name: 'Новости', href: '/#news' }
  ];

  const categories = [
    'Дисплеи покупателей',
    'Медиаплееры',
    'Рекламные экраны',
    'Видеостены',
    'Интерактивные панели',
    'Стойки и крепления'
  ];

  const features = [
    '4K разрешение',
    'Full HD',
    'Сенсорный экран',
    'Wi-Fi',
    'Android',
    'IP65 защита',
    '24/7 работа',
    'HDR'
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Дисплей покупателя DS-15',
      category: 'Дисплеи покупателей',
      price: 12500,
      description: 'Высококонтрастный 15" LCD дисплей для розничной торговли',
      features: ['Full HD', 'USB/RS232', 'Яркость 400 cd/m²'],
      icon: 'Monitor',
      inStock: true
    },
    {
      id: 2,
      name: 'Дисплей покупателя DS-20 Touch',
      category: 'Дисплеи покупателей',
      price: 18900,
      description: '20" сенсорный дисплей с емкостной технологией',
      features: ['Full HD', 'Сенсорный экран', '10-точечное касание'],
      icon: 'Monitor',
      inStock: true
    },
    {
      id: 3,
      name: 'Медиаплеер MP-4K Pro',
      category: 'Медиаплееры',
      price: 28900,
      description: 'Профессиональный медиаплеер с поддержкой 4K',
      features: ['4K разрешение', 'Android', '32GB память'],
      icon: 'Tv',
      inStock: true
    },
    {
      id: 4,
      name: 'Медиаплеер MP-HD Basic',
      category: 'Медиаплееры',
      price: 14500,
      description: 'Компактный медиаплеер для Full HD контента',
      features: ['Full HD', 'Wi-Fi', '16GB память'],
      icon: 'Tv',
      inStock: true
    },
    {
      id: 5,
      name: 'LED экран Outdoor 55"',
      category: 'Рекламные экраны',
      price: 89000,
      description: 'Уличный рекламный экран с высокой яркостью',
      features: ['IP65 защита', '2500 cd/m²', 'Wi-Fi'],
      icon: 'Tv2',
      inStock: true
    },
    {
      id: 6,
      name: 'LED экран Indoor 43"',
      category: 'Рекламные экраны',
      price: 45000,
      description: 'Интерьерный рекламный экран для помещений',
      features: ['4K разрешение', '24/7 работа', 'Android'],
      icon: 'Tv2',
      inStock: true
    },
    {
      id: 7,
      name: 'Видеостена VSW-46',
      category: 'Видеостены',
      price: 145000,
      description: 'Профессиональная видеостена 2x2 с узкой рамкой',
      features: ['Узкая рамка 1.8мм', '700 cd/m²', '24/7 работа'],
      icon: 'LayoutGrid',
      inStock: true
    },
    {
      id: 8,
      name: 'Видеостена VSW-55 Ultra',
      category: 'Видеостены',
      price: 195000,
      description: 'Премиальная видеостена 55" с 4K разрешением',
      features: ['4K разрешение', 'Узкая рамка 0.9мм', 'HDR'],
      icon: 'LayoutGrid',
      inStock: false
    },
    {
      id: 9,
      name: 'Интерактивная панель IP-65',
      category: 'Интерактивные панели',
      price: 125000,
      description: 'Большая интерактивная панель для презентаций',
      features: ['4K разрешение', 'Сенсорный экран', 'Android'],
      icon: 'MonitorSmartphone',
      inStock: true
    },
    {
      id: 10,
      name: 'Интерактивная панель IP-86 Pro',
      category: 'Интерактивные панели',
      price: 185000,
      description: 'Профессиональная панель 86" для конференций',
      features: ['4K разрешение', '20-точечное касание', 'Wi-Fi'],
      icon: 'MonitorSmartphone',
      inStock: true
    },
    {
      id: 11,
      name: 'Напольная стойка FS-55',
      category: 'Стойки и крепления',
      price: 8500,
      description: 'Мобильная напольная стойка для экранов 32-55"',
      features: ['Регулировка высоты', 'Поворот 360°', 'Колеса с тормозом'],
      icon: 'PanelTop',
      inStock: true
    },
    {
      id: 12,
      name: 'Настенное крепление WM-75',
      category: 'Стойки и крепления',
      price: 4500,
      description: 'Универсальное настенное крепление до 75"',
      features: ['Наклон ±15°', 'Поворот ±45°', 'VESA до 600x400'],
      icon: 'PanelTop',
      inStock: true
    }
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const featureMatch = selectedFeatures.length === 0 || 
      selectedFeatures.some(feature => 
        product.features.some(pf => pf.includes(feature) || feature.includes(pf))
      );
    
    return categoryMatch && priceMatch && featureMatch;
  });

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedFeatures([]);
    setPriceRange([0, 200000]);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold text-lg">Фильтры</h3>
          {(selectedCategories.length > 0 || selectedFeatures.length > 0 || priceRange[0] > 0 || priceRange[1] < 200000) && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Сбросить
            </Button>
          )}
        </div>
      </div>

      <div>
        <h4 className="font-heading font-semibold mb-3">Цена</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={200000}
          step={1000}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{priceRange[0].toLocaleString()} ₽</span>
          <span>{priceRange[1].toLocaleString()} ₽</span>
        </div>
      </div>

      <div>
        <h4 className="font-heading font-semibold mb-3">Категории</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="text-sm cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-heading font-semibold mb-3">Характеристики</h4>
        <div className="space-y-2">
          {features.map(feature => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={`feature-${feature}`}
                checked={selectedFeatures.includes(feature)}
                onCheckedChange={() => toggleFeature(feature)}
              />
              <Label
                htmlFor={`feature-${feature}`}
                className="text-sm cursor-pointer"
              >
                {feature}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Rocket" size={28} className="text-primary" />
            <span className="text-2xl font-heading font-bold">Tsiolkovskiy</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
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
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Каталог оборудования
          </h1>
          <p className="text-xl text-muted-foreground">
            Найдено продуктов: {filteredProducts.length}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <Card>
                <CardContent className="pt-6">
                  <FilterContent />
                </CardContent>
              </Card>
            </div>
          </aside>

          <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
            <SheetTrigger asChild className="lg:hidden mb-4">
              <Button variant="outline" className="w-full">
                <Icon name="Filter" size={20} className="mr-2" />
                Фильтры
                {(selectedCategories.length > 0 || selectedFeatures.length > 0) && (
                  <Badge className="ml-2" variant="secondary">
                    {selectedCategories.length + selectedFeatures.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <div className="mt-8">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <Card className="p-12 text-center">
                <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Ничего не найдено
                </h3>
                <p className="text-muted-foreground mb-4">
                  Попробуйте изменить параметры фильтрации
                </p>
                <Button onClick={clearFilters}>
                  Сбросить фильтры
                </Button>
              </Card>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon name={product.icon as any} size={28} className="text-primary" />
                        </div>
                        {product.inStock ? (
                          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                            В наличии
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                            Под заказ
                          </Badge>
                        )}
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
                          <div>
                            <span className="text-2xl font-heading font-bold text-primary">
                              {product.price.toLocaleString()} ₽
                            </span>
                          </div>
                          <Button size="sm">
                            <Icon name="ShoppingCart" size={16} className="mr-1" />
                            Купить
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
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

export default Catalog;
