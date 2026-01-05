import { DynamicIcon } from "lucide-react/dynamic";

export const StatsCard = ({ index, icon, number, content, total }) => {
  return (
    <div
      className={`flex items-center w-full gap-2 md:gap-6 ${
        index !== total - 1 ? "border-b-2 md:border-b-0 md:border-r-2" : ""
      } border-white/80 pl-10 overflow-hidden`}
    >
      <DynamicIcon
        name={icon}
        size={50}
        className="bg-[#828ACD] py-3 px-3 text-[#150861] rounded-bl-lg rounded-tr-lg"
      />
      <div className="py-4.5 md:py-0 px-4 md:px-0">
        <span className="block text-4xl font-bold">{number}</span>
        <p className="text-md text-gray-400">{content}</p>
      </div>
    </div>
  );
};
