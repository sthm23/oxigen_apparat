import { useTranslations } from 'next-intl';

interface PricingCardProps {
  concentratorKey: string;
}

export function PricingCard({ concentratorKey }: PricingCardProps) {
  const t = useTranslations();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {t(`pricing.${concentratorKey}.name`)}
        </h3>
      </div>

      <div className="space-y-4 mb-6">
        {/* Tariff 1 */}
        <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-2 right-2">
            <span className="inline-block px-2 py-1 bg-sky-500 text-white text-[10px] font-bold rounded-full">
              {t(`pricing.${concentratorKey}.tariff1.label`)}
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-sky-600 dark:text-sky-400">
              {t(`pricing.${concentratorKey}.tariff1.price`)}
            </span>
            <span className="text-sm text-slate-600 dark:text-slate-300">сум{t('pricing.perDay')}</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t(`pricing.${concentratorKey}.tariff1.period`)}
          </p>
        </div>

        {/* Tariff 2 */}
        <div className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/30 rounded-xl p-5 relative overflow-hidden border-2 border-sky-200 dark:border-sky-700">
          <div className="absolute top-2 right-2">
            <span className="inline-block px-2 py-1 bg-cyan-500 text-white text-[10px] font-bold rounded-full">
              {t(`pricing.${concentratorKey}.tariff2.label`)}
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-sky-600 dark:text-sky-400">
              {t(`pricing.${concentratorKey}.tariff2.price`)}
            </span>
            <span className="text-sm text-slate-600 dark:text-slate-300">сум{t('pricing.perDay')}</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t(`pricing.${concentratorKey}.tariff2.period`)}
          </p>
        </div>

        {/* Tariff 3 */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-5 relative overflow-hidden border-2 border-green-200 dark:border-green-700">
          <div className="absolute top-2 right-2">
            <span className="inline-block px-2 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full">
              {t(`pricing.${concentratorKey}.tariff3.label`)}
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-green-600 dark:text-green-400">
              {t(`pricing.${concentratorKey}.tariff3.price`)}
            </span>
            <span className="text-sm text-slate-600 dark:text-slate-300">сум</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t(`pricing.${concentratorKey}.tariff3.period`)}
          </p>
        </div>
      </div>

      <a
        href="https://t.me/Abduvohidxon0101"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-center transition shadow-lg"
      >
        {t('pricing.selectTariff')}
      </a>
    </div>
  );
}
