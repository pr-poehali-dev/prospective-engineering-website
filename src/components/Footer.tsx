import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Icon name="Cog" className="text-white" size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Ростсельмаш</h2>
                <p className="text-gray-400">Институт машиностроения</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Стань частью команды, которая создает будущее российского
              машиностроения. Твоя карьера начинается здесь!
            </p>

            <div className="bg-green-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">📞 Приемная комиссия</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-green-400" size={18} />
                  <span>+7 (863) 255-85-85</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-green-400" size={18} />
                  <span>admission@rostselmash.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-green-400" size={18} />
                  <span>г. Ростов-на-Дону, ул. Менжинского, 2</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Направления</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Машиностроение
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Мехатроника
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  IT-технологии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Автоматизация
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Поступление</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Подача документов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Расписание экзаменов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Стоимость обучения
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Общежитие
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400">
              © 2024 Институт перспективного машиностроения "Ростсельмаш". Все
              права защищены.
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Icon name="Youtube" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <span className="font-bold text-blue-400">VK</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-lg px-12"
          >
            <Icon name="ArrowRight" size={20} />
            Стать студентом сегодня
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
