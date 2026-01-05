import { ChevronDown } from "lucide-react";

export const FaqsCard = ({ index, question, answer, total, isOpen, onToggle }) => {
  return (
    <div
      className={`w-full ${index !== total - 1 ? "border-b border-black" : ""}`}
    >
      {/* Question */}
      <button
        className="text-base md:text-lg text-left flex justify-between items-center w-full  py-4"
        onClick={onToggle}
      >
        {question}
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* Answer */}
      {isOpen && (
        <p className="pb-2 text-sm md:text-base md:w-[66%] mb-2">{answer}</p>
      )}
    </div>
  );
};
