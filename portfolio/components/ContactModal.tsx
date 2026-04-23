'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Toast, { ToastType } from './Toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const LABELS = {
  vi: {
    title: 'Gửi tin nhắn',
    sub: 'Tôi sẽ phản hồi trong vòng 24 giờ.',
    name: 'Họ và tên',
    name_ph: 'Nguyễn Văn A',
    email: 'Email',
    email_ph: 'example@gmail.com',
    phone: 'Số điện thoại',
    phone_ph: '+84 0xx xxx xxxx (không bắt buộc)',
    message: 'Tin nhắn',
    message_ph: 'Xin chào! Tôi muốn trao đổi về...',
    send: 'Gửi tin nhắn',
    sending: 'Đang gửi...',
    required: 'Trường này là bắt buộc',
    email_invalid: 'Email không hợp lệ',
    msg_short: 'Tin nhắn ít nhất 10 ký tự',
    success: '✅ Tin nhắn đã được gửi thành công!',
    error: '❌ Có lỗi xảy ra, vui lòng thử lại.',
  },
  en: {
    title: 'Send a Message',
    sub: "I'll get back to you within 24 hours.",
    name: 'Full Name',
    name_ph: 'John Doe',
    email: 'Email',
    email_ph: 'example@gmail.com',
    phone: 'Phone Number',
    phone_ph: '+84 0xx xxx xxxx (optional)',
    message: 'Message',
    message_ph: "Hi! I'd like to discuss...",
    send: 'Send Message',
    sending: 'Sending...',
    required: 'This field is required',
    email_invalid: 'Invalid email address',
    msg_short: 'Message must be at least 10 characters',
    success: '✅ Your message has been sent successfully!',
    error: '❌ Something went wrong. Please try again.',
  },
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { lang } = useLanguage();
  const L = LABELS[lang];

  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = L.required;
    if (!form.email.trim()) {
      errs.email = L.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = L.email_invalid;
    }
    if (!form.message.trim()) {
      errs.message = L.required;
    } else if (form.message.trim().length < 10) {
      errs.message = L.msg_short;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setToast({ message: L.success, type: 'success' });
        setForm({ name: '', email: '', phone: '', message: '' });
        setErrors({});
        setTimeout(onClose, 1500);
      } else {
        setToast({ message: L.error, type: 'error' });
      }
    } catch {
      setToast({ message: L.error, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const closeToast = useCallback(() => setToast(null), []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              className="relative z-10 w-full max-w-[520px] bg-[#161616] border border-[#2e2e2e] rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-[#2e2e2e]">
                <div>
                  <h2 className="heading-font text-[20px] font-bold text-[#f0f0f0]">
                    {L.title}
                  </h2>
                  <p className="text-[13px] text-[#888888] mt-0.5">{L.sub}</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#888888] hover:text-[#f0f0f0] hover:bg-[#242424] transition-all cursor-pointer"
                  aria-label="Close"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-[12.5px] text-[#888888] mono mb-1.5">
                    {L.name} <span className="text-[#f87171]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder={L.name_ph}
                    className={`w-full bg-[#1c1c1c] border rounded-lg px-3.5 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#555555] outline-none transition-all duration-200
                      focus:border-[#888888] focus:bg-[#1f1f1f]
                      ${errors.name ? 'border-[#f87171]' : 'border-[#2e2e2e]'}`}
                  />
                  {errors.name && (
                    <p className="text-[12px] text-[#f87171] mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[12.5px] text-[#888888] mono mb-1.5">
                    {L.email} <span className="text-[#f87171]">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder={L.email_ph}
                    className={`w-full bg-[#1c1c1c] border rounded-lg px-3.5 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#555555] outline-none transition-all duration-200
                      focus:border-[#888888] focus:bg-[#1f1f1f]
                      ${errors.email ? 'border-[#f87171]' : 'border-[#2e2e2e]'}`}
                  />
                  {errors.email && (
                    <p className="text-[12px] text-[#f87171] mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone (optional) */}
                <div>
                  <label className="block text-[12.5px] text-[#888888] mono mb-1.5">
                    {L.phone}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    placeholder={L.phone_ph}
                    className="w-full bg-[#1c1c1c] border border-[#2e2e2e] rounded-lg px-3.5 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#555555] outline-none transition-all duration-200 focus:border-[#888888] focus:bg-[#1f1f1f]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[12.5px] text-[#888888] mono mb-1.5">
                    {L.message} <span className="text-[#f87171]">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder={L.message_ph}
                    rows={4}
                    className={`w-full bg-[#1c1c1c] border rounded-lg px-3.5 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#555555] outline-none transition-all duration-200 resize-none
                      focus:border-[#888888] focus:bg-[#1f1f1f]
                      ${errors.message ? 'border-[#f87171]' : 'border-[#2e2e2e]'}`}
                  />
                  {errors.message && (
                    <p className="text-[12px] text-[#f87171] mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#f0f0f0] text-[#0f0f0f] text-[14px] font-semibold hover:bg-[#cccccc] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer mt-1"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {L.sending}
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      {L.send}
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
    </>
  );
}
