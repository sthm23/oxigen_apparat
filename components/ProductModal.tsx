'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
interface ProductModalProps {
  productKey: string;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ productKey, images, isOpen, onClose }: ProductModalProps) {
  const t = useTranslations();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const details = t.raw(`section1.modal.details.${productKey}`);
  const isAccessory = productKey === 'accessories';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t(`section1.products.${productKey}.name`)}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-square bg-linear-to-br from-sky-100 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/30 rounded-2xl overflow-hidden relative">
              <Swiper
                modules={[Navigation, Pagination,]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="h-full w-full"
              >
                {images.map((imagePath, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={imagePath}
                      alt={t(`section1.products.${productKey}.name`)}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <span className={`inline-block px-4 py-2 ${productKey === 'concentrator5' ? 'bg-emerald-500' :
                  productKey === 'concentrator8' ? 'bg-sky-500' :
                    productKey === 'concentrator10' ? 'bg-cyan-600' :
                      'bg-emerald-500'
                  } text-white text-sm font-bold rounded-full`}>
                  {t(`section1.products.${productKey}.badge`)}
                </span>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {t(`section1.products.${productKey}.description`)}
              </p>

              <div className="bg-sky-50 dark:bg-sky-900/20 rounded-xl p-5 border border-sky-200 dark:border-sky-800">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {t('section1.products.concentrator5.rentalFrom').includes('Аренда') ? 'Аренда:' :
                    t('section1.products.concentrator5.rentalFrom').includes('Rental') ? 'Rental:' : 'Ijara:'}
                </div>
                <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">
                  {t(`section1.products.${productKey}.rentalFrom`)}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {t('section1.modal.specifications')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(details || {}).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{String(value)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {!isAccessory && (
              <div className="md:col-span-3 bg-linear-to-br from-sky-50 to-cyan-50 dark:from-sky-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-sky-200 dark:border-sky-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('section1.modal.advantages')}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{t('section1.features.purity')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{t('section1.features.certified')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{t('section1.features.quiet')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{t('section1.features.quality')}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#packages"
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-center transition shadow-lg shadow-sky-600/30"
            >
              {t('section1.select')}
            </a>
            <a
              href="tel:+998990111199"
              className="flex-1 px-6 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-full font-semibold text-center transition"
            >
              {t('cta.button1')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
