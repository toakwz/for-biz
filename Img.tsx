import clsx from "clsx";

type Props = {
  src: string;
  brief: string;
  className?: string;
  tone?: "amber" | "green" | "gold" | "ivory";
  alt?: string;
};

const tones = {
  amber: "from-[hsl(30,40%,18%)] via-[hsl(28,30%,10%)] to-[hsl(30,6%,6%)]",
  green: "from-[hsl(95,18%,16%)] via-[hsl(60,14%,10%)] to-[hsl(30,10%,6%)]",
  gold: "from-[hsl(42,45%,24%)] via-[hsl(36,30%,12%)] to-[hsl(30,6%,6%)]",
  ivory: "from-[hsl(36,14%,78%)] via-[hsl(36,14%,70%)] to-[hsl(34,12%,60%)]",
};

// Renders the photo when `src` is set, otherwise a tonal placeholder with the brief.
export function Img({ src, brief, className, tone = "amber", alt }: Props) {
  if (src) {
    return <img src={src} alt={alt ?? brief} className={clsx("object-cover w-full h-full", className)} />;
  }
  return (
    <div
      role="img"
      aria-label={alt ?? brief}
      className={clsx("relative w-full h-full bg-gradient-to-br", tones[tone], className)}
    >
      <span className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[0.25em] text-foreground/30">
        {brief}
      </span>
    </div>
  );
}
