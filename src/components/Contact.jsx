'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        e.target.reset(); // clear form
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred while sending.');
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <section className="bg-primary py-20 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-accent mb-6">Get in Touch</h2>
        <p className="mb-8 text-gray-300">
          Interested in working together or have a question? Drop a message!
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 max-w-xl mx-auto"
        >
          <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded bg-[#1e293b]" />
          <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded bg-[#1e293b]" />
          <textarea name="message" rows="5" placeholder="Your Message" required className="p-3 rounded bg-[#1e293b]" />
          <button
            type="submit"
            disabled={loading}
            className="bg-zinc-600 text-white font-semibold py-2 rounded hover:opacity-80 transition"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-8 text-accent">
          <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        </div>

        <div className="mt-6">
          <a
            href="/Mehul_Chauhan_Resume.pdf"
            download
            className="inline-block mt-4 px-6 py-2 border-2 border-accent text-accent rounded hover:bg-accent transition">
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
