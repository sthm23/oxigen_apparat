import { useTranslations } from 'next-intl';

interface ProductCardProps {
  productKey: string;
  badgeColor: string;
  icon: string;
}

export function ProductCard({ productKey, badgeColor, icon }: ProductCardProps) {
  const t = useTranslations();

  return (
    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition">
      <div className="aspect-square bg-gradient-to-br from-sky-100 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/30 rounded-xl mb-4 flex items-center justify-center text-6xl">
        {icon}
      </div>
      <span className={`inline-block px-3 py-1 ${badgeColor} text-white text-xs font-bold rounded-full mb-3`}>
        {t(`section1.products.${productKey}.badge`)}
      </span>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        {t(`section1.products.${productKey}.name`)}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
        {t(`section1.products.${productKey}.description`)}
      </p>
      <div className="mb-4">
        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Аренда:</div>
        <div className="text-lg font-bold text-sky-600 dark:text-sky-400">
          {t(`section1.products.${productKey}.rentalFrom`)}
        </div>
      </div>
      <a
        href="#packages"
        className="block w-full px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium text-sm transition text-center"
      >
        {t('section1.select')}
      </a>
    </div>
  );
}
