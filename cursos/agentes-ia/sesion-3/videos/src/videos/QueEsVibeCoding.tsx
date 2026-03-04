import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { Background } from "../components/Background";
import { AnimatedText, WordByWord } from "../components/AnimatedText";
import { GlowingIcon } from "../components/GlowingIcon";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

// Scene 1: Hook - "Imagina esto..." (0-8s)
const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cursorBlink = Math.floor(frame / (fps * 0.5)) % 2 === 0;

  const typedText = "Quiero una app que...";
  const charsToShow = Math.min(
    Math.floor(frame / 4),
    typedText.length
  );
  const displayText = typedText.slice(0, charsToShow);

  const codeOpacity = interpolate(frame, [fps * 5, fps * 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const codeScale = spring({
    frame: frame - fps * 5,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <Background color1="#0a0a0a" color2="#0d1117" />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "32px 40px",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#00ff88",
                boxShadow: "0 0 10px #00ff8880",
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Tu prompt
            </span>
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: 36,
              fontWeight: "600",
              marginTop: 20,
              minHeight: 50,
            }}
          >
            {displayText}
            {cursorBlink && (
              <span style={{ color: "#0066FF", fontWeight: "400" }}>|</span>
            )}
          </div>
        </div>

        <div
          style={{
            opacity: codeOpacity,
            transform: `scale(${Math.max(codeScale, 0)})`,
            marginTop: 30,
            background: "rgba(0,102,255,0.08)",
            border: "1px solid rgba(0,102,255,0.3)",
            borderRadius: 16,
            padding: "24px 40px",
            maxWidth: 800,
            margin: "30px auto 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 28 }}>{"✨"}</span>
            <span
              style={{ color: "#0066FF", fontSize: 22, fontWeight: "700" }}
            >
              App generada
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: Definition (8-16s)
const SceneDefinition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <Background color1="#0d1117" color2="#1a1a2e" />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Sequence from={0} durationInFrames={fps * 8} premountFor={fps}>
          <AnimatedText
            text="Vibe Coding"
            fontSize={96}
            color="#0066FF"
            fontWeight="900"
            delay={0}
          />
        </Sequence>

        <Sequence
          from={Math.round(fps * 1.2)}
          durationInFrames={fps * 7}
          layout="none"
          premountFor={fps}
        >
          <div style={{ marginTop: 30 }}>
            <AnimatedText
              text="Describe lo que quieres."
              fontSize={42}
              color="rgba(255,255,255,0.8)"
              fontWeight="600"
              delay={0}
            />
          </div>
        </Sequence>

        <Sequence
          from={Math.round(fps * 2.5)}
          durationInFrames={fps * 6}
          layout="none"
          premountFor={fps}
        >
          <div style={{ marginTop: 16 }}>
            <AnimatedText
              text="La IA lo construye."
              fontSize={42}
              color="rgba(255,255,255,0.8)"
              fontWeight="600"
              delay={0}
            />
          </div>
        </Sequence>

        <Sequence
          from={Math.round(fps * 4)}
          durationInFrames={fps * 4}
          layout="none"
          premountFor={fps}
        >
          <div
            style={{
              marginTop: 50,
              padding: "12px 32px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: 12,
              display: "inline-block",
            }}
          >
            <AnimatedText
              text='Andrej Karpathy, Feb 2025'
              fontSize={22}
              color="rgba(255,255,255,0.4)"
              fontWeight="400"
              delay={0}
            />
          </div>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: The Spectrum (16-24s)
const SceneSpectrum: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const levels = [
    { label: "Autocompletado", emoji: "💬", color: "#666" },
    { label: "Copiloto IA", emoji: "🤖", color: "#0066FF" },
    { label: "Vibe Coding", emoji: "🚀", color: "#00ff88" },
  ];

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <Background color1="#0a0a0a" color2="#1a1a2e" />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <AnimatedText
          text="El Espectro"
          fontSize={56}
          color="#fff"
          delay={0}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginTop: 60,
          }}
        >
          {levels.map((level, i) => {
            const itemDelay = fps * 1 + i * fps * 1;
            const progress = spring({
              frame: frame - itemDelay,
              fps,
              config: { damping: 12, stiffness: 200 },
            });

            const scale = interpolate(progress, [0, 1], [0, 1]);
            const opacity = interpolate(progress, [0, 1], [0, 1]);

            const isActive = i === 2;
            const glowIntensity = isActive
              ? interpolate(
                  Math.sin((frame - itemDelay) * 0.1),
                  [-1, 1],
                  [10, 30]
                )
              : 0;

            return (
              <div
                key={i}
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  background: isActive
                    ? "rgba(0,255,136,0.08)"
                    : "rgba(255,255,255,0.03)",
                  border: `2px solid ${isActive ? level.color : "rgba(255,255,255,0.1)"}`,
                  borderRadius: 20,
                  padding: "40px 36px",
                  width: 240,
                  textAlign: "center",
                  boxShadow: isActive
                    ? `0 0 ${glowIntensity}px ${level.color}40`
                    : "none",
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 16 }}>
                  {level.emoji}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: "700",
                    color: level.color,
                  }}
                >
                  {level.label}
                </div>
              </div>
            );
          })}
        </div>

        <Sequence
          from={Math.round(fps * 5)}
          durationInFrames={fps * 3}
          layout="none"
          premountFor={fps}
        >
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <AnimatedText
              text="Menos codigo ──────────── Cero codigo"
              fontSize={20}
              color="rgba(255,255,255,0.3)"
              fontWeight="400"
              delay={0}
            />
          </div>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: Quote + CTA (24-30s)
const SceneQuote: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <Background color1="#1a1a2e" color2="#0a0a0a" />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <GlowingIcon emoji="💡" size={80} delay={0} glowColor="#FFD700" />

        <Sequence from={Math.round(fps * 1)} durationInFrames={fps * 5} layout="none" premountFor={fps}>
          <div style={{ marginTop: 30, maxWidth: 700, margin: "30px auto 0" }}>
            <WordByWord
              words={[
                '"Olvidate',
                "del",
                "codigo.",
                "Entregale",
                "a",
                "la",
                "IA",
                "y",
                'vibeá."',
              ]}
              fontSize={44}
              stagger={10}
              highlightWords={[6]}
              highlightColor="#0066FF"
            />
          </div>
        </Sequence>

        <Sequence from={fps * 4} durationInFrames={fps * 2} layout="none" premountFor={fps}>
          <div style={{ marginTop: 50 }}>
            <AnimatedText
              text="Hoy lo vas a hacer."
              fontSize={32}
              color="#00ff88"
              fontWeight="700"
              delay={0}
            />
          </div>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

// Main composition - doubled timings
export const QueEsVibeCoding: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ fontFamily }}>
      <Sequence from={0} durationInFrames={fps * 8} premountFor={fps}>
        <SceneHook />
      </Sequence>
      <Sequence from={fps * 8} durationInFrames={fps * 8} premountFor={fps}>
        <SceneDefinition />
      </Sequence>
      <Sequence from={fps * 16} durationInFrames={fps * 8} premountFor={fps}>
        <SceneSpectrum />
      </Sequence>
      <Sequence from={fps * 24} durationInFrames={fps * 6} premountFor={fps}>
        <SceneQuote />
      </Sequence>
    </AbsoluteFill>
  );
};
