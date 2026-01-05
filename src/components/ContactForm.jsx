import { GlobeVisual } from "./ui/GlobeVisual";
import { Input } from "./ui/Input";
import { TextArea } from "./ui/TextArea";

export const ContactForm = () => {
  return (
    <section className="w-full">
      {/* Wrapper */}
      <div className="max-w-6xl mx-auto">
        {/* Layout */}
        <div className="flex flex-col flex-col-reverse md:flex-row pt-10 bg-linear-to-r from-[#03113F] via-[#16357B] to-[#3563C5] rounded-t-3xl">
          {/* Globe Image */}
          <GlobeVisual />
          {/* Contact Form */}
          <div className="md:w-[55%] px-4 md:px-12 py-8 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Having doubts? Let's get in touch!
            </h3>
            <p className="text-blue-200 mt-2">
              Send us your queries and we'll get back to you soon.
            </p>
            <div className="mt-8 text-center">
              <Input placeholder={"Your name"} />
              <Input placeholder={"Your email address"} />
              <Input placeholder={"Your contact number"} />
              <TextArea placeholder={"Type your query here"} />
              <button className="bg-[#07c0ae] hover:bg-[#06adaa] py-3 w-30 rounded-xl font-semibold text-black">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
