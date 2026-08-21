'use client'

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useState } from 'react';
import Image from 'next/image';

const languages = [
  { code: 'ru', name: 'Русский', flag: '/flags/ru.svg' },
  { code: 'uz', name: 'O\'zbek', flag: '/flags/uz.svg' },
  { code: 'en', name: 'English', flag: '/flags/en.svg' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.name}
          width={20}
          height={20}
          className="rounded-sm"
        />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {currentLang.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${locale === lang.code
                  ? 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400'
                  : 'text-slate-700 dark:text-slate-300'
                  }`}
              >
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  width={24}
                  height={24}
                  className="rounded-sm"
                />
                <span className="font-medium">{lang.name}</span>
                {locale === lang.code && (
                  <span className="ml-auto text-sky-600 dark:text-sky-400">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
