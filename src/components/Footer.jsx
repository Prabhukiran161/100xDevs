import { Logo } from "./ui/Logo";
import { SocialIcon } from "./ui/SocialIcon";
import { SOCIAL_LINKS } from "../constants/SocialmediaHandles";
import { IMPORTANT_LINKS } from "../constants/importantLinks";
import { ImportantLink } from "./ui/ImportantLink";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer>
      {/* Contact Form */}
      <ContactForm />
      <section className="bg-black w-full">
        {/* Wrapper */}
        <div className="max-w-7xl mx-auto">
          {/* Layout */}
          <div className="text-white pt-18">
            <div className="flex flex-col md:flex-row justify-between md:items-center px-8">
              {/* 100xdevs Mini logo */}
              <Logo size="big" />
              {/* Important Links */}
              <div>
                {IMPORTANT_LINKS.map((item) => (
                  <ImportantLink
                    key={item.name}
                    name={item.name}
                    path={item.path}
                  />
                ))}
              </div>
              {/* Social Media Handles */}
              <div>
                <div className="flex gap-4 my-4">
                  {SOCIAL_LINKS.map((item) => (
                    <SocialIcon
                      key={item.name}
                      name={item.name}
                      path={item.url}
                    />
                  ))}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  © 2025 100xDevs. All rights reserved.
                </div>
              </div>
            </div>
            {/* 100xdevs Big logo */}
            <div className="py-12 md:py-0 text-[4rem] md:text-[15rem] font-bold text-transparent bg-clip-text bg-linear-to-b from-gray-200 via-gray-400 to-black mask-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0))] text-center">
              100xDEVS
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
