import { Code } from "lucide-react";
export const SlideCard = ({ reference, title, description, isActiveIndex }) => {
  return (
    <div
      ref={reference}
      className={`w-88 md:w-125 ${
        isActiveIndex ? "bg-[#1C1E53] text-white" : "bg-white"
      } p-6 h-70 rounded-xl`}
    >
      <div
        className={`${
          isActiveIndex ? "bg-white" : "bg-[#2DD4BF]"
        }  mb-4 w-13 h-13 rounded-full flex items-center justify-center`}
      >
        <Code
          size={26}
          className={`${
            isActiveIndex === true ? "stroke-[#1C1E53]" : "stroke-white"
          }`}
        />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <div className="w-12 h-px bg-[#38BDF8] my-7 md:my-3"></div>
      <p className="text-sm mb font-medium">{description}</p>
    </div>
  );
};
