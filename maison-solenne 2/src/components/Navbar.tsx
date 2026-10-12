import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import clsx from "clsx";

const left = [
  { label: "Fragrances", href: "#collection" },
  { label: "Discovery", href: "#discovery" },
];
const right = [
  { label: "The House", href: "#house" },
  { label: "Boutique", href: "#boutique" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const link = "text-[11px] uppercase tracking-[0.3em] font-normal hover:text-primary transition-colors duration-500";

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 h-[88px] transition-all duration-700",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      )}
    >
      <div className="relative mx-auto h-full max-w-[1280px] px-6 md:px-10 flex items-center justify-between">
        {/* mobile: menu left */}
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>

        {/* desktop: left links */}
        <nav className="hidden md:flex gap-10">
          {left.map((l) => (
            <a key={l.label} href={l.href} className={link}>{l.label}</a>
          ))}
        </nav>

        <a
          href="#top"
          className="absolute left-1/2 -translate-x-1/2 font-display text-2xl md:text-3xl tracking-[0.35em] uppercase pl-[0.35em]"
        >
          Solenne
        </a>

        <nav className="hidden md:flex gap-10">
          {right.map((l) => (
            <a key={l.label} href={l.href} className={link}>{l.label}</a>
          ))}
        </nav>

        {/* mobile: bag right */}
        <a href="#discovery" className="md:hidden" aria-label="Bag">
          <ShoppingBag size={20} strokeWidth={1} />
        </a>
      </div>

      {open && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-b border-line px-6 py-8 flex flex-col gap-6">
          {[...left, ...right].map((l) => (
            <a key={l.label} href={l.href} className={link} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
