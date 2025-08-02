'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaCircleArrowUp } from "react-icons/fa6";

const projects = [
  {
    title: 'TrendBite',
    description: 'Find Trending Food based on your location.',
    tech: ['React Native', 'Firebase'],
    github: '',
    demo: ''
  },
  {
    title: 'SmartShop',
    description: 'A full-stack e-commerce website.',
    tech: ['Nextjs', 'Node.js', 'Expressjs ','Postgres'],
    github: 'https://github.com/blasteroid24/Smartshop',
    demo: ''
  },
  {
    title: 'DocAI',
    description: 'An AI assistant to track anomologies in your blood report over time',
    tech: ['Python', 'SpeechRecognition', 'Tkinter'],
    github: 'https://github.com/blasteroid25/DOCAI',
    demo: ''
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Projects() {
  return (
    <section className="bg-primary py-20 px-6 ">
      <h2 className="text-3xl font-bold text-accent mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag) => (
                <span key={tag} className="text-xs bg-accent text-white px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors "
              >
                <FaGithub size={20} />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center mt-16 gap-4 relative">

        {/* Button */}
        <Link href="/projects">
          <button className="px-6 py-2 border-2 border-accent text-accent rounded hover:text-lg transition ease-in duration-600 font-semibold">
            View all Projects
          </button>
        </Link>

        {/* Animated Arrow Icon */}
        <motion.div
          animate={{
            y: [30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <FaCircleArrowUp size={28} className="text-accent" />
        </motion.div>

      </div>
    </section>
  );
}
