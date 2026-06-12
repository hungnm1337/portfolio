'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Projects() {
  const { t } = useLanguage();
  const [hoveredButtonPi, setHoveredButtonPi] = useState<number | null>(null);

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

        <div className="flex flex-col gap-12">
          {t.projects.items.map((project: any, pi: number) => (
            <motion.div
              key={project.name}
              className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl overflow-hidden hover:border-[#3a3a3a] transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: pi * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Content Side */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-[family-name:var(--font-heading)] text-[26px] font-bold text-[#f0f0f0]">
                            {project.name}
                          </h3>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-[12px] text-[#888888] border border-[#2e2e2e] rounded-lg px-3 py-1.5 hover:text-[#f0f0f0] hover:border-[#3a3a3a] transition-all bg-[#242424]"
                            >
                              <ExternalLink size={12} />
                              Live View
                            </a>
                          )}
                        </div>
                        <p className="text-[14px] text-[#555555] font-[family-name:var(--font-mono)]">
                          {project.sub} · {project.type}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[12px] text-[#555555] shrink-0 font-[family-name:var(--font-mono)] bg-[#141414] px-3 py-1.5 rounded-full border border-[#2e2e2e]">
                        <Calendar size={13} />
                        <span>{project.period}</span>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="flex gap-3 items-center mb-6">
                      <span className="font-[family-name:var(--font-mono)] text-[11px] text-[#555555] uppercase tracking-widest bg-[#242424] px-2 py-0.5 rounded">Role</span>
                      <span className="text-[14px] text-[#aaaaaa] font-medium">{project.role}</span>
                    </div>

                    {/* Description */}
                    <p className="text-[15px] text-[#bbbbbb] leading-relaxed mb-8 border-l-2 border-[#3a3a3a] pl-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#555555] mb-4">Core Features</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {project.highlights.map((h: string, hi: number) => (
                          <li key={hi} className="flex gap-3 text-[14px] text-[#888888] leading-relaxed group/item text-[13.5px]">
                            <span className="text-[#3a3a3a] mt-1 shrink-0 group-hover/item:text-[#555555] transition-colors">—</span>
                            <span className="group-hover/item:text-[#bbbbbb] transition-colors">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-8 border-t border-[#2e2e2e]">
                    {project.tech.map((tag: string) => (
                      <span
                        key={tag}
                        className="font-[family-name:var(--font-mono)] text-[11.5px] font-medium px-3 py-1.5 border border-[#3a3a3a] rounded-lg bg-[#242424]/30 text-[#888888] hover:border-[#888888] hover:text-[#f0f0f0] transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Slider Side */}
                <div className="w-full lg:w-1/2 relative bg-[#141414] border-b lg:border-b-0 lg:border-l border-[#2e2e2e] group/swiper order-1 lg:order-2">
                  <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    pagination={{ 
                      clickable: true,
                      dynamicBullets: true 
                    }}
                    navigation={{
                      nextEl: `.swiper-button-next-${pi}`,
                      prevEl: `.swiper-button-prev-${pi}`,
                    }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="h-[300px] md:h-[450px] lg:h-[600px] w-full"
                  >
                    {project.images?.map((img: string, idx: number) => (
                      <SwiperSlide key={idx} className="relative w-full h-full overflow-hidden">
                        <Image
                          src={img}
                          alt={`${project.name} screenshot ${idx + 1}`}
                          fill
                          className={`object-cover object-top transition-[object-position] duration-[20000ms] ease-linear ${
                            hoveredButtonPi === pi ? '' : 'group-hover/swiper:object-bottom'
                          }`}
                        />
                        {/* Overlay shade to improve readability of arrows */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/swiper:opacity-100 transition-opacity pointer-events-none" />
                      </SwiperSlide>
                    ))}

                    {/* Custom Navigation Arrows */}
                    <button 
                      onMouseEnter={() => setHoveredButtonPi(pi)}
                      onMouseLeave={() => setHoveredButtonPi(null)}
                      className={`swiper-button-prev-${pi} absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/60 hover:text-white transition-all opacity-0 group-hover/swiper:opacity-100`}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onMouseEnter={() => setHoveredButtonPi(pi)}
                      onMouseLeave={() => setHoveredButtonPi(null)}
                      className={`swiper-button-next-${pi} absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/60 hover:text-white transition-all opacity-0 group-hover/swiper:opacity-100`}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </Swiper>
                  
                  {/* Style for pagination dots */}
                  <style jsx global>{`
                    .swiper-pagination-bullet {
                      background: rgba(255, 255, 255, 0.3) !important;
                      opacity: 1 !important;
                    }
                    .swiper-pagination-bullet-active {
                      background: #fff !important;
                    }
                  `}</style>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}