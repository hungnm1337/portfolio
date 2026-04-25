'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NAV_IDS = ['about', 'skills', 'experience', 'projects', 'contact'] as const;

export default function Navbar() {
  const { lang, t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const id of [...NAV_IDS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLabels: Record<string, string> = {
    about: t.nav.about,
    skills: t.nav.skills,
    experience: t.nav.experience,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'py-3 bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-[#2e2e2e]'
          : 'py-5 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="wrap flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="#" className="flex items-baseline gap-0.5 heading-font">
          <span className="text-xl font-bold text-[#f0f0f0] tracking-tight">NMH</span>
          <span className="text-2xl font-bold text-[#888888]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-[13.5px] transition-colors duration-200 relative pb-0.5 group ${active === id ? 'text-[#f0f0f0]' : 'text-[#888888] hover:text-[#f0f0f0]'
                }`}
              onClick={() => setOpen(false)}
            >
              {navLabels[id]}
              <span
                className={`absolute bottom-0 left-0 h-px bg-[#f0f0f0] transition-all duration-250 ${active === id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 bg-[#1c1c1c] border border-[#2e2e2e] rounded-lg px-3 py-1.5 mono text-[11px] font-medium text-[#888888] tracking-wider hover:bg-[#242424] hover:border-[#3a3a3a] transition-all duration-200 cursor-pointer"
            aria-label="Toggle language"
          >
            <span className={lang === 'vi' ? 'text-[#f0f0f0]' : ''}>VI</span>
            <span className="text-[#555555]">/</span>
            <span className={lang === 'en' ? 'text-[#f0f0f0]' : ''}>EN</span>
          </button>

          <button
            className="md:hidden flex items-center justify-center w-9 h-9 bg-[#1c1c1c] border border-[#2e2e2e] rounded-lg text-[#f0f0f0] hover:bg-[#242424] transition-all cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0f0f0f]/98 backdrop-blur-xl border-b border-[#2e2e2e] px-8 pb-6 pt-2 flex flex-col gap-1">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="py-3 text-[15px] text-[#888888] border-b border-[#2e2e2e] last:border-none hover:text-[#f0f0f0] transition-colors"
              onClick={() => setOpen(false)}
            >
              {navLabels[id]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
