import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Large 404 */}
        <div className="relative mb-8">
          <h1 className="text-[180px] md:text-[280px] font-black text-slate-200 dark:text-slate-800 leading-none select-none tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-7xl animate-bounce">😔</div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          {t('title')}
        </h2>

        {/* Description */}
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
          {t('description')}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-10 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-lg transition shadow-xl shadow-sky-200 dark:shadow-sky-900/50"
          >
            {t('goHome')}
          </Link>
          <a
            href="tel:+998990111199"
            className="px-10 py-4 border-2 border-sky-600 text-sky-600 dark:text-sky-400 dark:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 rounded-full font-semibold text-lg transition"
          >
            {t('contactUs')}
          </a>
        </div>

        {/* Additional help */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            {t('needHelp')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/#equipment" className="text-sky-600 dark:text-sky-400 hover:underline">
              {t('equipment')}
            </a>
            <a href="/#packages" className="text-sky-600 dark:text-sky-400 hover:underline">
              {t('pricing')}
            </a>
            <a href="https://t.me/Abduvohidxon0101" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              {t('support')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
