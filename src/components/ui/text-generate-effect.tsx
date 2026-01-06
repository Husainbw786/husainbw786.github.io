"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const controls = useAnimation();
  const wordsArray = words.split(" ");

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: filter ? "blur(10px)" : "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: filter ? "blur(0px)" : "none",
      transition: {
        duration: duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {wordsArray.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextGenerateEffect;
