'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const sections = [
  {
    title: 'Responsive Design Excellence',
    description: 'Pixel-perfect layouts that adapt beautifully to every screen.',
    video: 'https://res.cloudinary.com/duw6ht4tk/video/upload/v1754118927/ochidesignclone_vrxjem.mp4',
    tech: ['Reactjs', 'Expressjs', 'MySQL'],
  },
  {
    title: 'TrendBite',
    description: ' Projects engineered with performance and scalability at their core.',
    video: 'https://res.cloudinary.com/duw6ht4tk/video/upload/v1754117772/Trendingfood_ufuayl.mp4',
    tech: ['Tailwind', 'Next.js', 'Framer Motion', 'Flask'],
  },
  {
    title: 'Industry Scale Auth Template',
    description: 'Smart assistants, Scalable Templates to be used directly in projects.',
    video: 'https://res.cloudinary.com/duw6ht4tk/video/upload/v1754118106/templates_hywuqt.mp4',
    tech: ['Python', 'FastAPI', 'Nextjs', 'async SQL', 'Alembic'],
  },
  {
    title: 'Dinosaur Game',
    description: 'Fun game made using Javascript.',
    video: 'https://res.cloudinary.com/duw6ht4tk/video/upload/v1754118022/dinosaurgame_hekefy.mp4',
    tech: ['HTML', 'Javascripts', 'CSS'],
  },
  // {
  //   title: 'AI & Automation',
  //   description: 'Smart assistants, GPT integrations, and data-driven applications.',
  //   video: '/templates.mp4',
  //   tech: ['Python', 'OpenAI', 'Firebase'],
  // },
];

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
};

export default function AllProjects() {
  return (
    <main className="bg-black text-white">

      <motion.h1
        initial={{ opacity: 0, scale: 0.95, y: -40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="pt-36 text-center text-5xl md:text-7xl font-[var(--font-orbitron) font-extrabold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d1d5db] to-white drop-shadow-[0_0_25px_#38bdf8] mb-20 px-6"
      >
        <span className="block">CRAFTED</span>
        <span className="block mt-2">EXPERIENCES</span>
      </motion.h1>

      {sections.map((section, idx) => (
        <section
          key={idx}
          className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 py-20 px-8 border-b border-gray-800"
        >
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            custom={idx}
          >
            <ReactPlayer
              url={section.video}
              width="100%"
              height="100%"
              playing
              loop
              muted
              controls={false}
              className="rounded-xl shadow-[0_0_40px_#38bdf8]"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            custom={idx + 0.5}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">{section.title}</h2>
            <p className="text-gray-300 mb-6 text-md">{section.description}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {section.tech.map((tech, i) => (
                <span key={i} className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      ))}
    </main>
  );
}
