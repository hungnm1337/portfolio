'use client';

import { useEffect, useRef } from 'react';

interface Props {
  dotSize?: number;
  gap?: number;
  swayAmplitude?: number;
  swaySpeed?: number;
  blobRadius?: number;
  blobSpeed?: number;
  mouseInfluence?: number;
  dotColor?: string;
  dotBaseAlpha?: number;
  distortionRadius?: number;   // kept for API compat (not used in blob mode)
  distortionStrength?: number; // kept for API compat (not used in blob mode)
}

export default function DotDistortionBg({
  dotSize = 1.4,
  gap = 26,
  swayAmplitude = 2.5,
  swaySpeed = 0.001,
  blobRadius = 180,
  blobSpeed = 0.001,
  mouseInfluence = 0.35,
  dotColor = '0,0,0',        // default đen (RGB)
  dotBaseAlpha = 0.18,        // alpha cơ bản
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1, y: -1 });
  const blobRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cols = 0;
    let rows = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.ceil(canvas.width / gap) + 2;
      rows = Math.ceil(canvas.height / gap) + 2;
      if (blobRef.current.x === 0) {
        blobRef.current = { x: canvas.width / 2, y: canvas.height / 2 };
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = (timestamp: number) => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const t = timestamp;

      const blobTargetX = width * 0.5 + Math.sin(t * blobSpeed) * width * 0.28;
      const blobTargetY = height * 0.5 + Math.cos(t * blobSpeed * 0.71) * height * 0.32;

      let finalBlobX = blobTargetX;
      let finalBlobY = blobTargetY;
      if (mouseRef.current.x >= 0) {
        finalBlobX = blobTargetX + (mouseRef.current.x - blobTargetX) * mouseInfluence;
        finalBlobY = blobTargetY + (mouseRef.current.y - blobTargetY) * mouseInfluence;
      }

      blobRef.current.x += (finalBlobX - blobRef.current.x) * 0.04;
      blobRef.current.y += (finalBlobY - blobRef.current.y) * 0.04;

      const bx = blobRef.current.x;
      const by = blobRef.current.y;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * gap;
          const oy = r * gap;

          const phaseX = c * 0.53 + r * 0.37;
          const phaseY = c * 0.31 + r * 0.61;
          const swayX = Math.sin(t * swaySpeed + phaseX) * swayAmplitude;
          const swayY = Math.cos(t * swaySpeed * 0.79 + phaseY) * swayAmplitude;

          const px = ox + swayX;
          const py = oy + swayY;

          const dbx = ox - bx;
          const dby = oy - by;
          const blobDist = Math.sqrt(dbx * dbx + dby * dby);

          let alpha: number;
          let size = dotSize;

          if (blobDist < blobRadius) {
            const t01 = blobDist / blobRadius;
            const smooth = t01 * t01 * (3 - 2 * t01);
            // tâm blob: gần như biến mất
            alpha = 0.01 + smooth * (dotBaseAlpha - 0.01);
            size = dotSize * (0.35 + 0.65 * t01);
          } else {
            alpha = dotBaseAlpha;
          }

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor},${alpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1, y: -1 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dotSize, gap, swayAmplitude, swaySpeed, blobRadius, blobSpeed, mouseInfluence, dotColor, dotBaseAlpha]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
