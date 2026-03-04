import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const Background: React.FC<{
  color1?: string;
  color2?: string;
}> = ({ color1 = "#0a0a0a", color2 = "#1a1a2e" }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const gradientAngle = interpolate(
    frame,
    [0, durationInFrames],
    [135, 225],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${gradientAngle}deg, ${color1}, ${color2})`,
      }}
    />
  );
};
