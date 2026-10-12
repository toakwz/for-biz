import { motion } from "motion/react";
import clsx from "clsx";
import { EASE, Reveal, blurReveal } from "./Reveal";
import { Img } from "./Img";
import { collection, featured, images, ingredients } from "../content";

const wrap = "mx-auto max-w-[1280px] px-6 md:px-10";

/* 3 — Manifesto */
export function Manifesto() {
  return (
    <section id="house" className={clsx(wrap, "py-36 md:py-52 text-center")}>
      <Reveal as="p" className="font-serif font-light text-2xl md:text-[32px] leading-[1.4] max-w-3xl mx-auto">
        We make four perfumes. Each took more than two years to finish, uses natural materials wherever they are
        better, and is bottled by hand in editions of eight hundred. We will make a fifth when it is ready, and not
        before.
      </Reveal>
    </section>
  );
}

/* 4 — Collection */
export function Collection() {
  return (
    <section id="collection" className={clsx(wrap, "pb-36")}>
      <Reveal className="label text-center mb-16">The collection</Reveal>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
        {collection.map((p, i) => (
          <motion.a
            key={p.name}
            href="#featured"
            className="group snap-start shrink-0 w-[70%] md:w-auto block"
            variants={blurReveal}
            custom={i * 0.15}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="aspect-[2/3] overflow-hidden">
              <div className="w-full h-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]">
                <Img src={images.tiles[i].src} brief={images.tiles[i].brief} tone={i % 2 ? "gold" : "amber"} />
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-serif font-light text-2xl inline-block relative pb-1">
                {p.name}
                <span className="absolute left-0 bottom-0 h-px w-full bg-primary origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </h3>
              <p className="label !text-muted mt-3">{p.family}</p>
              <p className="text-sm text-muted mt-1">
                {p.size} · {p.price}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* Effect 2 — notes pyramid */
function Hairline({ delay }: { delay: number }) {
  return (
    <motion.div
      className="h-px bg-primary/60 mx-auto origin-center"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.4, ease: EASE, delay }}
    />
  );
}

function Tier({ delay, children, width }: { delay: number; children: React.ReactNode; width: string }) {
  return (
    <motion.div
      className={clsx("mx-auto text-center", width)}
      variants={blurReveal}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

function Pyramid() {
  return (
    <div className="my-10 space-y-5">
      <Tier delay={0} width="max-w-[60%]">
        <span className="text-[11px] uppercase tracking-[0.3em] font-normal [font-variant-caps:all-small-caps]">
          {featured.top}
        </span>
      </Tier>
      <Hairline delay={0.15} />
      <Tier delay={0.3} width="max-w-[80%]">
        <span className="font-serif text-lg text-foreground/90">{featured.heart}</span>
      </Tier>
      <Hairline delay={0.45} />
      <Tier delay={0.6} width="max-w-full">
        <span className="accent text-2xl">{featured.base}</span>
      </Tier>
    </div>
  );
}

/* 5 — Featured */
export function Featured() {
  return (
    <section id="featured" className="grid md:grid-cols-2 min-h-screen">
      <motion.div
        className="h-[70vh] md:h-auto"
        variants={blurReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Img src={images.featured.src} brief={images.featured.brief} tone="green" />
      </motion.div>

      <div className="flex items-center px-6 md:px-16 py-20">
        <div className="max-w-lg mx-auto w-full">
          <Reveal className="label mb-6">Featured</Reveal>
          <Reveal as="h2" className="h2-serif mb-8">
            <span className="accent">{featured.name}</span>
          </Reveal>
          <Reveal as="p" className="text-muted mb-4">{featured.story}</Reveal>
          <Pyramid />
          <Reveal as="p" className="text-center text-sm text-muted mb-10">{featured.sizes}</Reveal>
          <Reveal className="text-center">
            <a href="#" className="text-link">{featured.button}</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 6 — Ingredients */
export function Ingredients() {
  return (
    <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        variants={blurReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Img src={images.ingredients.src} brief={images.ingredients.brief} tone="gold" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />

      <div className={clsx(wrap, "relative z-10 h-full flex flex-col justify-between py-16 md:py-24")}>
        <Reveal className="label">Sourced by hand</Reveal>
        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
          {ingredients.map((w, i) => (
            <motion.p
              key={w}
              className="accent text-4xl md:text-5xl lg:text-6xl leading-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE, delay: i * 0.25 }}
            >
              {w}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 7 — Perfumer (the only light section) */
export function Perfumer() {
  return (
    <section className="bg-light text-background">
      <div className={clsx(wrap, "py-36 grid md:grid-cols-2 gap-12 md:gap-20 items-center")}>
        <motion.div
          className="aspect-[4/5]"
          variants={blurReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Img src={images.perfumer.src} brief={images.perfumer.brief} tone="ivory" />
        </motion.div>
        <div>
          <Reveal className="label !text-[hsl(38,42%,40%)] mb-8">The nose</Reveal>
          <Reveal as="h2" className="font-serif font-light italic text-3xl md:text-5xl leading-[1.15] mb-8">
            “A perfume should feel like a memory you did not know you had.”
          </Reveal>
          <Reveal as="p" className="text-background/70 max-w-md">
            Camille Arnaud trained in Grasse and spent twelve years composing for the great houses before founding
            Maison Solenne in 2019. She works alone, in a small studio above the boutique.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 8 — Discovery set */
export function Discovery() {
  return (
    <section id="discovery" className={clsx(wrap, "py-36")}>
      <div className="max-w-xl mx-auto text-center border border-line p-8 md:p-14">
        <motion.div
          className="aspect-[4/3] mb-10"
          variants={blurReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Img src={images.discovery.src} brief={images.discovery.brief} tone="gold" />
        </motion.div>
        <Reveal as="h2" className="h2-serif mb-6">
          Begin <span className="accent">with all four</span>.
        </Reveal>
        <Reveal as="p" className="text-muted mb-6">
          Four 2ml vials in a linen-bound case. The full price is refunded when you buy a 50ml bottle within three
          months.
        </Reveal>
        <p className="font-serif text-2xl mb-8">€32</p>
        <Reveal>
          <a href="#" className="text-link">Order the discovery set</a>
        </Reveal>
      </div>
    </section>
  );
}

/* 9 — Boutique */
export function Boutique() {
  return (
    <section id="boutique" className={clsx(wrap, "pb-36 text-center")}>
      <Reveal as="h2" className="h2-serif mb-10">
        Visit the <span className="accent">boutique</span>.
      </Reveal>
      <Reveal className="space-y-1 text-muted">
        <p className="text-foreground">14 rue de Poitou, 75003 Paris</p>
        <p>Tuesday – Saturday, 11h – 19h</p>
        <p>Private consultations by appointment, with Camille when she is in the studio.</p>
      </Reveal>
    </section>
  );
}

/* 10 — Footer */
export function Footer() {
  const links = ["Fragrances", "Discovery set", "The House", "Boutique", "Delivery", "Contact"];
  return (
    <footer className="border-t border-line">
      <div className={clsx(wrap, "py-16 text-center")}>
        <p className="font-display text-3xl tracking-[0.35em] uppercase pl-[0.35em] mb-8">Solenne</p>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
          {links.map((l) => (
            <a key={l} href="#" className="text-[11px] uppercase tracking-[0.3em] hover:text-primary transition-colors duration-500">
              {l}
            </a>
          ))}
        </nav>
        <p className="accent text-xl mb-5">Letters from the studio, four times a year.</p>
        <form onSubmit={(e) => e.preventDefault()} className="max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border-b border-line focus:border-primary outline-none py-3 text-center placeholder:text-muted transition-colors"
          />
        </form>
        <p className="text-xs text-muted mt-14">© 2026 Maison Solenne</p>
      </div>
    </footer>
  );
}
