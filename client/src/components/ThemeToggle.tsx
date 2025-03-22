import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`relative h-10 w-10 rounded-full bg-primary/10 border-primary/30 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-5 w-5 text-yellow-400" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: 30 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotate: -30 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-5 w-5 text-primary" />
        </motion.div>
      )}
    </Button>
  );
};

export default ThemeToggle;