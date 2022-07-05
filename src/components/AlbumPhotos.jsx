import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AlbumsPhotos() {
  const [albumPictures, setAlbumPictures] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then((res) => res.json())
        .then((data) => {
          setAlbumPictures(data);
        });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div className="albums__grid">
        {albumPictures.map((pic) => (
          <li
            className="albums__card bg-slate-500 hover:bg-slate-400 hover:cursor-pointer flex flex-col items-center justify-evenly p-4 rounded  max-w-xs"
            key={pic.id}
            id={pic.id}
          >
            <img src={pic.thumbnailUrl} alt="" />
            <p className="text-center font-primary text-white pt-4 font-semibold">
              {pic.title}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
}
