import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Partnership = () => {
  return (
    <section
      id="partnership"
      className="py-20 bg-gradient-to-br from-[#4A4A52] via-[#4A4A52]/90 to-[#E07966]/20 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Партнерство с лидером
                <span className="text-[#E07966]"> российского АПК</span>
              </h2>
              <p className="text-xl text-[#E7E8ED] leading-relaxed">
                Ростсельмаш — крупнейший производитель сельскохозяйственной
                техники в России и один из мировых лидеров отрасли. Наш институт
                — это прямой путь к карьере в компании, которая экспортирует
                продукцию в 50+ стран мира.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E07966] mb-2">№1</div>
                <div className="text-[#E7E8ED]">
                  в России по производству комбайнов
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E07966] mb-2">
                  50+
                </div>
                <div className="text-[#E7E8ED]">стран экспорта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E07966] mb-2">
                  80+
                </div>
                <div className="text-[#E7E8ED]">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E07966] mb-2">
                  15000+
                </div>
                <div className="text-[#E7E8ED]">сотрудников</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E07966] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Factory" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Производственная практика
                    </h3>
                    <p className="text-[#E7E8ED]">
                      Стажировки на реальном производстве с первого курса.
                      Работа с современным оборудованием стоимостью миллионы
                      долларов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E07966] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Инновационные проекты
                    </h3>
                    <p className="text-[#E7E8ED]">
                      Участие в разработке техники будущего: беспилотные
                      тракторы, ИИ для сельского хозяйства, точное земледелие.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E07966] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Международный опыт
                    </h3>
                    <p className="text-[#E7E8ED]">
                      Стажировки в Европе и США, участие в международных
                      выставках, обмен опытом с ведущими мировыми
                      производителями.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
