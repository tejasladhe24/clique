"use client";

import { useOnDraw } from "@/hooks/use-on-draw";
import { Point } from "@/types";
import { useEffect, useState } from "react";

interface CanvasProps {
  width?: number;
  height?: number;
}

const Canvas = ({ width, height }: CanvasProps) => {
  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);
  const [canvasContainer, setCanvasContainer] = useState<HTMLElement | null>(
    null
  );

  function onDraw(
    ctx: CanvasRenderingContext2D,
    point: Point,
    prevPoint: Point
  ) {
    drawLine(prevPoint, point, ctx, "#000000", 5);
  }

  function drawLine(
    start: Point,
    end: Point,
    ctx: CanvasRenderingContext2D,
    color: string,
    width: number
  ) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  useEffect(() => {
    setCanvasContainer(document.getElementById("canvas-container"));
  }, []);

  if (!canvasContainer) return null;

  return (
    <canvas
      width={width || canvasContainer?.getBoundingClientRect().width}
      height={height || canvasContainer?.getBoundingClientRect().height}
      onMouseDown={onCanvasMouseDown}
      ref={setCanvasRef}
      className="border border-slate-400 bg-slate-200"
    />
  );
};

export default Canvas;
