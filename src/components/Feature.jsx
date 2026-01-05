import { FEATURE_COHORTS } from "../constants/featuredCohorts";
import { CohortCards } from "./ui/CohortCards";

export const Feature = () => {
  return (
    <section className="w-full bg-[#001959]">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Layout */}
        <div>
          {/* Heading */}
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              Featured Cohorts
            </h2>
            <p className="text-sm md:text-lg text-gray-100/75">
              Continue From Where You Left Off
            </p>
          </div>
          {/* Cohort Cards */}
          <div className="flex flex-col md:flex-row  md:flex-wrap gap-5">
            {FEATURE_COHORTS.map((item) => (
              <CohortCards
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                path={item.path}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
