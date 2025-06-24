import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const programs = [
  {
    title: "Машиностроение",
    duration: "4 года",
    level: "Бакалавриат",
    description:
      "Проектирование и производство сельскохозяйственной техники, современные CAD/CAM системы",
    employment: "100%",
    salary: "90-130 тыс. ₽",
    subjects: ["3D-моделирование", "Материаловедение", "Робототехника"],
    color: "border-[#E07966]/30 bg-[#E07966]/5",
  },
  {
    title: "Мехатроника и робототехника",
    duration: "4 года",
    level: "Бакалавриат",
    description:
      "Создание интеллектуальных систем управления для автоматизации производства",
    employment: "98%",
    salary: "95-140 тыс. ₽",
    subjects: ["ИИ в производстве", "Сенсорика", "Программирование"],
    color: "border-[#4A4A52]/30 bg-[#4A4A52]/5",
  },
  {
    title: "Информационные технологии",
    duration: "4 года",
    level: "Бакалавриат",
    description:
      "Цифровизация производства, промышленный интернет вещей, big data в машиностроении",
    employment: "96%",
    salary: "85-125 тыс. ₽",
    subjects: ["IoT системы", "Машинное обучение", "Кибербезопасность"],
    color: "border-[#E07966]/30 bg-[#E07966]/5",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A4A52] mb-4">
            Направления подготовки
          </h2>
          <p className="text-xl text-[#4A4A52]/70 max-w-3xl mx-auto">
            Выбери специальность, которая определит твое будущее в
            высокотехнологичном производстве
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`${program.color} border-2 hover:shadow-xl transition-all duration-300`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {program.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {program.duration}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-[#4A4A52] mb-2">
                  {program.title}
                </CardTitle>
                <p className="text-[#4A4A52]/70 leading-relaxed">
                  {program.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <Icon
                      name="TrendingUp"
                      className="mx-auto mb-1 text-[#E07966]"
                      size={20}
                    />
                    <div className="text-sm font-medium text-[#4A4A52]/70">
                      Трудоустройство
                    </div>
                    <div className="text-lg font-bold text-[#E07966]">
                      {program.employment}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <Icon
                      name="DollarSign"
                      className="mx-auto mb-1 text-[#4A4A52]"
                      size={20}
                    />
                    <div className="text-sm font-medium text-[#4A4A52]/70">
                      Зарплата
                    </div>
                    <div className="text-sm font-bold text-[#4A4A52]">
                      {program.salary}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-[#4A4A52] mb-3">
                    Ключевые предметы:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#4A4A52] hover:bg-[#4A4A52]/90 text-white">
                  <Icon name="FileText" size={16} />
                  Подробнее о программе
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#4A4A52]/70 mb-6">
            Не можешь определиться с направлением?
          </p>
          <Button size="lg" variant="outline" className="text-lg px-8">
            <Icon name="MessageCircle" size={20} />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
