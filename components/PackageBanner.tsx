import { useTranslations } from 'next-intl';

export function PackageBanner() {
  const t = useTranslations();

  return (
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
  );
}
