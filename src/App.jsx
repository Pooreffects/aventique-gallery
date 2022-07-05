import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="h-full">
      <motion.main
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
        className="py-20 w-full container mx-auto  flex flex-col items-center justify-center"
      >
        <h1 className="pb-6 lg:text-4xl md:text-4xl text-3xl text-center font-style text-slate-700 font-light tracking-wider">
          Photo Gallery
        </h1>
        <h2 className="pb-2 px-2 md:text-xl text-lg text-center lg:text-2xl font-primary ">
          A photograph keeps a moment from running away
        </h2>
      </motion.main>
      <Outlet />
    </div>
  );
}
