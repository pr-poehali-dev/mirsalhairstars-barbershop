import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    { name: "Классическая стрижка", price: "1500₽", duration: "45 мин" },
    { name: "Стрижка + борода", price: "2200₽", duration: "60 мин" },
    { name: "Королевское бритье", price: "1800₽", duration: "40 мин" },
    { name: "Стрижка машинкой", price: "1200₽", duration: "30 мин" },
    { name: "Оформление бороды", price: "1000₽", duration: "25 мин" },
    { name: "Мужская укладка", price: "800₽", duration: "20 мин" },
    { name: "Комплекс VIP", price: "3500₽", duration: "90 мин" },
    { name: "Детская стрижка", price: "1000₽", duration: "30 мин" },
  ];

  const masters = [
    {
      name: "Дмитрий Козлов",
      experience: "8 лет",
      specialty: "Классические стрижки",
    },
    { name: "Андрей Смирнов", experience: "6 лет", specialty: "Борода и усы" },
    {
      name: "Максим Петров",
      experience: "5 лет",
      specialty: "Современные стили",
    },
  ];

  const portfolio = [
    {
      image: "/img/536ff458-c56b-44ea-8716-0de85270b5df.jpg",
      style: "Классический фейд",
    },
    {
      image: "/img/422c324f-e7ea-4a64-9b9a-d2c8115f75ab.jpg",
      style: "Современный андеркат",
    },
    {
      image: "/img/0403ce65-5669-41e0-865e-fbe065f06425.jpg",
      style: "Винтажный стиль",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Scissors" size={32} className="text-orange-300" />
              <h1
                className="text-3xl font-bold"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                MIRSALHAIRSTARS
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="hover:text-orange-300 transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="hover:text-orange-300 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#masters"
                className="hover:text-orange-300 transition-colors"
              >
                Мастера
              </a>
              <a
                href="#gallery"
                className="hover:text-orange-300 transition-colors"
              >
                Галерея
              </a>
              <a
                href="#contact"
                className="hover:text-orange-300 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-r from-amber-100 to-orange-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-6xl font-bold mb-6 text-amber-900"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                БАРБЕРШОП
                <br />
                <span className="text-orange-600">ПРЕМИУМ КЛАССА</span>
              </h2>
              <p className="text-xl text-amber-800 mb-8 leading-relaxed">
                Мужской стиль, проверенный временем. Классические техники
                стрижки в атмосфере настоящего джентльменского клуба.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-3"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-900 text-amber-900 hover:bg-amber-50"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/0403ce65-5669-41e0-865e-fbe065f06425.jpg"
                alt="Интерьер барбершопа"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-900 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                  <span className="font-bold">4.9</span>
                  <span className="text-sm">из 5</span>
                </div>
                <p className="text-sm mt-1">150+ отзывов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4 text-amber-900"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              НАШИ УСЛУГИ
            </h2>
            <p className="text-xl text-amber-700">
              Прайс-лист на все виды услуг
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-amber-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-amber-900">
                      {service.name}
                    </CardTitle>
                    <Badge className="bg-amber-900 text-white">
                      {service.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">
                      {service.price}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-amber-900 text-amber-900 hover:bg-amber-50"
                    >
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4 text-amber-900"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              НАШИ МАСТЕРА
            </h2>
            <p className="text-xl text-amber-700">
              Профессионалы с многолетним опытом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card
                key={index}
                className="text-center border-amber-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 bg-amber-900 rounded-full flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-amber-900">
                    {master.name}
                  </CardTitle>
                  <CardDescription className="text-amber-600">
                    Опыт: {master.experience}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 mb-4">{master.specialty}</p>
                  <Button className="bg-amber-900 hover:bg-amber-800 w-full">
                    Записаться к мастеру
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4 text-amber-900"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              ГАЛЕРЕЯ РАБОТ
            </h2>
            <p className="text-xl text-amber-700">Портфолио наших мастеров</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((work, index) => (
              <Card
                key={index}
                className="overflow-hidden border-amber-200 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.style}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">
                      {work.style}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold mb-4 text-amber-900"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                ОНЛАЙН ЗАПИСЬ
              </h2>
              <p className="text-xl text-amber-700">
                Выберите удобное время для визита
              </p>
            </div>

            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-center text-amber-900">
                  Заполните форму записи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 999-99-99" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service">Услуга</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.name}>
                            {service.name} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="master">Мастер</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите мастера" />
                      </SelectTrigger>
                      <SelectContent>
                        {masters.map((master, index) => (
                          <SelectItem key={index} value={master.name}>
                            {master.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Дата</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="time">Время</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="13:00">13:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                        <SelectItem value="19:00">19:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea
                    id="comment"
                    placeholder="Дополнительные пожелания"
                  />
                </div>

                <Button className="w-full bg-amber-900 hover:bg-amber-800 text-white text-lg py-3">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на прием
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                КОНТАКТЫ
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={24} className="text-orange-300" />
                  <span>ул. Пушкина, 123, Москва</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={24} className="text-orange-300" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={24} className="text-orange-300" />
                  <span>Ежедневно: 10:00 - 22:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={24} className="text-orange-300" />
                  <span>info@mirsalhairstars.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white text-white hover:bg-white hover:text-amber-900"
                >
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white text-white hover:bg-white hover:text-amber-900"
                >
                  <Icon name="Facebook" size={24} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white text-white hover:bg-white hover:text-amber-900"
                >
                  <Icon name="MessageCircle" size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="Scissors" size={24} className="text-orange-300" />
              <span className="text-xl font-bold">MIRSALHAIRSTARS</span>
            </div>
            <p className="text-amber-300">
              © 2024 Барбершоп MirSalHairStars. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
