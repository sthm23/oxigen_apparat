import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">kislorod</span>
              <span className="text-2xl font-bold text-sky-400">pro</span>
              <span className="text-xl font-bold text-sky-300">.uz</span>
            </div>
            <p className="text-sm mb-3">
              {t('footer.description')}
            </p>
            <div className="text-xs text-slate-400 font-medium tracking-wider">
              {t('header.slogan')}
            </div>
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
              <li><a href="#packages" className="hover:text-sky-400 transition">Аренда</a></li>
              <li><a href="#packages" className="hover:text-sky-400 transition">Продажа</a></li>
              <li><a href="#equipment" className="hover:text-sky-400 transition">Расходники</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">{t('footer.contacts')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+998990020101" className="hover:text-sky-400 transition">
                  ☎️ {t('footer.phone')}
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
