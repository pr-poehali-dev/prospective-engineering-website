import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-[#E7E8ED] shadow-sm border-b border-[#E7E8ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#E07966]">
              <Icon name="Cog" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#4A4A52]">Ростсельмаш</h1>
              <p className="text-sm text-[#4A4A52]/70">
                Институт машиностроения
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#advantages"
              className="text-[#4A4A52] hover:text-[#E07966] transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#programs"
              className="text-[#4A4A52] hover:text-[#E07966] transition-colors"
            >
              Направления
            </a>
            <a
              href="#partnership"
              className="text-[#4A4A52] hover:text-[#E07966] transition-colors"
            >
              Партнерство
            </a>
            <a
              href="#reviews"
              className="text-[#4A4A52] hover:text-[#E07966] transition-colors"
            >
              Отзывы
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">
              <Icon name="Phone" size={16} />
              Контакты
            </Button>
            <Button className="bg-[#E07966] hover:bg-[#E07966]/90 text-white">
              Подать заявку
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
