"use client";

import { FC, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface BarchartProps extends CanvasRenderingContext2DSettings {
  config: ChartConfiguration;
}

export const ChartComponent = forwardRef((props: BarchartProps, ref) => {
  const { config, ...rest } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      chartRef,
    }),
    []
  );

  useEffect(() => {
    if (!canvasRef.current) return;
    chartRef.current = new Chart(canvasRef.current, config);

    return () => {
      chartRef.current?.destroy();
    };
  }, [canvasRef]);

  return <canvas ref={canvasRef} {...rest} />;
});
