import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color = 'bg-primary' }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      // Delay the animation slightly
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-white">{name}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="relative h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`absolute h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
