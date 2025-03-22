import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import { aiSkills, devSkills, coreCompetencies } from '@/lib/constants';
import { Skill, CoreCompetency } from '@/types';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-[#1F2937]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-[#8B5CF6] font-medium">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2">AI & Technical Skills</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities in AI, machine learning, and software development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6">AI & Machine Learning</h3>
            
            <div className="space-y-5">
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
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Software Development</h3>
            
            <div className="space-y-5">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {coreCompetencies.map((competency: CoreCompetency, index: number) => (
            <motion.div 
              key={competency.title}
              className="bg-[#1E293B] p-6 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={`w-12 h-12 flex items-center justify-center ${competency.bgColor} ${competency.textColor} rounded-lg mb-4`}>
                <i className={`${competency.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{competency.title}</h3>
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
