import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Globe } from "lucide-react";
import Meta from "../assets/metaverse.png"

function Header() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const pupilX = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  const pupilY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);
  const smoothPupilX = useSpring(pupilX, { stiffness: 100, damping: 10 });
  const smoothPupilY = useSpring(pupilY, { stiffness: 100, damping: 10 });

  const floatingAnimation = {
    y: [0, -10, 10, 0],
    x: [0, 10, -10, 0],
    transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            className="border-2 border-gray-300 bg-gray-50"
            animate={floatingAnimation}
          />
        ))}
      </div>

      <nav className="relative z-10 flex justify-between items-center p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-orange-500"
        >
          <img
            src={Meta}
            alt="Metaverse Logo"
            className="h-10" 
          />
        </motion.div>

        <div className="flex gap-4">
          <motion.div
            animate={floatingAnimation}
            className="px-4 py-2 bg-pink-100 rounded-full text-sm font-medium"
          >
            JOIN AS A TALENT
            <span className="ml-1 text-xs bg-red-500 text-white px-1 rounded">
              NEW
            </span>
          </motion.div>

          <motion.button
            animate={floatingAnimation}
            className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium"
          >
            SPONSER US
          </motion.button>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-20">

        <motion.div
          className="absolute top-40 right-1/3 w-12 h-12 flex justify-center items-center"
        >
 
        </motion.div>

        <motion.div
          className="absolute top-20 right-1/4 w-16 h-16 bg-orange-500 rounded-xl rotate-45"
          animate={floatingAnimation}
        />

        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            animate={floatingAnimation}
            className="text-7xl font-bold mb-4"
          >
            EXPLORE
          </motion.h1>

          <motion.div
            animate={floatingAnimation}
            className="text-7xl font-bold mb-4 flex items-center justify-center gap-4"
          >
            METAVERSE
            <div className="w-16 h-16 bg-pink-300 rounded-lg flex items-center justify-center">
              <motion.div
                className="w-8 h-4 bg-black rounded-full relative"
                style={{ x: smoothPupilX, y: smoothPupilY }}
              >
                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" />
              </motion.div>
            </div>
            WITH
          </motion.div>

          <motion.div
            animate={floatingAnimation}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center">
              <motion.div
                className="w-12 h-12 bg-green-600 rounded-full -mr-2"
                animate={floatingAnimation}
              />
              <motion.div
                className="w-12 h-12 bg-green-600 rounded-full -mr-4"
                animate={floatingAnimation}
              />
              <motion.div
                className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center"
                animate={floatingAnimation}
              >
                <Globe className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h2
            animate={floatingAnimation}
            className="text-6xl font-bold text-purple-400 mb-8"
          >
            METAVERSE CLUB
          </motion.h2>

          <motion.p
            animate={floatingAnimation}
            className="text-xl text-gray-600 mb-12"
          >
            Find the perfect events and workshops with Metaverse.
          </motion.p>

          <motion.button
            animate={floatingAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            SPONSER US
            <span className="px-2 py-1 bg-yellow-400 text-black text-sm rounded-full">
              JUST 2 MINS
            </span>
          </motion.button>
        </div>
      </main>
    </div>
  );
}

export default Header;
