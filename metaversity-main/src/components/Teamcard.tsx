import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TeamCardProps {
  title: string;
  description: string;
  color: string;
  image: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const TeamCard: React.FC<TeamCardProps> = ({ title, description, color, image }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative rounded-3xl overflow-hidden card-shadow"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-4 right-4 shape-blob w-16 h-16 opacity-30 bg-white"></div>
      <div className="p-8">
        <div className="relative w-48 h-48 mb-6 rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/90 text-lg mb-8 leading-relaxed">
          {description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold"
        >
          SCHEDULE A CALL <Clock className="w-4 h-4" />
          <span className="text-xs font-normal bg-yellow-300 px-2 py-1 rounded-full ml-2">
            IN 3 MINUTES
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TeamCard;