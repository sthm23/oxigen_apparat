import { useTranslations } from 'next-intl';

export function Marquee() {
  const t = useTranslations();

  return (
    <div className="relative overflow-hidden bg-sky-600 dark:bg-sky-800 py-4">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        <div className="flex items-center gap-8 px-8 text-white font-medium">
          <span>{t('marquee.item1')}</span>
          <span>·</span>
          <span>{t('marquee.item2')}</span>
          <span>·</span>
          <span>{t('marquee.item3')}</span>
          <span>·</span>
          <span>{t('marquee.item4')}</span>
          <span>·</span>
          <span>{t('marquee.item1')}</span>
          <span>·</span>
          <span>{t('marquee.item2')}</span>
          <span>·</span>
          <span>{t('marquee.item3')}</span>
          <span>·</span>
          <span>{t('marquee.item4')}</span>
          <span>·</span>
        </div>
        <div className="flex items-center gap-8 px-8 text-white font-medium">
          <span>{t('marquee.item1')}</span>
          <span>·</span>
          <span>{t('marquee.item2')}</span>
          <span>·</span>
          <span>{t('marquee.item3')}</span>
          <span>·</span>
          <span>{t('marquee.item4')}</span>
          <span>·</span>
          <span>{t('marquee.item1')}</span>
          <span>·</span>
          <span>{t('marquee.item2')}</span>
          <span>·</span>
          <span>{t('marquee.item3')}</span>
          <span>·</span>
          <span>{t('marquee.item4')}</span>
          <span>·</span>
        </div>
      </div>
    </div>
  );
}
