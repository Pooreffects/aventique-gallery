import logo from '../aventique.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  console.log(albums);

  return (
    <div className="h-screen w-full">
      <Link to="/">
        <img
          width={250}
          height={250}
          src={logo}
          alt="Aventique's logo"
          className="p-4"
        />
      </Link>
      <section className="container mx-auto albums__cta w-full flex flex-col items-center justify-evenly pt-4 ">
        <h1 className="text-2xl font-style font-light tracking-wider text-slate-700">
          Albums
        </h1>
        <div className="grid">
          {albums.map((album) => (
            <div className="albums__card" key={album.id}>
              <h2>{album.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
