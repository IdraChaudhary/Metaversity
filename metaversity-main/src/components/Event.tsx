import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Banner from "../assets/banner.png"

function Event() {
  return (
    <div className="min-h-screen grid-background flex items-center justify-center p-4" style={{ backgroundColor: '#865DFF' }}>

      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <motion.h1 
            className="font-degular text-4xl md:text-6xl font-bold text-yellow-300 bg-black/20 inline-block px-6 py-2 rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            METAVERSE EVENT STORE
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-[#FFF2AF] rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              className="flex-1"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mb-4"
              >
                <Sparkles className="w-full h-full text-green-400" />
              </motion.div>
              <h2 className="font-degular text-3xl md:text-4xl font-bold text-black-300 mb-4">
                AR CHASE
              </h2>
              <p className="font-degular text-xl text-black leading-relaxed mb-6">
              Brew your strategy, chase the clues, and unlock the treasure! ☕🔍 Powered by Nescafé. #BrewTheHunt"
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-degular inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold text-lg"
              >
                <a href="https://forms.gle/Vjuj8s5f6Fptg3AC8">REGISTER NOW</a>

                <motion.span
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                  className="ml-2 bg-yellow-300 text-black text-sm px-2 py-1 rounded"
                >
                  IN 3 MINUTES
                </motion.span>
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex-1"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.img
                src={Banner}
                alt="AR Experience"
                className="rounded-2xl w-full h-auto shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Event;