'use client'

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import "./custom-cursor.css";

type CustomCursorProps = {
  size?: number;
  color?: string;
  opacity?: number;
  border?: string;
  transitionTime?: number;
  hideDefaultCursor?: boolean;
};

const CustomCursor = ({
  size = 26,
  color = "rgba(59, 130, 246, 0.8)",
  opacity = 0.8,
  border = "2px solid rgba(59, 130, 246, 0.6)",
  transitionTime = 0.15,
  hideDefaultCursor = true,
}: CustomCursorProps) => {
  const cursorContainerRef = useRef<HTMLDivElement | null>(null);
  const animationTimeoutRef = useRef<number | undefined>(undefined);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorCircles = useRef<HTMLDivElement[]>([]);
  const cursorHistory = useRef<Array<{ x: number; y: number }>>([]);
  const TAIL_LENGTH = 20;

  useEffect(() => {
    const container = cursorContainerRef.current;
    if (!container) return;

    // Initialize cursor history
    cursorHistory.current = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

    // Create cursor circles
    for (let i = 0; i < TAIL_LENGTH; i++) {
      const div = document.createElement("div");
      div.classList.add("cursor-circle");
      container.appendChild(div);
      cursorCircles.current.push(div);
    }

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerDown = () => {
      window.clearTimeout(animationTimeoutRef.current);
      cursorCircles.current.forEach(circle => circle.classList.add("expand"));
      animationTimeoutRef.current = window.setTimeout(() => {
        cursorCircles.current.forEach(circle => circle.classList.remove("expand"));
      }, 400);
    };

    const updateCursor = () => {
      cursorHistory.current.shift();
      cursorHistory.current.push({ x: mousePos.current.x, y: mousePos.current.y });

      for (let i = 0; i < TAIL_LENGTH; i++) {
        const current = cursorHistory.current[i];
        const next = cursorHistory.current[i + 1] || cursorHistory.current[TAIL_LENGTH - 1];

        const xDiff = next.x - current.x;
        const yDiff = next.y - current.y;

        current.x += xDiff * 0.99;
        current.y += yDiff * 0.99;

        const circle = cursorCircles.current[i];
        const scale = i / TAIL_LENGTH;
        
        // Set position and scale using CSS variables
        circle.style.setProperty('--x', `${current.x}px`);
        circle.style.setProperty('--y', `${current.y}px`);
        circle.style.setProperty('--scale', scale.toString());
        
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.background = color;
        circle.style.opacity = opacity.toString();
        circle.style.border = border;
      }

      requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("pointerdown", handlePointerDown);
    updateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.clearTimeout(animationTimeoutRef.current);
      // Clean up circles
      cursorCircles.current.forEach(circle => circle.remove());
      cursorCircles.current = [];
    };
  }, [size, color, opacity, border, transitionTime]);

  useEffect(() => {
    if (!hideDefaultCursor) return;

    document.body.classList.add("cursor-hidden");
    return () => {
      document.body.classList.remove("cursor-hidden");
    };
  }, [hideDefaultCursor]);

  return (
    <>
      {/* SVG Goo Filter */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="goo-filter"
        version="1.1"
        style={{
          position: 'fixed',
          width: 0,
          height: 0,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>
      
      {/* Cursor Container */}
      <div
        ref={cursorContainerRef}
        className={cn("fluid-cursor-container")}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
