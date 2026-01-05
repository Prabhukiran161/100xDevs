import { ArrowLeft, ArrowRight } from "lucide-react";
import { WHY100XDEVS } from "../constants/why100xDevs";
import { SlideCard } from "./ui/SlideCard";
import { useState,useRef, useEffect } from "react";

export const Why100xDevs = () => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const [step, setStep] = useState(0);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };
  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };
  const handleTransitionEnd = () => {
    if (activeIndex === WHY100XDEVS.length - 1) {
      setIsTransitioning(false);
      setActiveIndex(2);
    }
    if (activeIndex === 1) {
      setIsTransitioning(false);
      setActiveIndex(WHY100XDEVS.length - 2);
    }
  };
  useEffect(()=>{
    const calculateStep = () =>{
      if(!cardRef.current || !containerRef.current) return ;
      const cardWidth= cardRef.current.offsetWidth;
      const styles = window.getComputedStyle(containerRef.current);
      const gap = parseFloat(styles.columnGap || styles.gap || 0);
      setStep(cardWidth+gap);
    };
    calculateStep();
    window.addEventListener("resize",calculateStep);
    return () => window.removeEventListener("resize",calculateStep);
  },[]);
  return (
    <section className="w-full bg-[#E5E5E5] py-16">
      {/* Wrapper */}
      <div className="max-w-380 mx-auto">
        {/* Layout */}
        <div className="relative flex flex-col items-center">
          {/* Title & Description */}
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl md:text-5xl text-[#001959] mb-4">
              Why 100xDevs?
            </h2>
            <p className="text-lg md:text-xl text-gray-500">
              Our most comprehensive and impactful learning experiences
            </p>
          </div>
          {/* Slider */}
          <div className="w-full relative flex overflow-hidden">
            <div
              onTransitionEnd={handleTransitionEnd}
              ref={containerRef}
              className="flex gap-5 md:gap-5"
              style={{
                transform: `translateX(-${(activeIndex-1) * step}px)`,
                transition: isTransitioning
                  ? "transform 300ms ease-in-out"
                  : "none",
              }}
            >
              {/* Cards */}
              {WHY100XDEVS.map((item, index) => (
                <SlideCard
                  reference={index === 2 ? cardRef : null}
                  key={index}
                  title={item.title}
                  description={item.description}
                  isActiveIndex={index === activeIndex}
                />
              ))}
            </div>
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute z-20 left-1 md:left-10 self-center w-10 h-10 bg-[#717373] hover:bg-black/75 transition-transform duration-300 flex justify-center items-center rounded-full"
            >
              <ArrowLeft size={24} stroke="white" />
            </button>
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute z-20 right-1 md:right-10 self-center w-10 h-10 bg-[#717373] hover:bg-black/75 transition-transform duration-300 flex justify-center items-center rounded-full"
            >
              <ArrowRight size={24} stroke="white" />
            </button>
          </div>
          {/* Overlay Left Effect */}
          <div className="absolute inset-y-0 z-10 left-0  bg-linear-to-r w-10 md:w-120 from-[#E5E5E5] to-transparent"></div>
          {/* Overlay Right Effect */}
          <div className="absolute inset-y-0 z-10 right-0 bg-linear-to-l w-10 md:w-120 from-[#E5E5E5] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
