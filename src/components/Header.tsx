import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Icon name="Cog" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ростсельмаш</h1>
              <p className="text-sm text-gray-600">Институт машиностроения</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#advantages"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#programs"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Направления
            </a>
            <a
              href="#partnership"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Партнерство
            </a>
            <a
              href="#reviews"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Отзывы
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">
              <Icon name="Phone" size={16} />
              Контакты
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Подать заявку
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
