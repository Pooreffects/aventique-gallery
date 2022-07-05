import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
        <h1 className="text-4xl font-style font-light tracking-wider text-slate-700">
          Albums
        </h1>
        <ul className="albums__grid">
          {albums.map((album) => (
            <li
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
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
