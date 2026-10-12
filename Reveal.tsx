import { motion } from "motion/react";
import type { ReactNode, ElementType } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;

// Effect 1 — blur reveal, once, on enter view.
export const blurReveal = {
  hidden: { filter: "blur(20px)", opacity: 0, scale: 1.04 },
  show: (delay = 0) => ({
    filter: "blur(0px)",
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease: EASE, delay },
  }),
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "h1" | "h2" | "p" | "span";
};

export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Tag = motion[as] as ElementType;
  return (
    <Tag
      className={className}
      variants={blurReveal}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </Tag>
  );
}
