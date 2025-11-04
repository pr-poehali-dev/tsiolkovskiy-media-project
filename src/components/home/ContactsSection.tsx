import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;
