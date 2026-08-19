import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Kislorod</span>
              <span className="text-2xl font-bold text-sky-400">Pro</span>
              <span className="text-2xl font-bold text-white">Uz</span>
            </div>
            <div className="text-xs text-slate-400 font-medium tracking-wider  mb-4">
              {t('header.sloganTexts.quality')}
              <span className="font-bold text-sky-600 dark:text-sky-400  mx-1">•</span>
              {t('header.sloganTexts.trust')}
              <span className="font-bold text-sky-600 dark:text-sky-400 mx-1">•</span>
              {t('header.sloganTexts.results')}
            </div>
            <p className="text-sm mb-3 ">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">{t('footer.equipment')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#equipment" className="hover:text-sky-400 transition">{t('section1.products.concentrator5.name')}</a></li>
              <li><a href="#equipment" className="hover:text-sky-400 transition">{t('section1.products.concentrator8.name')}</a></li>
              <li><a href="#equipment" className="hover:text-sky-400 transition">{t('section1.products.concentrator10.name')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#packages" className="hover:text-sky-400 transition">{t('footer.rent')}</a></li>
              <li><a href="#packages" className="hover:text-sky-400 transition">{t('footer.sale')}</a></li>
              <li><a href="#equipment" className="hover:text-sky-400 transition">{t('footer.consumables')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">{t('footer.contacts')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+998990111199" className="hover:text-sky-400 transition">
                  ☎️ {t('footer.phone1')}
                </a>
              </li>
              <li>
                <a href="tel:+998950337373" className="hover:text-sky-400 transition">
                  ☎️ {t('footer.phone2')}
                </a>
              </li>
              <li>
                <a href="https://t.me/Abduvohidxon0101" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
                  📱 Telegram
                </a>
              </li>
              <li>
                <a href="https://kislorodpro.uz" className="hover:text-sky-400 transition">
                  🌐 {t('footer.website')}
                </a>
              </li>
              <li>🕐 24/7</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>{t('footer.copyright')}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sky-400 transition">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-sky-400 transition">{t('footer.licenses')}</a>
            <a href="#" className="hover:text-sky-400 transition">{t('footer.faq')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
