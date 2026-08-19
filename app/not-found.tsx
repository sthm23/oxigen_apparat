import Link from 'next/link';
import './globals.css';

export default function GlobalNotFound() {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            {/* Large 404 */}
            <div className="relative mb-8">
              <h1 className="text-[180px] md:text-[280px] font-black text-slate-200 leading-none select-none tracking-tighter">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl animate-bounce">😔</div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Страница не найдена
            </h2>

            {/* Description */}
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Страница, которую вы ищете, не существует или была перемещена.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-10 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-lg transition shadow-xl shadow-sky-200"
              >
                На главную
              </Link>
              <a
                href="tel:+998990111199"
                className="px-10 py-4 border-2 border-sky-600 text-sky-600 hover:bg-sky-50 rounded-full font-semibold text-lg transition"
              >
                Связаться с нами
              </a>
            </div>

            {/* Additional help */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">
                Нужна помощь? Вот несколько полезных ссылок:
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="/#equipment" className="text-sky-600 hover:underline">
                  Оборудование
                </a>
                <a href="/#packages" className="text-sky-600 hover:underline">
                  Тарифы
                </a>
                <a href="https://t.me/Abduvohidxon0101" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                  Поддержка 24/7
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
