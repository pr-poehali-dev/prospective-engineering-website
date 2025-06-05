import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Алексей Морозов",
    position: "Ведущий инженер, Ростсельмаш",
    year: "Выпуск 2020",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "За 4 года получил не только диплом, но и реальный опыт работы на производстве. Сразу после выпуска получил должность ведущего инженера с зарплатой 120 тысяч рублей.",
    rating: 5,
  },
  {
    name: "Мария Иванова",
    position: "Специалист по робототехнике",
    year: "Выпуск 2019",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face",
    text: "Программа мехатроники дала возможность работать с роботами и ИИ. Сейчас разрабатываю автономные системы для сельхозтехники. Мечта стала реальностью!",
    rating: 5,
  },
  {
    name: "Дмитрий Соколов",
    position: "Руководитель IT-отдела",
    year: "Выпуск 2018",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "Благодаря знаниям в области цифровизации производства уже через 3 года после выпуска стал руководить целым отделом. Институт дал прочную основу для карьеры.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Истории успеха наших выпускников
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнай, как наши студенты строят успешную карьеру в машиностроении
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 bg-white border-0"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {review.name}
                    </h3>
                    <p className="text-green-600 font-medium">
                      {review.position}
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {review.year}
                    </Badge>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>

                <blockquote className="text-gray-600 leading-relaxed italic">
                  "{review.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            🎓 Средняя зарплата выпускников через год после окончания:{" "}
            <span className="font-bold text-green-600">105 000 ₽</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
