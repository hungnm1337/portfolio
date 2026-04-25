'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ContactModal from '@/components/ContactModal';
import FloatingContactButton from '@/components/FloatingContactButton';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onContactClick={() => setModalOpen(true)} />
        <Skills />
        <Experience />
        <Projects />
        <Contact onContactClick={() => setModalOpen(true)} />
      </main>
      <FloatingContactButton onClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
