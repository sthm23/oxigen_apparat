import { useTranslations } from 'next-intl';
import { ProductsCarousel } from './ProductsCarousel';
import { FeaturesBar } from './FeaturesBar';

export function RentalSection() {
  const t = useTranslations();

  return (
    <section id="rental" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3">{t('rentalSection.tag')}</div>
          <h2 className="sm:text-5xl text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {t('rentalSection.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            {t('rentalSection.subtitle')}
          </p>
        </div>

        <ProductsCarousel imageIndex={1} mode="rent" />

        <FeaturesBar />
      </div>
    </section>
  );
}
