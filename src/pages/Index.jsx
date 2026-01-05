import { Hero } from "../components/Hero";
import { Statistics } from "../components/Statistics";
import { Faqs } from "../components/Faqs";
import { Community } from "../components/Community";
import { Podcast } from "../components/Podcast";
import { Feature } from "../components/Feature";
import { Why100xDevs } from "../components/Why100xDevs";

export const Index = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Why100xDevs/>
      <Feature />
      <Podcast />
      <Community />
      <Faqs />
    </>
  );
};
