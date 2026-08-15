import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-sky-100 dark:border-slate-700">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
            {t('header.brand')}
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#equipment" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              {t('header.equipment')}
            </a>
            <a href="#packages" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              {t('header.packages')}
            </a>
            <a href="#reviews" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              {t('header.reviews')}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium transition">
              {t('header.contact')}
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
                {t('hero.badge')}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-lg transition shadow-lg shadow-sky-200 dark:shadow-sky-900/50">
                  {t('hero.cta1')}
                </button>
                <button className="px-8 py-4 border-2 border-sky-600 text-sky-600 dark:text-sky-400 dark:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 rounded-full font-semibold text-lg transition">
                  {t('hero.cta2')}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/30 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-4">💨</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">{t('hero.available')}</div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {t('hero.concentrators')}
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-semibold mt-2">
                      {t('hero.from')} 25 000₽{t('hero.perMonth')}
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
              <span>{t('marquee.item1')}</span>
              <span>·</span>
              <span>{t('marquee.item2')}</span>
              <span>·</span>
              <span>{t('marquee.item3')}</span>
              <span>·</span>
              <span>{t('marquee.item4')}</span>
              <span>·</span>
              <span>{t('marquee.item1')}</span>
              <span>·</span>
              <span>{t('marquee.item2')}</span>
              <span>·</span>
              <span>{t('marquee.item3')}</span>
              <span>·</span>
              <span>{t('marquee.item4')}</span>
              <span>·</span>
            </div>
            <div className="flex items-center gap-8 px-8 text-white font-medium">
              <span>{t('marquee.item1')}</span>
              <span>·</span>
              <span>{t('marquee.item2')}</span>
              <span>·</span>
              <span>{t('marquee.item3')}</span>
              <span>·</span>
              <span>{t('marquee.item4')}</span>
              <span>·</span>
              <span>{t('marquee.item1')}</span>
              <span>·</span>
              <span>{t('marquee.item2')}</span>
              <span>·</span>
              <span>{t('marquee.item3')}</span>
              <span>·</span>
              <span>{t('marquee.item4')}</span>
              <span>·</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Essential Equipment */}
      <section id="equipment" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3">{t('section1.tag')}</div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('section1.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              {t('section1.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                key: 'concentrator5',
                price: "25 000₽",
                badgeColor: "bg-green-500",
                icon: "🫁"
              },
              {
                key: 'concentrator10',
                price: "45 000₽",
                badgeColor: "bg-sky-500",
                icon: "⚕️"
              },
              {
                key: 'portable',
                price: "35 000₽",
                badgeColor: "bg-cyan-500",
                icon: "🎒"
              },
              {
                key: 'accessories',
                price: "3 500₽",
                badgeColor: "bg-emerald-500",
                icon: "📊"
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition">
                <div className="aspect-square bg-gradient-to-br from-sky-100 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/30 rounded-xl mb-4 flex items-center justify-center text-6xl">
                  {product.icon}
                </div>
                <span className={`inline-block px-3 py-1 ${product.badgeColor} text-white text-xs font-bold rounded-full mb-3`}>
                  {t(`section1.products.${product.key}.badge`)}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t(`section1.products.${product.key}.name`)}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">{t(`section1.products.${product.key}.description`)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{product.price}</span>
                  <button className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium text-sm transition">
                    {t('section1.select')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 dark:from-sky-700 dark:to-cyan-700 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold mb-2 opacity-90">{t('section1.package.label')}</div>
                <div className="text-3xl font-bold mb-2">{t('section1.package.title')}</div>
                <div className="text-sky-100">{t('section1.package.description')}</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-4xl font-bold">27 500₽</div>
                  <div className="text-sky-100 text-sm">{t('hero.perMonth')}</div>
                </div>
                <button className="px-8 py-4 bg-white hover:bg-sky-50 text-sky-600 rounded-full font-bold transition whitespace-nowrap shadow-xl">
                  {t('section1.package.cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-600 dark:from-sky-800 dark:via-cyan-800 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white hover:bg-sky-50 text-sky-600 rounded-full font-bold text-lg transition shadow-xl">
              {t('cta.button1')}
            </button>
            <button className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 rounded-full font-bold text-lg transition">
              {t('cta.button2')}
            </button>
          </div>
          <div className="mt-8 text-sky-100 text-sm">
            {t('cta.contacts')}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-sky-400 mb-4">{t('header.brand')}</div>
              <p className="text-sm">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">{t('footer.equipment')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition">{t('section1.products.concentrator5.name')}</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">{t('section1.products.portable.name')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">{t('footer.services')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition">{t('header.packages')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">{t('footer.contacts')}</h4>
              <ul className="space-y-2 text-sm">
                <li>☎️ +7 (495) 123-45-67</li>
                <li>📱 WhatsApp / Telegram</li>
                <li>✉️ info@o2medtech.ru</li>
                <li>🕐 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>{t('footer.copyright')}</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-sky-400 transition">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-sky-400 transition">{t('footer.licenses')}</a>
              <a href="#" className="hover:text-sky-400 transition">{t('footer.faq')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
