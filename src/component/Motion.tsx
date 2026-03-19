"use client";

import { useEffect, useRef } from "react";

export default function MotionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let offset = 0;

    const curves = [
      { color: "#fca5a5", y: 280 },
      { color: "#86efac", y: 360 },
      { color: "#93c5fd", y: 320 },
    ];

    function drawCurve(y: number, color: string) {
        if (!canvas) return
      ctx.beginPath();
      ctx.moveTo(150, y);
      ctx.bezierCurveTo(
        canvas?.width * 0.3, y - 120,
        canvas?.width * 0.7, y - 120,
        canvas.width - 150, y
      );
      ctx.setLineDash([6, 12]);
      ctx.lineDashOffset = -offset;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function animate() {
        if (!canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      curves.forEach(c => drawCurve(c.y, c.color));

      offset += 0.8;
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  );
}
