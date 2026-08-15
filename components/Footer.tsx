import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-sky-400 mb-4">{t('header.brand')}</div>
            <p className="text-sm">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">{t('footer.equipment')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400 transition">{t('section1.products.concentrator5.name')}</a></li>
              <li><a href="#" className="hover:text-sky-400 transition">{t('section1.products.portable.name')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400 transition">{t('header.packages')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">{t('footer.contacts')}</h4>
            <ul className="space-y-2 text-sm">
              <li>☎️ +7 (495) 123-45-67</li>
              <li>📱 WhatsApp / Telegram</li>
              <li>✉️ info@o2medtech.ru</li>
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
