import { COMMUNITY_REFS } from "../constants/communityRefs";
import { COMMUNITY_IMAGES } from "../constants/communityImages";
import comunityImg1 from "../assets/images/community1.png";
import { CommunityImgCard } from "./ui/CommunityImgCard";

export const Community = () => {
  return (
    <section className="w-full">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto my-16">
        {/* Layout */}
        <div>
          {/* Community Card */}
          <div className="flex flex-col md:flex-row pt-18 px-8 md:px-22 mb-6 rounded-3xl bg-linear-to-r from-[#202333] via-[#293B67] to-[#31529B] text-white">
            <div className="block md:w-[50%] mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                A Community That Has Your Back
              </h2>
              <ul className="list-disc pl-5 text-sm md:text-md">
                {COMMUNITY_REFS.map((item, index) => (
                  <li key={index} className="my-3">
                    {item.ref}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-[50%] relative">
              <img
                src={comunityImg1}
                alt="community1"
                className="md:absolute bottom-0 left-0 max-w-full"
              />
            </div>
          </div>
          {/* Community Images */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6">
            {COMMUNITY_IMAGES.map((item, index) => (
              <CommunityImgCard key={index} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
