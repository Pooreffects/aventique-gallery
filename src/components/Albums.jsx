import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div className="h-screen w-full">
      <section className="container mx-auto albums__cta w-full flex flex-col items-center justify-evenly pt-4 ">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-4xl font-style font-light tracking-wider text-slate-700"
        >
          Albums
        </motion.h1>
        <ul className="albums__grid">
          {albums.map((album, i) => (
            <motion.li
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
              className="albums__card bg-slate-500 hover:bg-slate-400 hover:cursor-pointer flex flex-col items-center justify-evenly p-4 rounded  max-w-xs"
              key={album.id}
              id={album.id}
            >
              <Link
                to={`/albums/${album.id}/photos`}
                className="text-lg text-white font-primary font-semibold text-center"
              >
                {album.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}
