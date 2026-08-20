'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ProductCardProps {
  productKey: string;
  badgeColor: string;
  imagePath: string;
  onOpenModal: (productKey: string, imagePath: string) => void;
}

export function ProductCard({ productKey, badgeColor, imagePath, onOpenModal }: ProductCardProps) {
  const t = useTranslations();

  const quickFeatures = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      ),
      text: t('section1.quickFeatures.quiet'),
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: t('section1.quickFeatures.purity'),
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: t('section1.quickFeatures.continuous'),
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: t('section1.quickFeatures.certified'),
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition flex flex-col h-full">
      <div className="aspect-square bg-linear-to-br from-sky-100 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/30 rounded-xl mb-4 overflow-hidden relative">
        <Image
          src={imagePath}
          alt={t(`section1.products.${productKey}.name`)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover rounded-xl"
          priority={false}
          loading={'eager'}
        />
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

      <div className="grid grid-cols-2 gap-2 mb-4">
        {quickFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-xs">
            <div className="text-sky-500 shrink-0">{feature.icon}</div>
            <span className="truncate">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="mb-4 mt-auto">
        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
          {t('section1.rental') + ':'}
        </div>
        <div className="text-lg font-bold text-sky-600 dark:text-sky-400">
          {t(`section1.products.${productKey}.rentalFrom`)}
        </div>
      </div>

      <div className="flex gap-2">
        <a
          href="#packages"
          className="flex-1 px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium text-sm transition text-center"
        >
          {t('section1.select')}
        </a>
        <button
          onClick={() => onOpenModal(productKey, imagePath)}
          className="px-5 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-full font-medium text-sm transition"
        >
          {t('section1.moreDetails')}
        </button>
      </div>
    </div>
  );
}
