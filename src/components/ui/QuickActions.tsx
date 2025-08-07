import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Phone, 
  Code, 
  Users, 
  Clock, 
  Palette,
  Sparkles
} from 'lucide-react';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  query: string;
  color: string;
}

interface QuickActionsProps {
  onActionClick: (query: string) => void;
  className?: string;
}

const quickActions: QuickAction[] = [
  {
    id: 'services',
    label: 'Our Services',
    icon: Sparkles,
    query: 'What services do you offer?',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: DollarSign,
    query: 'What are your rates and pricing?',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'contact',
    label: 'Contact Info',
    icon: Phone,
    query: 'How can I contact you?',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    icon: Palette,
    query: 'Show me your portfolio and projects',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'team',
    label: 'Our Team',
    icon: Users,
    query: 'Tell me about your team',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'timeline',
    label: 'Timeline',
    icon: Clock,
    query: 'How long do projects take?',
    color: 'from-teal-500 to-cyan-600'
  }
];

const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick, className = '' }) => {
  return (
    <div className={`space-y-3 sm:space-y-4 ${className}`}>
      <div className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-medium">Quick Actions</span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.id}
            onClick={() => onActionClick(action.query)}
            className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${action.color} text-white text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-300 group shadow-sm`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <action.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span className="text-center leading-tight font-medium">{action.label}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions; 