'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-py-alt">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="section-label">02 —</p>
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 hover:border-[#3a3a3a] transition-all duration-300 hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3 className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.12em] uppercase text-[#555555] mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="font-[family-name:var(--font-mono)] text-[12px] font-medium px-2.5 py-1 border border-[#3a3a3a] rounded bg-[#242424] text-[#888888] hover:border-[#888888] hover:text-[#f0f0f0] transition-all duration-200 cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: gi * 0.07 + si * 0.04 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
