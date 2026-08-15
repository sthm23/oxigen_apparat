import { useTranslations } from 'next-intl';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-sky-100 dark:border-slate-700">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
          {t('header.brand')}
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#equipment" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
            {t('header.equipment')}
          </a>
          <a href="#packages" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
            {t('header.packages')}
          </a>
          <a href="#reviews" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
            {t('header.reviews')}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <button className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-medium transition">
            {t('header.contact')}
          </button>
        </div>
      </nav>
    </header>
  );
}
