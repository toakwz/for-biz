import { motion } from "motion/react";
import { EASE, Reveal } from "./Reveal";
import { Img } from "./Img";
import { images } from "../content";

const letters = "SOLENNE".split("");

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ filter: "blur(20px)", opacity: 0, scale: 1.04 }}
        animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <Img src={images.hero.src} brief={images.hero.brief} tone="amber" />
      </motion.div>

      <div className="light-leak" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-[12vh]">
        <h1 className="h1-display flex" aria-label="Solenne">
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden
              initial={{ filter: "blur(20px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.3 + i * 0.04 }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <Reveal delay={0.9} className="mt-8">
          <p className="accent text-2xl md:text-3xl">Perfumes composed slowly, in small editions, in Paris.</p>
        </Reveal>

        <Reveal delay={1.1} className="mt-10">
          <a href="#collection" className="text-link">Discover the collection</a>
        </Reveal>
      </div>
    </section>
  );
}
