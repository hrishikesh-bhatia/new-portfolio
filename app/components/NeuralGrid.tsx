"use client";

import { useEffect, useRef } from "react";

export default function NeuralGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const gridSize = 40;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(34,197,94,0.15)";
      ctx.lineWidth = 1;

      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // scanning glow
      const t = Date.now() * 0.002;
      const glowX = (Math.sin(t) * 0.5 + 0.5) * w;
      ctx.fillStyle = "rgba(34,197,94,0.07)";
      ctx.fillRect(glowX, 0, 80, h);
    };

    const loop = setInterval(draw, 40);

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    return () => clearInterval(loop);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
