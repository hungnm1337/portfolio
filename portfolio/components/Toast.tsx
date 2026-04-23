'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

export type ToastType = 'success' | 'error';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  const isSuccess = type === 'success';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 80, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed bottom-6 right-6 z-[200] flex items-start gap-3 px-4 py-3 rounded-xl border shadow-xl min-w-[280px] max-w-[360px] ${
          isSuccess
            ? 'bg-[#0f2318] border-[#1a4a2e] text-[#4ade80]'
            : 'bg-[#1f0f0f] border-[#3a1a1a] text-[#f87171]'
        }`}
      >
        <span className="mt-0.5 shrink-0">
          {isSuccess
            ? <CheckCircle size={18} />
            : <XCircle size={18} />
          }
        </span>

        <p className="text-[14px] leading-snug flex-1">{message}</p>

        <button
          onClick={onClose}
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity mt-0.5 cursor-pointer"
          aria-label="Close"
        >
          <X size={15} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
