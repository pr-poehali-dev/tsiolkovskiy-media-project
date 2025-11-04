import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
