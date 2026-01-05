import { statsData } from "../constants/statsData";
import { StatsCard } from "./ui/StatsCard";
import { SKILLS_LIST } from "../constants/skillList";
import { SkillIcon } from "./ui/SkillIcon";

export const Statistics = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex flex-col gap-6">
          {/* Main Card */}
          <div className="flex flex-col md:flex-row bg-[#001959] text-white py-12 px-4  rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-[140px]">
            {statsData.map((item, index) => (
              <StatsCard
                key={index}
                index={index}
                total={statsData.length}
                icon={item.icon}
                number={item.number}
                content={item.content}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-white">
            {/* Left Card */}
            <div className="flex flex-col gap-2.5 md:w-[60%] bg-[#00AB93] p-6 md:p-8 rounded-tl-xl rounded-bl-[40px] rounded-br-xl rounded-tr-[40px]">
              <div className="text-3xl md:text-4xl font-bold">
                Job ready skills that matter
              </div>
              <p className="text-lg">
                Master development through real-world applications, not
                tutorials
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2 content-between w-full">
                {SKILLS_LIST.map((item, index) => (
                  <SkillIcon key={index} name={item.name} />
                ))}
              </div>
            </div>
            {/* Right Card */}
            <div className="md:w-[40%] bg-[#001959] p-7 md:p-8 flex flex-col gap-2 rounded-tl-xl rounded-bl-[40px] rounded-br-xl rounded-tr-[40px]">
              <div className="text-[1.8rem] md:text-[2.1rem] font-bold leading-tight">
                Personally mentoring India's next 100x engineers
              </div>
              <p className="text-lg">
                Taking you from 1x to 100x through practical projects and
                real-world open source
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
