'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ContactModal } from './ContactModal';

export function Header() {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-sky-100 dark:border-slate-700">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">Kislorod
                <span className="font-bold text-sky-600 dark:text-sky-400">Pro</span>
                Uz
              </span>
            </div>
            <div className="text-lg line leading-[0.5]">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider">{t('header.sloganTexts.quality')}</span>
              <span className="font-bold text-sky-600 dark:text-sky-400 mx-1">•</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider">{t('header.sloganTexts.trust')}</span>
              <span className="font-bold  text-sky-600 dark:text-sky-400 mx-1">•</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider">{t('header.sloganTexts.results')}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#rental" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              {t('header.equipment')}
            </a>
            <a href="#sale" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              {t('footer.sale')}
            </a>
            <a href="#packages" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              {t('header.packages')}
            </a>
            <a href="#cta" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
              {t('hero.cta2')}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:inline-block px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium transition"
            >
              {t('header.contact')}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed top-20 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-sky-100 dark:border-slate-700 shadow-lg">
        {/* Navigation Menu */}
        <div className="flex items-center justify-around py-2 border-b border-sky-100 dark:border-slate-700">
          <a href="#rental" className="text-xs text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition px-3 py-2">
            {t('header.equipment')}
          </a>
          <a href="#sale" className="text-xs text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition px-3 py-2">
            {t('footer.sale')}
          </a>
          <a href="#packages" className="text-xs text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition px-3 py-2">
            {t('header.packages')}
          </a>
          <a href="#cta" className="text-xs text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition px-3 py-2">
            {t('hero.cta2')}
          </a>
        </div>
      </div>

      <div className="md:hidden fixed bottom-10 right-10 z-50 ">
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-15 w-14 px-4 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-normal animate-pulse"
        >
          <svg className="w-6 h-6 animate-ring" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
