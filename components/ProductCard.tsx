import { useTranslations } from 'next-intl';

interface ProductCardProps {
  productKey: string;
  price: string;
  badgeColor: string;
  icon: string;
}

export function ProductCard({ productKey, price, badgeColor, icon }: ProductCardProps) {
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
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-slate-900 dark:text-white">{price}</span>
        <button className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium text-sm transition">
          {t('section1.select')}
        </button>
      </div>
    </div>
  );
}
