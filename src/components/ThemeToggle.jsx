import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-white/8 dark:border-white/8 light:border-zinc-200 bg-white/3 dark:bg-white/3 light:bg-zinc-100 hover:bg-white/8 dark:hover:bg-white/8 light:hover:bg-zinc-200 transition-colors duration-200 focus:outline-none cursor-pointer flex items-center justify-center overflow-hidden"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ y: theme === 'dark' ? 0 : -30, opacity: theme === 'dark' ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="w-4 h-4 text-accent-blue"
      >
        <Moon className="w-4 h-4" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ y: theme === 'light' ? 0 : 30, opacity: theme === 'light' ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="w-4 h-4 text-amber-500 absolute"
      >
        <Sun className="w-4 h-4" />
      </motion.div>
    </button>
  );
}
