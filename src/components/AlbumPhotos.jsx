import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AlbumsPhotos() {
  const [albumPictures, setAlbumPictures] = useState([]);
  const [cardsLimit, setCardsLimit] = useState(15);
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

  const slicedData = albumPictures?.slice(0, cardsLimit);
  /* This could be implemented in various ways, yet due to knowing the size and settings of the returned data:
    - Slice helps return a shollow copy of the returned data 
    - I would fetch data once and populate it by limit functionality 
  */
  function loadMore() {
    if (slicedData.length > 0) setCardsLimit(cardsLimit + cardsLimit);
  }
  function hideSome() {
    if (slicedData.length > 40) setCardsLimit(15);
  }

  return (
    <div className="w-full h-full">
      <div className="albums__grid">
        {slicedData.map((pic, i) => (
          <motion.li
            initial={{ y: i % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
            className="albums__card bg-slate-500 hover:bg-slate-400 hover:cursor-pointer flex flex-col items-center justify-evenly p-4 rounded  max-w-xs"
            key={pic.id}
            id={pic.id}
          >
            <img src={pic.thumbnailUrl} alt="" />
            <p className="text-center font-primary text-white pt-4 font-semibold">
              {pic.title}
            </p>
          </motion.li>
        ))}
      </div>
      {slicedData.length < 40 && (
        <div className="w-full text-center pb-5">
          <button
            onClick={loadMore}
            className="bg-slate-300 p-2 rounded font-primary font-medium  text-gray-800 hover:bg-orange-700 hover:text-gray-200"
          >
            Load More
          </button>
        </div>
      )}
      {slicedData.length === 40 && (
        <div className="w-full text-center pb-5">
          <button
            onClick={hideSome}
            className="bg-slate-300 p-2 rounded font-primary font-medium  text-gray-800 hover:bg-orange-700 hover:text-gray-200"
          >
            Hide Some
          </button>
        </div>
      )}
    </div>
  );
}
