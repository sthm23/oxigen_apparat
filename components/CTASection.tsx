'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ContactModal } from './ContactModal';

export function CTASection() {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="cta" className="py-20 bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-600 dark:from-sky-800 dark:via-cyan-800 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            {t('cta.description')}
          </p>
          {/* Features */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-3">✅</div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">
                  {t('pricing.features.consultation')}
                </div>
              </div>
              <div>
                <div className="text-4xl mb-3">📞</div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">
                  {t('pricing.features.support')}
                </div>
              </div>
              <div>
                <div className="text-4xl mb-3">🚚</div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">
                  {t('pricing.features.delivery')}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="min-w-60 px-13 py-4 bg-white hover:bg-sky-50 text-sky-600 rounded-full font-bold text-lg transition shadow-xl inline-block"
            >
              {t('cta.button1')}
            </button>
            <a
              href="https://t.me/Abduvohidxon0101"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 rounded-full font-bold text-lg transition inline-block"
            >
              {t('cta.button2')}
            </a>
          </div>

        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
