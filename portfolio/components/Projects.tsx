'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';
import { MacbookScroll } from '@/components/ui/macbook-scroll';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Projects() {
  const { t } = useLanguage();
  const projects: any[] = t.projects.items;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => goTo((current - 1 + projects.length) % projects.length);
  const next = () => goTo((current + 1) % projects.length);

  const project = projects[current];

  // Lấy ảnh đầu tiên của dự án đang active để hiển thị trong MacBook
  const macbookSrc = project.images?.[0] ?? null;

  return (
    <section id="projects" className="section-py-alt">
      

      {/* ===== Project Cards Carousel ===== */}
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

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Project Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl overflow-hidden shadow-xl"
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
                            {project.linkBackend && (
                              <a
                                href={project.linkBackend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-[12px] text-[#888888] border border-[#2e2e2e] rounded-lg px-3 py-1.5 hover:text-[#f0f0f0] hover:border-[#3a3a3a] transition-all bg-[#242424]"
                              >
                                <FaGithub size={12} />
                                Backend
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
                  <div className="w-full lg:w-1/2 relative bg-[#141414] border-b lg:border-b-0 lg:border-l border-[#2e2e2e] group/swiper order-1 lg:order-2 min-h-[300px] md:min-h-[450px] lg:min-h-[400px]">
                    {project.images?.length > 0 ? (
                      <>
                        <Swiper
                          modules={[Pagination, Navigation, Autoplay]}
                          pagination={{ clickable: true, dynamicBullets: true }}
                          navigation={{
                            nextEl: `.img-next-${current}`,
                            prevEl: `.img-prev-${current}`,
                          }}
                          autoplay={{ delay: 4000, disableOnInteraction: false }}
                          loop={true}
                          className="absolute inset-0 w-full h-full"
                        >
                          {project.images.map((img: string, idx: number) => (
                            <SwiperSlide key={idx} className="relative w-full h-full overflow-hidden">
                              <Image
                                src={img}
                                alt={`${project.name} screenshot ${idx + 1}`}
                                fill
                                className={`object-cover object-top transition-[object-position] duration-[20000ms] ease-linear ${hoveredBtn ? '' : 'group-hover/swiper:object-bottom'}`}
                              />
                              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/swiper:opacity-100 transition-opacity pointer-events-none" />
                            </SwiperSlide>
                          ))}
                          <button
                            onMouseEnter={() => setHoveredBtn(true)}
                            onMouseLeave={() => setHoveredBtn(false)}
                            className={`img-prev-${current} absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/60 hover:text-white transition-all opacity-0 group-hover/swiper:opacity-100`}
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onMouseEnter={() => setHoveredBtn(true)}
                            onMouseLeave={() => setHoveredBtn(false)}
                            className={`img-next-${current} absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/60 hover:text-white transition-all opacity-0 group-hover/swiper:opacity-100`}
                          >
                            <ChevronRight size={20} />
                          </button>
                        </Swiper>
                        <style jsx global>{`
                          .swiper-pagination-bullet { background: rgba(255,255,255,0.3) !important; opacity: 1 !important; }
                          .swiper-pagination-bullet-active { background: #fff !important; }
                        `}</style>
                      </>
                    ) : (
                      /* Placeholder when no images */
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-[#333333]">
                        <div className="w-16 h-16 rounded-2xl border border-[#2a2a2a] flex items-center justify-center">
                          <FaGithub size={28} />
                        </div>
                        <p className="font-[family-name:var(--font-mono)] text-[12px] tracking-widest uppercase">View on GitHub</p>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[12px] text-[#555555] hover:text-[#aaaaaa] transition-colors underline underline-offset-4"
                          >
                            {project.link.replace('https://', '')}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="flex items-center justify-between mt-6">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === current
                      ? 'w-6 h-2 bg-[#f0f0f0]'
                      : 'w-2 h-2 bg-[#3a3a3a] hover:bg-[#555555]'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            {/* Counter + Arrows */}
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-mono)] text-[12px] text-[#555555]">
                {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#2e2e2e] bg-[#1c1c1c] flex items-center justify-center text-[#888888] hover:text-[#f0f0f0] hover:border-[#555555] transition-all duration-200 active:scale-95"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#2e2e2e] bg-[#1c1c1c] flex items-center justify-center text-[#888888] hover:text-[#f0f0f0] hover:border-[#555555] transition-all duration-200 active:scale-95"
                  aria-label="Next project"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}