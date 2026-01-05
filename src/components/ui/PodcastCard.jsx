import { useState } from "react";
import { Play } from "lucide-react";

export const PodcastCard = ({ url_id, title, image }) => {
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay(true);
  };
  return (
    <div className="w-full bg-white rounded-2xl p-5">
      {play === false ? (
        <button onClick={() => handlePlay()} className="w-full">
          <div className="w-full relative flex justify-center items-center group mb-4">
            <img src={image} className="rounded-2xl" alt="Podcast" />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 rounded-2xl"></div>
            <span className="bg-[#E7000B] transition-transform duration-300 ease-in-out group-hover:scale-110 w-15 h-15 rounded-full absolute flex justify-center items-center shadow-lg">
              <Play size={30} stroke="white" fill="white" strokeWidth={1} />
            </span>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${url_id}?autoplay=1`}
          className="rounded-2xl w-full aspect-video mb-4"
          frameBorder="0"
          allow="autoplay; encrypted-media;"
        ></iframe>
      )}
      {/* Podcast Title */}
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};
