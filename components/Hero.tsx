import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations();

  return (
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
  );
}
