import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Easing,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { Background } from "../components/Background";
import { AnimatedText } from "../components/AnimatedText";
import { GlowingIcon } from "../components/GlowingIcon";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

// Scene 1: Title reveal (0-6s)
const SceneTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const glowPulse = interpolate(
    Math.sin(frame * 0.1),
    [-1, 1],
    [20, 50]
  );

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Background color1="#0a0a0a" color2="#1a0a2e" />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div
          style={{
            transform: `scale(${titleScale})`,
            fontSize: 56,
            marginBottom: 20,
          }}
        >
          {"🎮"}
        </div>

        <div style={{ transform: `scale(${titleScale})` }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: "900",
              color: "#fff",
              textShadow: `0 0 ${glowPulse}px rgba(138,43,226,0.5)`,
              letterSpacing: -2,
            }}
          >
            LifeXP
          </div>
        </div>

        <Sequence from={Math.round(fps * 1.5)} durationInFrames={fps * 5} layout="none" premountFor={fps}>
          <AnimatedText
            text="Gamifica tu vida real"
            fontSize={32}
            color="rgba(255,255,255,0.6)"
            fontWeight="600"
            delay={0}
          />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: Features showcase (6-14s)
const SceneFeatures: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const features = [
    {
      icon: "📋",
      title: "Registra actividades",
      desc: "Hábitos por área de vida",
      color: "#0066FF",
    },
    {
      icon: "⚡",
      title: "Gana XP",
      desc: "Puntos por completar",
      color: "#FFD700",
    },
    {
      icon: "📊",
      title: "Sube de nivel",
      desc: "Progreso visual",
      color: "#00ff88",
    },
    {
      icon: "🏆",
      title: "Recompensas",
      desc: "Logros desbloqueables",
      color: "#FF6B6B",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
      }}
    >
      <Background color1="#0d1117" color2="#1a0a2e" />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <AnimatedText
          text="¿Qué hace la app?"
          fontSize={48}
          color="#fff"
          delay={0}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginTop: 50,
            maxWidth: 720,
            margin: "50px auto 0",
          }}
        >
          {features.map((feat, i) => {
            const delay = fps * 0.8 + i * fps * 0.8;
            const progress = spring({
              frame: frame - delay,
              fps,
              config: { damping: 200 },
            });
            const opacity = interpolate(progress, [0, 1], [0, 1]);
            const translateY = interpolate(progress, [0, 1], [30, 0]);

            return (
              <div
                key={i}
                style={{
                  opacity,
                  transform: `translateY(${translateY}px)`,
                  background: `${feat.color}08`,
                  border: `1px solid ${feat.color}30`,
                  borderRadius: 16,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 36 }}>{feat.icon}</div>
                <div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: feat.color,
                    }}
                  >
                    {feat.title}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.4)",
                      marginTop: 4,
                    }}
                  >
                    {feat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: Mock UI preview (14-20s)
const SceneMockUI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const containerScale = interpolate(containerProgress, [0, 1], [0.8, 1]);
  const containerOpacity = interpolate(containerProgress, [0, 1], [0, 1]);

  const xpProgress = interpolate(
    frame,
    [fps * 1.5, fps * 4],
    [0, 75],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.quad) }
  );

  const levelProgress = spring({
    frame: frame - fps * 2,
    fps,
    config: { damping: 10, stiffness: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
      }}
    >
      <Background color1="#1a0a2e" color2="#0a0a0a" />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          opacity: containerOpacity,
          transform: `scale(${containerScale})`,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24,
          padding: 40,
          width: 700,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: "600" }}>
              NIVEL
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: "900",
                color: "#FFD700",
                transform: `scale(${interpolate(levelProgress, [0, 1], [0, 1])})`,
                display: "inline-block",
              }}
            >
              7
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: "600" }}>
              XP TOTAL
            </div>
            <div style={{ fontSize: 32, fontWeight: "800", color: "#0066FF" }}>
              2,450
            </div>
          </div>
        </div>

        {/* XP Bar */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: 12,
            height: 24,
            overflow: "hidden",
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: `${xpProgress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #0066FF, #00ff88)",
              borderRadius: 12,
              boxShadow: "0 0 20px rgba(0,102,255,0.4)",
            }}
          />
        </div>

        {/* Today's activities */}
        <div
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.4)",
            fontWeight: "600",
            marginBottom: 16,
          }}
        >
          ACTIVIDADES DE HOY
        </div>

        {[
          { name: "Meditar 10 min", xp: "+50 XP", done: true, area: "Salud" },
          { name: "Leer 30 páginas", xp: "+80 XP", done: true, area: "Conocimiento" },
          { name: "Ejercicio", xp: "+100 XP", done: false, area: "Fitness" },
        ].map((activity, i) => {
          const actDelay = fps * 1.5 + i * 20;
          const actProgress = spring({
            frame: frame - actDelay,
            fps,
            config: { damping: 200 },
          });
          const actOpacity = interpolate(actProgress, [0, 1], [0, 1]);

          return (
            <div
              key={i}
              style={{
                opacity: actOpacity,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    border: `2px solid ${activity.done ? "#00ff88" : "rgba(255,255,255,0.2)"}`,
                    background: activity.done ? "#00ff8820" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    color: "#00ff88",
                  }}
                >
                  {activity.done ? "✓" : ""}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 18,
                      color: activity.done ? "rgba(255,255,255,0.5)" : "#fff",
                      fontWeight: "600",
                      textDecoration: activity.done ? "line-through" : "none",
                    }}
                  >
                    {activity.name}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
                    {activity.area}
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: activity.done ? "#00ff88" : "#FFD700",
                }}
              >
                {activity.xp}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: CTA (20-24s)
const SceneCTA: React.FC = () => {
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
      <Background color1="#0a0a0a" color2="#1a0a2e" />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <GlowingIcon emoji="🚀" size={72} delay={0} glowColor="#8B5CF6" />

        <Sequence from={Math.round(fps * 1)} durationInFrames={fps * 3} layout="none" premountFor={fps}>
          <div style={{ marginTop: 24 }}>
            <AnimatedText
              text="Vamos a construirla"
              fontSize={56}
              color="#fff"
              fontWeight="900"
              delay={0}
            />
          </div>
        </Sequence>

        <Sequence from={Math.round(fps * 2)} durationInFrames={fps * 2} layout="none" premountFor={fps}>
          <div style={{ marginTop: 16 }}>
            <AnimatedText
              text="Juntos. En vivo. Con Antigravity."
              fontSize={28}
              color="rgba(255,255,255,0.5)"
              fontWeight="600"
              delay={0}
            />
          </div>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

// Main composition - doubled timings
export const LaAppQueVamosAConstruir: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ fontFamily }}>
      <Sequence from={0} durationInFrames={fps * 6} premountFor={fps}>
        <SceneTitle />
      </Sequence>
      <Sequence from={fps * 6} durationInFrames={fps * 8} premountFor={fps}>
        <SceneFeatures />
      </Sequence>
      <Sequence from={fps * 14} durationInFrames={fps * 6} premountFor={fps}>
        <SceneMockUI />
      </Sequence>
      <Sequence from={fps * 20} durationInFrames={fps * 4} premountFor={fps}>
        <SceneCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
