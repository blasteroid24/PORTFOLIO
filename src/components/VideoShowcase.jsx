'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const demos = [
  {
    title: 'AI Video Demo',
    url: 'https://res.cloudinary.com/duw6ht4tk/video/upload/v1754118927/ochidesignclone_vrxjem.mp4',
  },
  {
    title: 'TrendBite',
    url: 'https://res.cloudinary.com/duw6ht4tk/video/upload/v1754117772/Trendingfood_ufuayl.mp4',
  },
  {
    title: 'Template Showcase',
    url: 'https://res.cloudinary.com/duw6ht4tk/video/upload/v1754118106/templates_hywuqt.mp4',
  },
];

export default function Demo() {
  return (
    <section className="bg-primary py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Demo Gallery</h2>
        <p className="text-gray-300 mb-12 text-base md:text-lg">
          A glimpse into the tools, ideas, and tech I've built — in motion.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ReactPlayer
                url={demo.url}
                width="100%"
                height="100%"
                playing
                loop
                muted
                controls={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{demo.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
