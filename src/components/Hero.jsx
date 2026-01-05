import heroImage from "../assets/images/hero-img.webp";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4.5 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12 ">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-dashed border-black/25 px-3 py-2 rounded-3xl text-sm mb-6">
              <span className="w-3 h-3 rounded-full bg-[#10B0A7]"></span>
              <span>Join 100,000+ enrolled students today</span>
            </div>

            <h2 className=" text-3xl md:text-6xl font-bold text-(--color-primary-dark) mb-6">
              Master Full Stack Development
            </h2>
            <p className="text-base md:text-lg text-[#4d667f] mb-6">
              Master Full Stack Development through hands-on open source
              projects. Join a community of developers transforming their
              careers with practical, real-world programming skills.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button content="Learn more" bg="secondary" text="secondary" />
              <Button content="Explore Courses" />
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="kirat"
              className="w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
