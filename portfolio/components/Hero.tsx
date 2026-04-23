'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  onContactClick: () => void;
}

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
});

export default function Hero({ onContactClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
      <div className="wrap flex items-center justify-between gap-16">

        {/* Text side */}
        <div className="flex-1 max-w-[560px]">
          <motion.p
            variants={fadeUp(0)} initial="hidden" animate="show"
            className="font-[family-name:var(--font-mono)] text-[13px] text-[#555555] tracking-[0.1em] uppercase mb-3"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            variants={fadeUp(1)} initial="hidden" animate="show"
            className="font-[family-name:var(--font-heading)] text-[clamp(36px,5vw,60px)] font-bold text-[#f0f0f0] tracking-tight leading-[1.1] mb-2"
          >
            {t.hero.name}
          </motion.h1>

          <motion.p
            variants={fadeUp(2)} initial="hidden" animate="show"
            className="font-[family-name:var(--font-heading)] text-[clamp(18px,2.5vw,26px)] font-light text-[#888888] mb-5"
          >
            {t.hero.role}
          </motion.p>

          <motion.p
            variants={fadeUp(3)} initial="hidden" animate="show"
            className="text-[15px] text-[#888888] leading-[1.7] max-w-[440px] mb-6"
          >
            {t.hero.sub}
          </motion.p>

          {/* Open badge */}
          <motion.div
            variants={fadeUp(4)} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 text-[12.5px] text-[#888888] border border-[#2e2e2e] rounded-full px-4 py-1.5 mb-8 bg-[#1c1c1c]"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)] shrink-0" />
            {t.hero.open}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp(5)} initial="hidden" animate="show"
            className="flex items-center gap-3 flex-wrap mb-9"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#f0f0f0] text-[#0f0f0f] text-[14px] font-medium hover:bg-[#aaaaaa] transition-all duration-200 hover:-translate-y-px"
            >
              {t.hero.cta_projects}
              <ArrowDown size={14} />
            </a>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#3a3a3a] text-[#f0f0f0] text-[14px] font-medium hover:bg-[#1c1c1c] hover:border-[#888888] transition-all duration-200 hover:-translate-y-px cursor-pointer"
            >
              {t.hero.cta_contact}
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeUp(6)} initial="hidden" animate="show"
            className="flex items-center gap-3"
          >
            {[
              { href: 'https://github.com/hungnm1337', icon: <FaGithub size={17} />, label: 'GitHub' },
              { href: 'mailto:hungnm1337@gmail.com', icon: <Mail size={17} />, label: 'Email' },
              { href: 'tel:+84373411812', icon: <Phone size={17} />, label: 'Phone' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 border border-[#2e2e2e] rounded-lg text-[#888888] hover:text-[#f0f0f0] hover:border-[#3a3a3a] hover:bg-[#1c1c1c] transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Avatar side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="shrink-0 hidden lg:block"
        >
          <div className="w-[280px] h-[280px] rounded-full p-[3px] bg-[#3a3a3a]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#1c1c1c]">
              <Image
                src="/avt.jpg"
                alt="Nguyen Manh Hung"
                width={280}
                height={280}
                priority
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-[#555555]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
