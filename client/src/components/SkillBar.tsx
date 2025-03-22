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
    <div className="skill-item relative" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-primary font-bold">{percentage}%</span>
      </div>
      <div className="relative h-2.5 bg-gray-800 rounded-full overflow-hidden shadow-inner border border-gray-700">
        <div 
          className={`absolute h-full ${color} rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(8,109,233,0.5)]`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIG9wYWNpdHk9IjAuMiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAuNCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMTAyNEwxMDI0IDEwMjRMMTAyNCAwTDUxMiA1MTJMMCA1MTJaIi8+PC9zdmc+')]"></div>
        </div>
      </div>
      <div className="h-0.5 w-full mt-1 bg-gray-900"></div>
    </div>
  );
};

export default SkillBar;
