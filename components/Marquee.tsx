import { useTranslations } from 'next-intl';
import { Wind, Building2, Truck, Zap } from 'lucide-react';

export function Marquee() {
  const t = useTranslations();

  const items = [
    { icon: Wind, text: t('marquee.item1'), color: '' },
    { icon: Building2, text: t('marquee.item2'), color: 'text-green-500' },
    { icon: Truck, text: t('marquee.item3'), color: 'text-cyan-500' },
    { icon: Zap, text: t('marquee.item4'), color: 'text-amber-500' },
  ];

  return (
    <div className="relative overflow-hidden bg-sky-600 dark:bg-sky-800 py-4">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        <div className="flex items-center gap-8 px-8 text-white font-medium">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <item.icon className={`w-5 h-5 ${item.color}`} strokeWidth={2} />
              <span>{item.text}</span>
            </div>
          ))}
          <span>·</span>
          {items.map((item, idx) => (
            <div key={`repeat-${idx}`} className="flex items-center gap-2">
              <item.icon className={`w-5 h-5 ${item.color}`} strokeWidth={2} />
              <span>{item.text}</span>
            </div>
          ))}
          <span>·</span>
        </div>
        <div className="flex items-center gap-8 px-8 text-white font-medium">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <item.icon className={`w-5 h-5 ${item.color}`} strokeWidth={2} />
              <span>{item.text}</span>
            </div>
          ))}
          <span>·</span>
          {items.map((item, idx) => (
            <div key={`repeat-${idx}`} className="flex items-center gap-2">
              <item.icon className={`w-5 h-5 ${item.color}`} strokeWidth={2} />
              <span>{item.text}</span>
            </div>
          ))}
          <span>·</span>
        </div>
      </div>
    </div>
  );
}
