"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface SparkleProps {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
}

const generateSparkle = (): SparkleProps => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    color: `hsl(${190 + Math.random() * 30}, 100%, ${70 + Math.random() * 20}%)`,
    delay: Math.random() * 2,
    scale: 0.5 + Math.random() * 1,
  };
};

const Sparkle = ({ x, y, color, delay, scale }: Omit<SparkleProps, "id">) => {
  return (
    <motion.svg
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      width={20 * scale}
      height={20 * scale}
      viewBox="0 0 160 160"
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 1,
      }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  );
};

interface SparklesProps {
  children?: React.ReactNode;
  className?: string;
  sparkleCount?: number;
}

export const Sparkles = ({ children, className = "", sparkleCount = 15 }: SparklesProps) => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const initialSparkles = Array.from({ length: sparkleCount }, generateSparkle);
    setSparkles(initialSparkles);

    const interval = setInterval(() => {
      setSparkles((current) =>
        current.map((sparkle) => ({
          ...sparkle,
          ...generateSparkle(),
          id: sparkle.id,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [sparkleCount]);

  return (
    <span className={`relative inline-block ${className}`}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          x={sparkle.x}
          y={sparkle.y}
          color={sparkle.color}
          delay={sparkle.delay}
          scale={sparkle.scale}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  );
};

export default Sparkles;
