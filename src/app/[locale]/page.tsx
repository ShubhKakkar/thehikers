import { useTranslations } from "next-intl";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marqee";
import About from "../components/sections/About";
import Playful from "../components/sections/Playful";
import Featured from "../components/sections/Featured";
import Reviews from "../components/sections/Reviews";

export default function Home() {
  const t = useTranslations('Marquee');
  const tF = useTranslations('Featured');
  const data = {
    title1: tF('title1'),
    category11: tF('category11'),
    category12: tF('category12'),
    category13: tF('category13'),
    category14: tF('category14'),
    title2: tF('title2'),
    category21: tF('category21'),
    category22: tF('category22'),
    buttonText: tF('buttonText')
  }
  const MarqueeText = t("marquee");
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="overflow-hidden relative">
        <Marquee text={MarqueeText} />
      </div>
      <About />
      <Playful />
      <Featured t={data} />
      <Reviews />
    </main>
  );
}
