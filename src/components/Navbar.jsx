'use client';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const navItems = ['home', 'about', 'projects', 'demo', 'contact'];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-primary z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-accent"><NextLink href="/">Requiem</NextLink></h1>
        <ul className="flex gap-6 text-white text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-accent transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
