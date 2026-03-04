import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";

export const ProgressBar: React.FC<{
  delay?: number;
  duration?: number;
  color?: string;
  height?: number;
}> = ({ delay = 0, duration = 60, color = "#0066FF", height = 6 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = interpolate(
    frame,
    [delay, delay + duration],
    [0, 100],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.quad),
    }
  );

  return (
    <div
      style={{
        width: "80%",
        height,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: height / 2,
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: color,
          borderRadius: height / 2,
          boxShadow: `0 0 20px ${color}80`,
        }}
      />
    </div>
  );
};
