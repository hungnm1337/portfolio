'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FloatingContactButtonProps {
  onClick: () => void;
}

export default function FloatingContactButton({ onClick }: FloatingContactButtonProps) {
  const { lang } = useLanguage();
  const label = lang === 'vi' ? 'Liên hệ' : 'Contact';

  return (
    <>
      <style>{`
        @keyframes float-shake {
          0%, 85%, 100% { transform: rotate(0deg); }
          87%  { transform: rotate(-8deg); }
          89%  { transform: rotate(8deg); }
          91%  { transform: rotate(-6deg); }
          93%  { transform: rotate(6deg); }
          95%  { transform: rotate(-3deg); }
          97%  { transform: rotate(3deg); }
          99%  { transform: rotate(0deg); }
        }
        .float-btn {
          animation: float-shake 3s ease-in-out infinite;
        }
        .float-btn:hover {
          animation: none;
        }
      `}</style>

      <motion.button
        onClick={onClick}
        initial={{ opacity: 0, y: 32, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.93 }}
        className="float-btn fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#f0f0f0] text-[#0f0f0f] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-[#cccccc] transition-colors duration-200 cursor-pointer select-none"
        aria-label={label}
      >
        <MessageSquare size={18} strokeWidth={2} />
        <span className="text-[13.5px] font-semibold tracking-wide">{label}</span>
      </motion.button>
    </>
  );
}
