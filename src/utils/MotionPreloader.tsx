"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ease } from "@/components/custom/hero";

const containerVariants = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Preloader() {
  return (
    <motion.div
      variants={containerVariants as any}
      initial="initial"
      exit="exit"
      // CHANGED: Added z-50 to place the layer completely above the layout
      className="fixed top-0 left-0 w-screen h-screen bg-neutral-950 text-white flex items-center justify-center z-50"
    >
      <motion.h1
        variants={textVariants as any}
        animate="animate"
        className="text-3xl font-light tracking-widest"
      >
        <FlipText text="Rivozen" />
      </motion.h1>
    </motion.div>
  );
}

export function FlipText({ text }: { text: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setIsFlipped((prev) => !prev), 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex flex-wrap leading-[1.5em] cursor-default">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-[1.5em] relative ${
            char === " " ? "w-[0.25em]" : ""
          }`}
        >
          {/* Front Letter */}
          <span
            style={{ transitionDelay: `${index * 40}ms` }}
            className={`col-start-1 row-start-1 block transition-transform duration-300 ease-in-out ${
              isFlipped ? "-translate-y-full" : "translate-y-0"
            }`}
          >
            {char}
          </span>

          {/* Back Letter */}
          <span
            style={{ transitionDelay: `${index * 40}ms` }}
            className={`col-start-1 row-start-1 block absolute inset-0 text-primary transition-transform duration-300 ease-in-out ${
              isFlipped ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
}
