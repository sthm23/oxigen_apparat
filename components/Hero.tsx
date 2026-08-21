'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
export function Hero() {
  const t = useTranslations();
  const words = [t('header.sloganTexts.quality'), t('header.sloganTexts.trust'), t('header.sloganTexts.results'),];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); // Fade up back in
      }, 300); // half of 0.5s for switchover
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8">
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium mb-6">
              <motion.span
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} />
              {t('hero.badge')}
            </div>
          </motion.div>
          {/* Title */}
          <motion.h1
            variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            {t('hero.title')}
            <motion.span
              variants={fadeInUp}
              className={`block text-sky-600 transition-opacity duration-150 ${fade ? 'animate-fade-up opacity-100' : 'opacity-0'}`}>
              {words[index]}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp} className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#rental"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-lg transition shadow-lg shadow-sky-200 dark:shadow-sky-900/50 text-center"
            >
              {t('hero.cta1')}
            </motion.a>

            <motion.a
              href="https://t.me/Abduvohidxon0101"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-sky-600 text-sky-600 dark:text-sky-400 dark:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 rounded-full font-semibold text-lg transition text-center"
            >
              {t('hero.cta2')}
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="relative">
          <div className="md:block hidden h-150 w-full bg-[url('/img/1.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl"></div>

        </div>
      </div>
    </div>
  );
}
