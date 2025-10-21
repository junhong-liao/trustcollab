'use client'

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import "./custom-cursor.css";

type CustomCursorProps = {
  size?: number;
  color?: string;
  hideDefaultCursor?: boolean;
};

const CustomCursor = ({
  size = 20,
  color = "#3b82f6", // Tailwind blue-500 to match Pricing component
  hideDefaultCursor = true,
}: CustomCursorProps) => {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!hideDefaultCursor) return;
    const body = document.body;
    const html = document.documentElement;
    const previousBodyCursor = body.style.cursor;
    const previousHtmlCursor = html.style.cursor;

    body.classList.add("cursor-hidden");
    html.classList.add("cursor-hidden");
    body.style.cursor = "none";
    html.style.cursor = "none";

    return () => {
      body.classList.remove("cursor-hidden");
      html.classList.remove("cursor-hidden");
      body.style.cursor = previousBodyCursor;
      html.style.cursor = previousHtmlCursor;
    };
  }, [hideDefaultCursor]);

  return (
    <div
      ref={dotRef}
      className={cn("custom-cursor-dot")}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
