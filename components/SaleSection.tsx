import { useTranslations } from 'next-intl';
import { ProductsCarousel } from './ProductsCarousel';

export function SaleSection() {
  const t = useTranslations();

  return (
    <section id="sale" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3">{t('saleSection.tag')}</div>
          <h2 className="sm:text-5xl text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {t('saleSection.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            {t('saleSection.subtitle')}
          </p>
        </div>

        <ProductsCarousel imageIndex={0} mode="sale" />
      </div>
    </section>
  );
}
