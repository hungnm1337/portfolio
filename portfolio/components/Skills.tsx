'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
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
  if (name.includes('supabase')) return <SiSupabase className="text-xl text-emerald-500" />;
  if (name.includes('mysql')) return <SiMysql className="text-xl text-blue-500" />;
  if (name.includes('postgresql')) return <SiPostgresql className="text-xl text-blue-400" />;
  if (name.includes('typescript')) return <SiTypescript className="text-xl text-blue-400" />;
  if (name.includes('angular')) return <SiAngular className="text-xl text-red-600" />;
  if (name.includes('next.js')) return <SiNextdotjs className="text-xl text-white" />;
  if (name.includes('node.js') || name.includes('nodejs')) return <SiNodedotjs className="text-xl text-green-500" />;
  if (name.includes('docker')) return <SiDocker className="text-xl text-blue-500" />;
  if (name.includes('nginx')) return <SiNginx className="text-xl text-green-500" />;
  if (name.includes('selenium')) return <SiSelenium className="text-xl text-green-400" />;
  if (name.includes('git') || name.includes('github')) return <SiGithub className="text-xl text-white" />;
  if (name.includes('jira')) return <SiJira className="text-xl text-blue-400" />;
  
  if (name.includes('winforms')) return <FaWindows className="text-xl text-blue-400" />;
  if (name.includes('vps') || name.includes('iis')) return <FaServer className="text-xl text-gray-400" />;
  if (name.includes('unit')) return <FaFlask className="text-xl text-green-400" />;
  if (name.includes('agile') || name.includes('scrum')) return <FaUsers className="text-xl text-yellow-500" />;
  if (name.includes('english') || name.includes('tiếng anh') || name.includes('ngoại ngữ') || name.includes('language')) return <FaLanguage className="text-xl text-blue-300" />;

  return <FaCode className="text-xl text-gray-400" />;
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-py-alt">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 hover:border-[#3a3a3a] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3 className="font-[family-name:var(--font-mono)] text-[13px] font-bold tracking-[0.1em] uppercase text-[#777777] mb-5 border-b border-[#2e2e2e] pb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, si) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-2.5 px-3 py-2 border border-[#3a3a3a] rounded-lg bg-[#242424] text-[#a0a0a0] hover:border-[#555555] hover:text-[#ffffff] hover:bg-[#2a2a2a] transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: gi * 0.07 + si * 0.04 }}
                    viewport={{ once: true }}
                  >
                    {getSkillIcon(skill)}
                    <span className="font-[family-name:var(--font-mono)] text-[13px] font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
