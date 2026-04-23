'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-py-alt">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="section-label">04 —</p>
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="section-line" />
        </motion.div>

        <div className="flex flex-col gap-8">
          {t.projects.items.map((project, pi) => (
            <motion.div
              key={project.name}
              className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-8 hover:border-[#3a3a3a] transition-all duration-300 hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: pi * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-[family-name:var(--font-heading)] text-[22px] font-bold text-[#f0f0f0]">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[12px] text-[#888888] border border-[#2e2e2e] rounded-lg px-2.5 py-1 hover:text-[#f0f0f0] hover:border-[#3a3a3a] transition-all"
                      >
                        <ExternalLink size={11} />
                        Live
                      </a>
                    )}
                  </div>
                  <p className="text-[13px] text-[#555555] font-[family-name:var(--font-mono)]">
                    {project.sub} · {project.type}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#555555] shrink-0">
                  <Calendar size={12} />
                  <span>{project.period}</span>
                </div>
              </div>

              {/* Role */}
              <div className="flex gap-2 items-center mb-4">
                <span className="font-[family-name:var(--font-mono)] text-[11px] text-[#555555] uppercase tracking-wider">Role:</span>
                <span className="text-[13px] text-[#888888]">{project.role}</span>
              </div>

              {/* Description */}
              <p className="text-[14px] text-[#888888] leading-relaxed mb-6 border-l border-[#3a3a3a] pl-4">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2.5 text-[13px] text-[#888888] leading-relaxed">
                      <span className="text-[#3a3a3a] mt-1.5 shrink-0">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-[#2e2e2e]">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-mono)] text-[12px] font-medium px-2.5 py-1 border border-[#3a3a3a] rounded bg-[#242424] text-[#888888] hover:border-[#888888] hover:text-[#f0f0f0] transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
