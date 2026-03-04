import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

export const AnimatedText: React.FC<{
  text: string;
  delay?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: string;
  style?: React.CSSProperties;
}> = ({
  text,
  delay = 0,
  fontSize = 64,
  color = "#ffffff",
  fontWeight = "bold",
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [40, 0]);

  return (
    <div
      style={{
        fontSize,
        fontWeight,
        color,
        opacity,
        transform: `translateY(${translateY}px)`,
        textAlign: "center",
        lineHeight: 1.2,
        ...style,
      }}
    >
      {text}
    </div>
  );
};

export const WordByWord: React.FC<{
  words: string[];
  startDelay?: number;
  stagger?: number;
  fontSize?: number;
  color?: string;
  highlightColor?: string;
  highlightWords?: number[];
}> = ({
  words,
  startDelay = 0,
  stagger = 8,
  fontSize = 48,
  color = "#ffffff",
  highlightColor = "#0066FF",
  highlightWords = [],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "12px",
      }}
    >
      {words.map((word, i) => {
        const wordDelay = startDelay + i * stagger;
        const progress = spring({
          frame: frame - wordDelay,
          fps,
          config: { damping: 200 },
        });

        const opacity = interpolate(progress, [0, 1], [0, 1]);
        const translateY = interpolate(progress, [0, 1], [30, 0]);
        const isHighlight = highlightWords.includes(i);

        return (
          <span
            key={i}
            style={{
              fontSize,
              fontWeight: isHighlight ? "900" : "600",
              color: isHighlight ? highlightColor : color,
              opacity,
              transform: `translateY(${translateY}px)`,
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
