"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Beam {
  id: number;
  x1: number;
  x2: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const BackgroundBeams = ({ className = "" }: { className?: string }) => {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const generatedBeams: Beam[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x1: Math.random() * 100,
      x2: Math.random() * 100,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.2,
    }));
    setBeams(generatedBeams);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {beams.map((beam, idx) => (
          <motion.line
            key={beam.id}
            x1={`${beam.x1}%`}
            y1="0"
            x2={`${beam.x2}%`}
            y2="100"
            stroke={idx % 2 === 0 ? "url(#beamGradient)" : "url(#beamGradient2)"}
            strokeWidth="0.3"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: [0, beam.opacity, beam.opacity, 0],
              pathLength: [0, 1],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
            }}
          />
        ))}
      </svg>
      
      {/* Floating orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 20}%`,
            background: i % 2 === 0 
              ? "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBeams;
