import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/animations/ScrollAnimations";

const CryptoWeb3Section = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-56 md:h-56 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <ScrollAnimation direction="left" className="space-y-6 md:space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-green-400">
                Crypto & Web3
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Shaping Crypto into the{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Future
              </span>{" "}
              Everyone Believes In
            </motion.h2>

            <motion.div
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors cursor-pointer group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-lg font-medium underline underline-offset-4">
                Explore crypto
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </ScrollAnimation>

          {/* Right Side - 3D Cubes */}
          <ScrollAnimation direction="right" className="relative">
            <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
              {/* Main Glowing Cube */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-lg border border-gray-700"
                style={{
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.6), inset 0 0 20px rgba(34, 197, 94, 0.2)"
                }}
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-lg" />
              </motion.div>

              {/* Floating Green Sphere */}
              <motion.div
                className="absolute top-1/3 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full"
                style={{
                  boxShadow: "0 0 15px rgba(34, 197, 94, 0.8)"
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Blue Glowing Cube */}
              <motion.div
                className="absolute bottom-1/4 right-1/6 w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-lg border border-gray-700"
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 15px rgba(59, 130, 246, 0.1)"
                }}
                animate={{
                  rotateY: [0, -360],
                  rotateZ: [0, 180],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-lg" />
              </motion.div>

              {/* Additional Cubes Grid */}
              <div className="absolute inset-0 grid grid-cols-3 gap-4 md:gap-6 opacity-60">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg border border-gray-700"
                    animate={{
                      rotateY: [0, 180, 360],
                      rotateX: [0, 90, 180],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Connecting Lines Effect */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M20 30 L80 40 M30 70 L70 60 M40 20 L60 80"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="0.5"
                  fill="none"
                  animate={{
                    strokeDasharray: [0, 100],
                    strokeDashoffset: [0, -100],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CryptoWeb3Section;
