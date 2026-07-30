'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin, Calendar, User } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import DotDistortionBg from '@/components/DotDistortionBg';

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

const ICONS: Record<string, React.ReactNode> = {
  'Ngày sinh': <Calendar size={15} />,
  'Date of birth': <Calendar size={15} />,
  'Giới tính': <User size={15} />,
  Gender: <User size={15} />,
  'Địa chỉ': <MapPin size={15} />,
  Location: <MapPin size={15} />,
  Email: <Mail size={15} />,
  'Điện thoại': <Phone size={15} />,
  Phone: <Phone size={15} />,
  GitHub: <FaGithub size={15} />,
};

const getHref = (label: string, value: string): string | undefined => {
  if (label === 'Email') return `mailto:${value}`;
  if (label === 'GitHub') return `https://${value}`;
  if (label === 'Phone' || label === 'Điện thoại') return `tel:${value.replace(/\s/g, '')}`;
  return undefined;
};

export default function Hero({ onContactClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 -z-20 bg-[#f4f4f0]" />

      {/* Subtle radial gradient overlay for depth */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,#ffffff_0%,transparent_70%)]" />

      {/* Dot Distortion Shader — dark dots */}
      <DotDistortionBg
        dotSize={1.4}
        gap={26}
        distortionRadius={160}
        distortionStrength={52}
        dotColor="30,30,30"
        dotBaseAlpha={0.2}
        blobRadius={200}
      />

      <div className="wrap relative z-10">

        {/* Top: Name + Role + CTA | Avatar */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 mb-16">

          {/* Left: intro */}
          <div className="flex-1 max-w-[560px]">
            <motion.p
              variants={fadeUp(0)} initial="hidden" animate="show"
              className="font-[family-name:var(--font-mono)] text-[13px] text-[#888888] tracking-[0.1em] uppercase mb-3"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              variants={fadeUp(1)} initial="hidden" animate="show"
              className="font-[family-name:var(--font-heading)] text-[clamp(36px,5vw,60px)] font-bold text-[#0f0f0f] tracking-tight leading-[1.1] mb-2"
            >
              {t.hero.name}
            </motion.h1>

            <motion.p
              variants={fadeUp(2)} initial="hidden" animate="show"
              className="font-[family-name:var(--font-heading)] text-[clamp(18px,2.5vw,26px)] font-light text-[#555555] mb-5"
            >
              {t.hero.role}
            </motion.p>

            <motion.p
              variants={fadeUp(3)} initial="hidden" animate="show"
              className="text-[15px] text-[#666666] leading-[1.8] max-w-[440px] mb-6 border-l-2 border-[#cccccc] pl-4"
            >
              {t.about.summary}
            </motion.p>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="shrink-0"
          >
            <div className="w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] rounded-full p-[3px] bg-[#cccccc]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#e5e5e5]">
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

        {/* Contact info bar - full width */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="border-t border-[#d0d0d0] pt-6 mt-2"
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {t.about.info.map(({ label, value }) => {
              const href = getHref(label, value);
              const icon = ICONS[label];
              const isExternal = href?.startsWith('http');
              const tooltip = (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mb-2 transition-all duration-200 px-2 py-0.5 bg-white border border-[#d0d0d0] text-[#555555] text-[10px] font-[family-name:var(--font-mono)] rounded whitespace-nowrap z-10 pointer-events-none shadow-sm">
                  {label}
                  <span className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white border-b border-r border-[#d0d0d0] rotate-45" />
                </span>
              );
              const inner = (
                <span className="group relative flex items-center gap-2 text-[#1a1a1a] font-bold hover:text-black transition-colors duration-200 cursor-pointer">
                  <span className="shrink-0 text-[#888888] group-hover:text-[#333333] transition-colors duration-200">
                    {icon}
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-[13.5px] font-bold">{value}</span>
                  {tooltip}
                </span>
              );
              return href ? (
                <a key={label} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} aria-label={label}>
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
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
          <ArrowDown size={16} className="text-[#aaaaaa]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
