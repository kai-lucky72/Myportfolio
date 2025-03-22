import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import { aiSkills, devSkills, coreCompetencies } from '@/lib/constants';
import { Skill, CoreCompetency } from '@/types';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black via-[#0c1220] to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-primary font-medium tracking-wider">PROFESSIONAL TOOLKIT</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 flex flex-col md:flex-row items-center justify-center gap-3">
            <span>Technical</span> 
            <span className="bg-gradient-to-r from-primary to-[#0EA5E9] bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my professional skills in system architecture, software development, and technical leadership.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
              <span className="h-8 w-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-server"></i>
              </span>
              System Architecture
            </h3>
            
            <div className="space-y-6">
              {aiSkills.map((skill: Skill, index: number) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
              <span className="h-8 w-8 bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-lg flex items-center justify-center">
                <i className="fas fa-code"></i>
              </span>
              Software Development
            </h3>
            
            <div className="space-y-6">
              {devSkills.map((skill: Skill, index: number) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillBar name={skill.name} percentage={skill.percentage} color="bg-[#0EA5E9]" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">Core Competencies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreCompetencies.map((competency: CoreCompetency, index: number) => (
            <motion.div 
              key={competency.title}
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={`w-16 h-16 flex items-center justify-center ${competency.bgColor} ${competency.textColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${competency.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{competency.title}</h3>
              <p className="text-gray-400">
                {competency.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
