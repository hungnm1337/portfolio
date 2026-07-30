'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { 
  SiDotnet, SiTypescript, SiAngular, SiNextdotjs, SiDocker, SiNginx, SiSelenium, SiGithub, SiJira, SiSupabase, SiMysql, SiPostgresql, SiNodedotjs 
} from 'react-icons/si';
import { 
  FaDatabase, FaCode, FaWindows, FaServer, FaFlask, FaUsers, FaLanguage 
} from 'react-icons/fa';

const getSkillIcon = (skillName: string) => {
  const name = skillName.toLowerCase();
  if (name.includes('.net') || name.includes('asp.net')) return <SiDotnet className="text-xl text-purple-600" />;
  if (name.includes('sql server')) return <FaDatabase className="text-xl text-red-500" />;
  if (name.includes('supabase')) return <SiSupabase className="text-xl text-emerald-600" />;
  if (name.includes('mysql')) return <SiMysql className="text-xl text-blue-600" />;
  if (name.includes('postgresql')) return <SiPostgresql className="text-xl text-blue-500" />;
  if (name.includes('typescript')) return <SiTypescript className="text-xl text-blue-500" />;
  if (name.includes('angular')) return <SiAngular className="text-xl text-red-600" />;
  if (name.includes('next.js')) return <SiNextdotjs className="text-xl text-[#0f0f0f]" />;
  if (name.includes('node.js') || name.includes('nodejs')) return <SiNodedotjs className="text-xl text-green-600" />;
  if (name.includes('docker')) return <SiDocker className="text-xl text-blue-500" />;
  if (name.includes('nginx')) return <SiNginx className="text-xl text-green-600" />;
  if (name.includes('selenium')) return <SiSelenium className="text-xl text-green-500" />;
  if (name.includes('git') || name.includes('github')) return <SiGithub className="text-xl text-[#0f0f0f]" />;
  if (name.includes('jira')) return <SiJira className="text-xl text-blue-500" />;
  if (name.includes('winforms')) return <FaWindows className="text-xl text-blue-500" />;
  if (name.includes('vps') || name.includes('iis')) return <FaServer className="text-xl text-gray-500" />;
  if (name.includes('unit')) return <FaFlask className="text-xl text-green-500" />;
  if (name.includes('agile') || name.includes('scrum')) return <FaUsers className="text-xl text-yellow-600" />;
  if (name.includes('english') || name.includes('tiếng anh') || name.includes('ngoại ngữ') || name.includes('language')) return <FaLanguage className="text-xl text-blue-500" />;
  return <FaCode className="text-xl text-gray-500" />;
};

function SkillCard({ group, gi }: { group: any; gi: number }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: gi * 0.1 }}
      viewport={{ once: true, margin: '-60px' }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <CardContainer className="inter-var w-full" containerClassName="py-0 w-full">
        <CardBody
          className="bg-white border border-[#d8d8d8] hover:border-[#bbbbbb] rounded-2xl p-6 transition-colors duration-300 shadow-sm shadow-black/5 w-full h-auto"
        >
          {/* Category label */}
          <CardItem
            translateZ={30}
            className="font-[family-name:var(--font-mono)] text-[13px] font-bold tracking-[0.1em] uppercase text-[#888888] w-full border-b border-[#e0e0e0] pb-3 mb-5"
          >
            {group.label}
          </CardItem>

          {/* Skill chips */}
          <CardItem translateZ={50} className="w-full">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                {!isActive ? (
                  <motion.div
                    key="marquee"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="mask-fade-out"
                  >
                    <div className="flex animate-marquee gap-3 py-1">
                      {group.items.map((skill: string, si: number) => (
                        <div
                          key={`${skill}-${si}`}
                          className="flex items-center gap-2.5 px-3 py-2 border border-[#e0e0e0] rounded-lg bg-[#f4f4f0] text-[#555555] whitespace-nowrap"
                        >
                          {getSkillIcon(skill)}
                          <span className="font-[family-name:var(--font-mono)] text-[13px] font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                      {/* Duplicated for smooth loop */}
                      {group.items.map((skill: string, si: number) => (
                        <div
                          key={`${skill}-${si}-dup`}
                          className="flex items-center gap-2.5 px-3 py-2 border border-[#e0e0e0] rounded-lg bg-[#f4f4f0] text-[#555555] whitespace-nowrap"
                        >
                          {getSkillIcon(skill)}
                          <span className="font-[family-name:var(--font-mono)] text-[13px] font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap gap-3 py-1"
                  >
                    {group.items.map((skill: string, si: number) => (
                      <div
                        key={`${skill}-${si}-full`}
                        className="flex items-center gap-2.5 px-3 py-2 border border-[#bbbbbb] rounded-lg bg-white text-[#0f0f0f] shadow-sm shadow-black/5"
                      >
                        {getSkillIcon(skill)}
                        <span className="font-[family-name:var(--font-mono)] text-[13px] font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-py-alt mb-5">
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

        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-start">
            {t.skills.groups.map((group, gi) => (
              <SkillCard key={group.label} group={group} gi={gi} />
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
