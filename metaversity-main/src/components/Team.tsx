import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TeamCard from './Teamcard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const teamMembers = [
  {
    "title": "PRESIDENT",
    "description": "Anushrav, as the President of the Metaverse Club at VIT Bhopal, leads the vision for innovation in virtual and augmented reality, empowering students to explore and build in the metaverse.",
    "color": "var(--card-red)",
    "image": "https://www.rishavbhardwaz.fun/_next/image?url=%2Fimgs%2Favatars%2Fanushrav.jpg&w=128&q=75"
  },
  {
    "title": "VICE PRESIDENT",
    "description": "As the Vice President of the Metaverse Club at VIT Bhopal, Idra fosters creativity and collaboration, ensuring students have the resources and guidance to push the boundaries of immersive technology.",
    "color": "var(--card-green)",
    "image": "https://www.rishavbhardwaz.fun/_next/image?url=%2Fimgs%2Favatars%2Fidra.jpg&w=128&q=75"
  }
  
];

function Team() {
  return (
    <div className="relative min-h-screen bg-transparent py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-8">
          MEET OUR <span className="highlight">TEAM</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're a dynamic team of experts dedicated to transforming your vision into reality.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
      >
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="relative z-10 mt-16 text-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Join Our Team <ArrowRight size={20} />
        </a>
      </motion.div>
      <div className="absolute inset-0 bg-white/50 -z-10" />
    </div>
  );
}

export default Team;