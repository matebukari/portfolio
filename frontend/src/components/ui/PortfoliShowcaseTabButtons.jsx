import { Code, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const tabs = [
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'techstack', label: 'Tech Stack', icon: Zap },
];

const PortfolioShowcaseTabButtons = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center space-x-4 mb-12">
      {tabs.map(({ id, label, icon: Icon }) => {
        const isActive = activeTab === id;

        return (
          <motion.button
            key={id}
            onClick={() => onTabChange(id)}
            initial={{
              x: id === 'projects' ? -40 : 40,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: 'tween',
              duration: 0.35,
              ease: 'easeOut',
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className={`flex items-center px-8 py-3 font-medium rounded-lg transition-colors duration-300 will-change-transform
              ${
                isActive
                  ? 'bg-purple-900/70 text-white border border-purple-600 shadow-xl'
                  : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/70'
              }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default PortfolioShowcaseTabButtons;
