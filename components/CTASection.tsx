import { useTranslations } from 'next-intl';

export function CTASection() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-600 dark:from-sky-800 dark:via-cyan-800 dark:to-blue-800">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-sky-100 mb-8">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+998990020101"
            className="px-10 py-4 bg-white hover:bg-sky-50 text-sky-600 rounded-full font-bold text-lg transition shadow-xl inline-block"
          >
            {t('cta.button1')}
          </a>
          <a
            href="https://t.me/Abduvohidxon0101"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 rounded-full font-bold text-lg transition inline-block"
          >
            {t('cta.button2')}
          </a>
        </div>
        <div className="mt-8 text-sky-100 text-sm">
          {t('cta.contacts')}
        </div>
      </div>
    </section>
  );
}
