import Cib1 from "../assets/images/cib1.svg";
import Cib2 from "../assets/images/cib2.svg";
import { PODCAST_LINKS } from "../constants/PodcastLinks";
import { PodcastCard } from "./ui/PodcastCard";

export const Podcast = () => {
  return (
    <section className="w-full">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto my-16">
        {/* Layout */}
        <div className="bg-[#001959] text-white px-8 py-12 rounded-2xl">
          {/* Title */}
          <div className="flex mb-8">
            <div className="md:w-[50%] flex flex-col gap-4 py-4">
              <h2 className="font-semibold text-4xl">The 100xdevs Podcast</h2>
              <p className="text-md md:text-lg text-gray-300">
                Unfiltered discussions on engineering, startups, and career
                growth with industry experts and successful developers
              </p>
            </div>
            <div className="hidden md:block md:w-[50%] relative">
              <img
                src={Cib2}
                className="absolute top-0 right-4 w-24 h-24"
                alt="Design"
              />
            </div>
          </div>
          {/* Podcast Refs */}
          <div className="flex w-full gap-6">
            <div className="w-[18%] hidden md:block relative">
              <img
                src={Cib2}
                className="absolute top-14 left-4 w-20 h-20"
                alt="Design"
              />
              <img
                src={Cib1}
                className="absolute bottom-0 right-0 w-26 h-26"
                alt="Design"
              />
            </div>
            <div className="md:w-[82%] flex flex-col md:flex-row gap-4">
              {PODCAST_LINKS.map((item, index) => (
                <PodcastCard
                  key={index}
                  url_id={item.url_id}
                  image={item.image}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
