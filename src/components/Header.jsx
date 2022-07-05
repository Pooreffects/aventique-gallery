import logo from '../aventique.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="bg-orange-300 px-6 py-4 flex items-center justify-between"
    >
      <Link to="/">
        <img width={230} height={240} src={logo} alt="Aventique's logo" />
      </Link>
      <Link
        to="albums"
        className="hover-underline-animation text-xl font-primary uppercase tracking-wider text-slate-700 hover:text-slate-600 font-medium hover:font-semibold"
      >
        Albums
      </Link>
    </motion.header>
  );
}
