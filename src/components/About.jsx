'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const springFadeIn = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
};

export default function About() {
  return (
    <section className="min-h-screen py-24 px-6 bg-black text-gray-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left: Text */}
        <motion.div variants={springFadeIn}>
          <h2 className="text-4xl font-bold mb-6 text-accent">About Me</h2>
          <motion.p className="text-lg leading-relaxed mb-4 text-gray-200" variants={springFadeIn}>
            I'm Mehul — a frontend developer obsessed with building aesthetic, animated, and high-performing digital experiences.
          </motion.p>
          <motion.p className="text-md leading-relaxed text-gray-400" variants={springFadeIn}>
            With a background in AI and data, I bring ideas to life through clean UI, intuitive UX, and immersive 3D design. I enjoy exploring tools like Three.js and WebGL to make experiences truly interactive.
          </motion.p>
          <motion.p className="text-md leading-relaxed text-gray-400 mt-4" variants={springFadeIn}>
            Outside of code, I love transforming myself physically and mentally, constantly evolving — both in fitness and craft.
          </motion.p>
        </motion.div>

        {/* Right: Tech/Theme Card */}
        <motion.div
          variants={springFadeIn}
          className="flex justify-center"
        >
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl border border-accent shadow-[0_0_30px_#38bdf8] w-72 h-72 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-500 ease-in-out backdrop-blur-md">
            <h3 className="text-xl text-accent font-bold mb-4">Tech Stack</h3>
            <ul className="text-sm text-gray-300 space-y-2 text-center">
              <li>⚛️ React / Next.js</li>
              <li>🎨 Tailwind CSS</li>
              <li>🧠 Three.js / R3F</li>
              <li>🧰 Node / Flask / FastAPI</li>
              <li>📦 MongoDB / MySQL / Postgres /Prisma / Alembic</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
