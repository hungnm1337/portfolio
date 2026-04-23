'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const { items, education } = t.experience;

  return (
    <section id="experience" className="section-py">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="section-label">03 —</p>
          <h2 className="section-title">{t.experience.title}</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
          {/* Work experience timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#2e2e2e]" />

            <div className="flex flex-col gap-10">
              {items.map((job, i) => (
                <motion.div
                  key={job.company}
                  className="pl-8 relative"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-60px' }}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-[6px] w-3.5 h-3.5 rounded-full border-2 border-[#3a3a3a] bg-[#0f0f0f]" />

                  {/* Card */}
                  <div className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 hover:border-[#3a3a3a] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={13} className="text-[#555555]" />
                          <span className="font-[family-name:var(--font-mono)] text-[11px] text-[#555555] uppercase tracking-wider">
                            {job.company}
                          </span>
                        </div>
                        <h3 className="font-[family-name:var(--font-heading)] text-[17px] font-semibold text-[#f0f0f0]">
                          {job.position}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="flex items-center gap-1 text-[12px] text-[#555555] justify-end mb-0.5">
                          <Calendar size={12} />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[12px] text-[#555555] justify-end">
                          <MapPin size={12} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-[13.5px] text-[#888888] leading-relaxed">
                          <span className="text-[#3a3a3a] mt-1.5 shrink-0">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education card */}
          <motion.div
            className="lg:sticky lg:top-24"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.12em] uppercase text-[#555555] mb-4">
              {education.sectionTitle}
            </p>
            <div className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 hover:border-[#3a3a3a] transition-all duration-300">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#242424] border border-[#2e2e2e] flex items-center justify-center shrink-0">
                  <GraduationCap size={16} className="text-[#888888]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-[#f0f0f0] leading-snug">
                    {education.degree}
                  </h3>
                  <p className="text-[13px] text-[#888888] mt-0.5">{education.school}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-[#2e2e2e]">
                <div className="flex items-center gap-2 text-[12.5px] text-[#555555]">
                  <Calendar size={12} />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2 text-[12.5px] text-[#555555]">
                  <MapPin size={12} />
                  <span>{education.location}</span>
                </div>
                <p className="text-[13px] text-[#888888] mt-2 font-[family-name:var(--font-mono)]">
                  {education.detail}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
