'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, User } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS: Record<string, React.ReactNode> = {
  'Ngày sinh': <Calendar size={13} />,
  'Date of birth': <Calendar size={13} />,
  'Giới tính': <User size={13} />,
  Gender: <User size={13} />,
  'Địa chỉ': <MapPin size={13} />,
  Location: <MapPin size={13} />,
  Email: <Mail size={13} />,
  'Điện thoại': <Phone size={13} />,
  Phone: <Phone size={13} />,
  GitHub: <FaGithub size={13} />,
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-py">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="section-label">01 —</p>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-16 items-start">
          {/* Avatar */}
          <motion.div
            className="md:sticky md:top-24"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="w-full max-w-[220px] mx-auto md:max-w-full aspect-[5/6] rounded-2xl overflow-hidden border border-[#2e2e2e] bg-[#1c1c1c]">
              <Image
                src="/avt.jpg"
                alt="Nguyen Manh Hung"
                width={300}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-[15px] text-[#888888] leading-[1.8] mb-9 border-l-2 border-[#3a3a3a] pl-4">
              {t.about.summary}
            </p>

            <div className="flex flex-col">
              {t.about.info.map(({ label, value }) => (
                <div
                  key={label}
                  className="grid grid-cols-[18px_130px_1fr] items-center gap-2.5 py-3 border-b border-[#2e2e2e] last:border-none"
                >
                  <span className="text-[#555555] flex items-center">{ICONS[label]}</span>
                  <span className="font-[family-name:var(--font-mono)] text-[12.5px] text-[#555555] whitespace-nowrap">
                    {label}
                  </span>
                  <span className="text-[14px] text-[#888888]">
                    {label === 'Email' ? (
                      <a href={`mailto:${value}`} className="hover:text-[#f0f0f0] transition-colors">{value}</a>
                    ) : label === 'GitHub' ? (
                      <a href={`https://${value}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#f0f0f0] transition-colors">{value}</a>
                    ) : (
                      value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
