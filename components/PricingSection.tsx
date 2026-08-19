import { useTranslations } from 'next-intl';
import { PricingCarousel } from './PricingCarousel';

export function PricingSection() {
  const t = useTranslations();

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3">
            {t('pricing.tag')}
          </div>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="mb-12">
          <PricingCarousel />
        </div>



        {/* Important Notes */}
        <div className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-5">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚠️</div>
              <div>
                <div className="font-semibold text-amber-900 dark:text-amber-300 mb-1">
                  {t('pricing.noteTitle')}
                </div>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  {t('pricing.note')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl p-5">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🚗</div>
              <div>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  {t('pricing.deliveryNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
