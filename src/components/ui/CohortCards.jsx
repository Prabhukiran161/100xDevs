import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const CohortCards = ({ image, title, description, price, path }) => {
  return (
    <div className="bg-white p-4 md:w-[32%] flex flex-col rounded-xl">
      <img src={image} alt="Cohort" className="rounded-xl mb-4" />
      <h3 className="text-xl font-bold text-[#101828] mb-10">{title}</h3>
      <p className="text-md mb-4">{description}</p>
      {/* I wants to push the below block */}
      <div className="mt-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold">{price}</span>
          <span className="flex items-center gap-2 border border-gray-300 shadow-xs p-1.5 rounded-md">
            INR
            <ChevronDown />
          </span>
        </div>
        <Link
          className="block bg-[#001959] py-2 text-white text-center rounded-xl hover:bg-[#001959]/90"
          to={path}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
