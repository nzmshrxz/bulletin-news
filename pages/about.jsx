import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function About() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section className="h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Bulletin News
      </motion.h1>

      <motion.h2
        className="text-2xl font-semibold mb-8 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        About Us
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-lg leading-relaxed mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.5 }}
      >
        <span className="font-semibold">Bulletin News</span> is a full-stack news application developed by{' '}
        <span className="font-bold text-blue-500">Najam Shiraz</span>. It leverages the{' '}
        <span className="text-blue-600">NewsAPI</span> to fetch live top headlines, offers category-based news
        filtering, and integrates <span className="text-blue-600">Firebase Authentication</span> for secure user login
        and signup functionality.
        <br />
        <br />
        This project is built using <span className="font-semibold">Next.js</span>, taking full advantage of its
        server-side rendering and routing capabilities. The interface is designed with{' '}
        <span className="font-semibold">Tailwind CSS</span>, and includes a built-in{' '}
        <span className="font-semibold">Dark Mode</span> for a comfortable reading experience. It is an end-to-end
        modern news portal showcasing strong frontend and backend integration.
      </motion.p>

      <motion.div
        className="flex gap-6 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2.6 }}
      >
        <motion.a
          href="mailto:nazamshiraz4@gmail.com"
          className="flex items-center space-x-2 hover:text-blue-500"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope size={22} />
          <span>nazamshiraz4@gmail.com</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/nazam-shiraz-76081425a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin size={24} />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/nazamshirxz?igsh=eDk5aGtkanh2eDYx&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
          whileHover={{ scale: 1.2 }}
        >
          <FaInstagram size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
