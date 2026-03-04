import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

export const GlowingIcon: React.FC<{
  emoji: string;
  size?: number;
  delay?: number;
  glowColor?: string;
}> = ({ emoji, size = 120, delay = 0, glowColor = "#0066FF" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleProgress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  const scale = interpolate(scaleProgress, [0, 1], [0, 1]);
  const glowIntensity = interpolate(
    Math.sin((frame - delay) * 0.08),
    [-1, 1],
    [20, 40]
  );

  return (
    <div
      style={{
        fontSize: size,
        transform: `scale(${scale})`,
        filter:
          frame > delay
            ? `drop-shadow(0 0 ${glowIntensity}px ${glowColor})`
            : "none",
        textAlign: "center",
      }}
    >
      {emoji}
    </div>
  );
};
