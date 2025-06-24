import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Building",
    title: "Современная база",
    description:
      "Лаборатории с новейшим оборудованием, цифровые мастерские и производственные площадки",
    color: "bg-[#E07966]/10 text-[#E07966]",
  },
  {
    icon: "Users",
    title: "Практики-преподаватели",
    description:
      "Ведущие специалисты Ростсельмаш передают реальный опыт промышленного производства",
    color: "bg-[#4A4A52]/10 text-[#4A4A52]",
  },
  {
    icon: "Briefcase",
    title: "Гарантированная работа",
    description:
      "98% выпускников трудоустраиваются в Ростсельмаш и компании-партнеры сразу после диплома",
    color: "bg-[#E07966]/10 text-[#E07966]",
  },
  {
    icon: "Rocket",
    title: "Карьерный рост",
    description:
      "Программы развития талантов, стажировки за рубежом, быстрое продвижение по службе",
    color: "bg-[#4A4A52]/10 text-[#4A4A52]",
  },
  {
    icon: "DollarSign",
    title: "Высокая зарплата",
    description:
      "Средняя зарплата выпускников 80-120 тыс. рублей уже на первом году работы",
    color: "bg-[#E07966]/10 text-[#E07966]",
  },
  {
    icon: "Globe",
    title: "Мировые стандарты",
    description:
      "Обучение по международным программам, сертификация по мировым стандартам качества",
    color: "bg-[#4A4A52]/10 text-[#4A4A52]",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-[#E7E8ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A4A52] mb-4">
            Почему выбирают наш институт
          </h2>
          <p className="text-xl text-[#4A4A52]/70 max-w-3xl mx-auto">
            Мы предлагаем уникальное сочетание академических знаний и
            практического опыта от лидера российского машиностроения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-lg ${advantage.color} flex items-center justify-center mb-4`}
                >
                  <Icon name={advantage.icon} size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-[#4A4A52]">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4A4A52]/70 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
