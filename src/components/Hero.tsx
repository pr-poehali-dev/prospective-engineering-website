import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <Icon name="Zap" size={14} />
                Технологии будущего
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Стань инженером
                <span className="text-green-600"> будущего</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Институт перспективного машиностроения "Ростсельмаш" — твой путь
                к карьере в крупнейшей машиностроительной компании России.
                Изучай передовые технологии, работай на современном
                оборудовании, получай гарантированное трудоустройство.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8"
              >
                <Icon name="GraduationCap" size={20} />
                Поступить сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" size={20} />
                Виртуальный тур
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Трудоустройство</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Партнеров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">25</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
                alt="Современные технологии машиностроения"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="Award" className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    Диплом гособразца
                  </div>
                  <div className="text-sm text-gray-600">Признается везде</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
