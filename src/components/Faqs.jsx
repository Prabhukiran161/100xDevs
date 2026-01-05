import { FaqsCard } from "./ui/FaqsCard";
import { FAQs_LIST } from "../constants/faqs";
import { useState } from "react";

export const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="bg-[#E5E5E5] w-full">
      {/* Wrapper */}
      <div className="max-w-300 mb-16 mx-auto py-20">
        {/* Layout */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-2.5">FAQs</h2>
            <p className="text-[#4D669C]">Get your questions answered</p>
          </div>
          <div className="px-4 md:px-0  mx-auto md:w-[84%]">
            {FAQs_LIST.map((item, index) => (
              <FaqsCard
                key={index}
                index={index}
                total={FAQs_LIST.length}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index} 
                onToggle={()=>{ setActiveIndex( activeIndex === index ? null : index)}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
