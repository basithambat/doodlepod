/**
 * Scroll-triggered reveal animation for text and images.
 * Uses Motion's whileInView for fade-in + slide-up when element enters viewport.
 * Respects prefers-reduced-motion (fade only, no movement).
 */

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const defaultTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
const reducedTransition = { duration: 0.2, ease: "easeOut" };
const viewport = { once: true, amount: 0.2, margin: "0px 0px -40px 0px" };

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const reducedMotionText = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const reducedMotionImage = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** 'text' = smaller slide (24px), 'image' = larger slide (32px) */
  variant?: "text" | "image";
  /** Stagger delay in seconds (for children in a list) */
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  variant = "text",
  delay = 0,
}: ScrollRevealProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const variants = reducedMotion
    ? variant === "image"
      ? reducedMotionImage
      : reducedMotionText
    : variant === "image"
      ? imageVariants
      : textVariants;
  const transition = reducedMotion ? reducedTransition : { ...defaultTransition, delay };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
