"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export function Spotlight({ className, size = 200 }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useSpring(0);
  const mouseY = useSpring(0);

  const left = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const top = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    const parent = (containerRef.current as any)?.parentElement;
    if (!parent) return;

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    parent.addEventListener('mousemove', handleMove);
    parent.addEventListener('mouseenter', () => setIsHovered(true));
    parent.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      parent.removeEventListener('mousemove', handleMove);
      parent.removeEventListener('mouseenter', () => setIsHovered(true));
      parent.removeEventListener('mouseleave', () => setIsHovered(false));
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={`absolute rounded-full blur-xl transition-opacity duration-200 pointer-events-none z-0 ${isHovered ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{
        width: size,
        height: size,
        left,
        top,
        background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 80%)'
      }}
    />
  );
}
