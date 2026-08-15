import { useTranslations } from 'next-intl';
import { ProductCard } from './ProductCard';
import { PackageBanner } from './PackageBanner';

const products = [
  {
    key: 'concentrator5',
    badgeColor: "bg-green-500",
    icon: "🫁"
  },
  {
    key: 'concentrator8',
    badgeColor: "bg-sky-500",
    icon: "⚕️"
  },
  {
    key: 'concentrator10',
    badgeColor: "bg-cyan-600",
    icon: "🏥"
  },
  {
    key: 'accessories',
    badgeColor: "bg-emerald-500",
    icon: "📊"
  }
];

export function EquipmentSection() {
  const t = useTranslations();

  return (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              productKey={product.key}
              badgeColor={product.badgeColor}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
