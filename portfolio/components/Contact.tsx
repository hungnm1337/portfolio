'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactProps {
  onContactClick: () => void;
}

export default function Contact({ onContactClick }: ContactProps) {
  const { t } = useLanguage();

  const links = [
    { icon: <Mail size={17} />, label: t.contact.email_label, value: 'hungnm1337@gmail.com', href: 'mailto:hungnm1337@gmail.com' },
    { icon: <Phone size={17} />, label: t.contact.phone_label, value: '+84 037 341 1812', href: 'tel:+84373411812' },
    { icon: <FaGithub size={17} />, label: t.contact.github_label, value: 'github.com/hungnm1337', href: 'https://github.com/hungnm1337' },
  ];

  return (
    <section id="contact" className="section-py">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="section-label">05 —</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-[16px] text-[#888888] leading-relaxed mb-8">
              {t.contact.sub}
            </p>

            {/* Primary CTA — opens modal */}
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#f0f0f0] text-[#0f0f0f] text-[14px] font-semibold hover:bg-[#cccccc] transition-all duration-200 hover:-translate-y-px cursor-pointer mb-4"
            >
              <MessageSquare size={15} />
              {t.contact.title}
              <ArrowRight size={14} />
            </button>

            <p className="text-[12.5px] text-[#555555] mono mt-3">
              — hoặc liên hệ trực tiếp bên dưới
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            {links.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-[#1c1c1c] border border-[#2e2e2e] rounded-xl hover:border-[#3a3a3a] hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#242424] border border-[#2e2e2e] text-[#888888] group-hover:text-[#f0f0f0] transition-colors shrink-0">
                  {icon}
                </span>
                <div>
                  <p className="mono text-[11px] text-[#555555] uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-[14px] text-[#888888] group-hover:text-[#f0f0f0] transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#2e2e2e] flex flex-wrap items-center justify-between gap-4">
          <p className="mono text-[12px] text-[#555555]">{t.footer.copy}</p>
          <p className="mono text-[12px] text-[#555555]">Built with Next.js · Framer Motion</p>
        </div>
      </div>
    </section>
  );
}
