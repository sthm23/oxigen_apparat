import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-sky-100 dark:border-slate-700">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
            O₂ МедТехника
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#equipment" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              Оборудование
            </a>
            <a href="#packages" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              Пакеты
            </a>
            <a href="#reviews" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              Отзывы
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium transition">
              Связаться
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                ДОСТУПНО 24/7 · ВСЕГДА НА СВЯЗИ
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Кислород всегда под рукой.
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Профессиональные кислородные концентраторы для дома и клиник. Аренда и продажа с доставкой за 2 часа. Когда каждый вдох имеет значение.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-lg transition shadow-lg shadow-sky-200 dark:shadow-sky-900/50">
                  Выбрать оборудование
                </button>
                <button className="px-8 py-4 border-2 border-sky-600 text-sky-600 dark:text-sky-400 dark:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 rounded-full font-semibold text-lg transition">
                  Консультация
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/30 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-4">💨</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">В НАЛИЧИИ</div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      Концентраторы 5-10л/мин
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-semibold mt-2">
                      от 25 000₽/месяц
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden bg-sky-600 dark:bg-sky-800 py-4">
          <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            <div className="flex items-center gap-8 px-8 text-white font-medium">
              <span>💨 Концентраторы 5-10л/мин</span>
              <span>·</span>
              <span>🏥 Сертифицировано Росздравнадзором</span>
              <span>·</span>
              <span>🚚 Доставка за 2 часа</span>
              <span>·</span>
              <span>⚡ Бесплатное обслуживание</span>
              <span>·</span>
              <span>💨 Концентраторы 5-10л/мин</span>
              <span>·</span>
              <span>🏥 Сертифицировано Росздравнадзором</span>
              <span>·</span>
              <span>🚚 Доставка за 2 часа</span>
              <span>·</span>
              <span>⚡ Бесплатное обслуживание</span>
              <span>·</span>
            </div>
            <div className="flex items-center gap-8 px-8 text-white font-medium">
              <span>💨 Концентраторы 5-10л/мин</span>
              <span>·</span>
              <span>🏥 Сертифицировано Росздравнадзором</span>
              <span>·</span>
              <span>🚚 Доставка за 2 часа</span>
              <span>·</span>
              <span>⚡ Бесплатное обслуживание</span>
              <span>·</span>
              <span>💨 Концентраторы 5-10л/мин</span>
              <span>·</span>
              <span>🏥 Сертифицировано Росздравнадзором</span>
              <span>·</span>
              <span>🚚 Доставка за 2 часа</span>
              <span>·</span>
              <span>⚡ Бесплатное обслуживание</span>
              <span>·</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Essential Equipment */}
      <section id="equipment" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3">01 /ОСНОВНОЕ ОБОРУДОВАНИЕ</div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Надежная<br />поддержка дыхания.
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Оборудование, которое вам нужно, когда важна каждая минута. Профессиональные решения для дома и клиник.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                name: "Концентратор 5л/мин",
                description: "Компактный и тихий. Идеален для домашнего использования. Чистота кислорода 93±3%.",
                price: "25 000₽/мес",
                badge: "ПОПУЛЯРНЫЙ",
                badgeColor: "bg-green-500"
              },
              {
                name: "Концентратор 10л/мин",
                description: "Профессиональный уровень. Для клиник и пациентов с высокими потребностями.",
                price: "45 000₽/мес",
                badge: "ДЛЯ КЛИНИК",
                badgeColor: "bg-sky-500"
              },
              {
                name: "Портативный концентратор",
                description: "Свобода передвижения. Работает от аккумулятора до 8 часов. Вес всего 2.3кг.",
                price: "35 000₽/мес",
                badge: "МОБИЛЬНЫЙ",
                badgeColor: "bg-cyan-500"
              },
              {
                name: "Пульсоксиметр + расходники",
                description: "Контроль насыщения кислородом. Носовые канюли, увлажнители, фильтры.",
                price: "3 500₽",
                badge: "НЕОБХОДИМОЕ",
                badgeColor: "bg-emerald-500"
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition">
                <div className="aspect-square bg-gradient-to-br from-sky-100 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/30 rounded-xl mb-4 flex items-center justify-center text-6xl">
                  {idx === 0 ? "🫁" : idx === 1 ? "⚕️" : idx === 2 ? "🎒" : "📊"}
                </div>
                <span className={`inline-block px-3 py-1 ${product.badgeColor} text-white text-xs font-bold rounded-full mb-3`}>
                  {product.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{product.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{product.price}</span>
                  <button className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium text-sm transition">
                    Выбрать
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 dark:from-sky-700 dark:to-cyan-700 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold mb-2 opacity-90">КОМПЛЕКТ В ОДИН КЛИК</div>
                <div className="text-3xl font-bold mb-2">Базовый пакет для дома</div>
                <div className="text-sky-100">Концентратор 5л/мин + расходники + обслуживание</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-4xl font-bold">27 500₽</div>
                  <div className="text-sky-100 text-sm">в месяц</div>
                </div>
                <button className="px-8 py-4 bg-white hover:bg-sky-50 text-sky-600 rounded-full font-bold transition whitespace-nowrap shadow-xl">
                  Оформить пакет →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Premium Solutions */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3">02 /ПРЕМИУМ РЕШЕНИЯ</div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Максимальный<br />комфорт и контроль.
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Продвинутые функции для тех, кто выбирает лучшее. Технологии нового поколения.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                name: "Концентратор с WiFi",
                description: "Удаленный мониторинг через приложение. Уведомления о техническом состоянии в реальном времени.",
                price: "55 000₽/мес",
                badge: "УМНЫЙ ДОМ",
                badgeColor: "bg-purple-500"
              },
              {
                name: "BiPAP аппарат",
                description: "Двухуровневая поддержка дыхания. Для пациентов с апноэ и хроническими заболеваниями.",
                price: "65 000₽/мес",
                badge: "МЕДИЦИНСКИЙ",
                badgeColor: "bg-red-500"
              },
              {
                name: "Система увлажнения Pro",
                description: "Подогрев и увлажнение воздуха. Максимальный комфорт при длительной терапии.",
                price: "12 000₽/мес",
                badge: "КОМФОРТ+",
                badgeColor: "bg-blue-500"
              },
              {
                name: "Консьерж-сервис",
                description: "Личный менеджер 24/7. Приоритетная доставка. Бесплатная замена при неполадках.",
                price: "15 000₽/мес",
                badge: "VIP",
                badgeColor: "bg-amber-500"
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 hover:shadow-xl transition">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl mb-4 flex items-center justify-center text-6xl">
                  {idx === 0 ? "📱" : idx === 1 ? "🏥" : idx === 2 ? "💧" : "👨‍⚕️"}
                </div>
                <span className={`inline-block px-3 py-1 ${product.badgeColor} text-white text-xs font-bold rounded-full mb-3`}>
                  {product.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{product.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{product.price}</span>
                  <button className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium text-sm transition">
                    Выбрать
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold mb-2 opacity-90">ПРЕМИУМ ПАКЕТ</div>
                <div className="text-3xl font-bold mb-2">VIP Забота</div>
                <div className="text-purple-100">WiFi концентратор + увлажнение + консьерж-сервис</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-4xl font-bold">75 000₽</div>
                  <div className="text-purple-100 text-sm">в месяц</div>
                </div>
                <button className="px-8 py-4 bg-white hover:bg-purple-50 text-purple-600 rounded-full font-bold transition whitespace-nowrap shadow-xl">
                  Оформить VIP →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Starter Packages */}
      <section id="packages" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3">03 /ГОТОВЫЕ РЕШЕНИЯ</div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Стартовые<br />комплекты.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Для дома",
                icon: "🏠",
                subtitle: "Назначили кислородную терапию? Вот всё необходимое с первого дня.",
                price: "29 900₽/мес",
                items: [
                  "Концентратор 5л/мин",
                  "Носовые канюли (3 шт)",
                  "Увлажнитель",
                  "Пульсоксиметр",
                  "Удлинительная трубка 10м",
                  "Инструкция и обучение",
                  "Бесплатная доставка и установка"
                ]
              },
              {
                title: "Для клиники",
                icon: "🏥",
                subtitle: "Оснащение процедурного кабинета или палаты интенсивной терапии.",
                price: "125 000₽/мес",
                items: [
                  "2× Концентратор 10л/мин",
                  "Система распределения кислорода",
                  "Набор расходников (20 комплектов)",
                  "Сигнализация низкого давления",
                  "Техническое обслуживание 24/7",
                  "Замена оборудования в течение 2 часов",
                  "Документация для лицензирования"
                ]
              },
              {
                title: "Портативный набор",
                icon: "🚶",
                subtitle: "Для активных людей, которые не хотят отказываться от привычной жизни.",
                price: "39 900₽/мес",
                items: [
                  "Портативный концентратор 2-5л/мин",
                  "2× Аккумулятор (16 часов работы)",
                  "Автомобильное ЗУ",
                  "Рюкзак-переноска",
                  "Носовые канюли (5 шт)",
                  "Пульсоксиметр на палец",
                  "Защитный чехол"
                ]
              }
            ].map((pkg, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition">
                <div className="text-6xl mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{pkg.subtitle}</p>
                <div className="mb-6">
                  {pkg.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 mb-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{pkg.price}</div>
                  <button className="w-full px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold transition">
                    Оформить комплект
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: Testimonials */}
      <section id="reviews" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3">04 /РЕАЛЬНЫЕ ИСТОРИИ</div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
              Когда важна каждая минута.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Елена Соколова",
                role: "Дочь пациентки",
                pet: "👵 Мама, 78 лет",
                rating: 5,
                text: "В 2 часа ночи маме стало плохо. Позвонила в О₂ МедТехника – через 40 минут концентратор был у нас. Сатурация поднялась с 84% до 95%. Менеджер объяснил всё по телефону, как подключить. Это было спасением."
              },
              {
                name: "Дмитрий Петров",
                role: "Главврач, клиника \"Здоровье+\"",
                pet: "🏥 15-коечный стационар",
                rating: 5,
                text: "Переоснастили три палаты за выходные. Документы для лицензирования подготовили сами. Концентраторы работают круглосуточно уже полгода – ни одного сбоя. Техподдержка отвечает за 5 минут, даже ночью."
              },
              {
                name: "Игорь Волков",
                role: "ХОБЛ, 3 стадия",
                pet: "🚶 Портативный О₂",
                rating: 5,
                text: "Думал, что придется сидеть дома. С портативным концентратором снова хожу в парк, встречаюсь с друзьями. Работает 8 часов без подзарядки. Весит как небольшой рюкзак. Качество жизни вернулось."
              },
              {
                name: "Марина Краснова",
                role: "Координатор патронажной службы",
                pet: "👨‍⚕️ 12 пациентов на О₂",
                rating: 5,
                text: "Работаем с О₂ МедТехника второй год. Главное – скорость реакции. Если что-то не так с оборудованием, замена приезжает до конца дня. Для наших бабушек и дедушек это критично."
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-8 hover:shadow-xl transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{review.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{review.role}</div>
                  </div>
                  <div className="text-2xl">{review.pet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-600 dark:from-sky-800 dark:via-cyan-800 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Получите консультацию за 15 минут
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Подберем оборудование под ваши потребности. Расскажем про аренду и покупку. Рассчитаем стоимость.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white hover:bg-sky-50 text-sky-600 rounded-full font-bold text-lg transition shadow-xl">
              Позвоните мне
            </button>
            <button className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 rounded-full font-bold text-lg transition">
              Написать в WhatsApp
            </button>
          </div>
          <div className="mt-8 text-sky-100 text-sm">
            ☎️ +7 (495) 123-45-67 · 📱 Telegram/WhatsApp · ✉️ info@o2medtech.ru
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-sky-400 mb-4">O₂ МедТехника</div>
              <p className="text-sm">
                Профессиональные решения для кислородной терапии с 2015 года.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Оборудование</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition">Концентраторы</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Портативные</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">BiPAP аппараты</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Расходники</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition">Аренда</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Покупка</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Обслуживание</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>☎️ +7 (495) 123-45-67</li>
                <li>📱 WhatsApp / Telegram</li>
                <li>✉️ info@o2medtech.ru</li>
                <li>🕐 Работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>© 2026 О₂ МедТехника · Доступно 24/7 · Всегда рядом</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-sky-400 transition">Политика конфиденциальности</a>
              <a href="#" className="hover:text-sky-400 transition">Лицензии</a>
              <a href="#" className="hover:text-sky-400 transition">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
