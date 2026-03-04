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
import { AnimatedText } from "../components/AnimatedText";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

// Scene 1: Logo intro (0-6s)
const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  const subtitleProgress = spring({
    frame: frame - fps * 2,
    fps,
    config: { damping: 200 },
  });

  const tagOpacity = interpolate(subtitleProgress, [0, 1], [0, 1]);
  const tagY = interpolate(subtitleProgress, [0, 1], [20, 0]);

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Background color1="#0a0a0a" color2="#0d1117" />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div
          style={{
            transform: `scale(${logoScale})`,
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {["#4285F4", "#EA4335", "#FBBC04", "#34A853"].map((c, i) => {
              const dotScale = spring({
                frame: frame - i * 6,
                fps,
                config: { damping: 10, stiffness: 300 },
              });
              return (
                <div
                  key={i}
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    backgroundColor: c,
                    transform: `scale(${dotScale})`,
                    boxShadow: `0 0 20px ${c}60`,
                  }}
                />
              );
            })}
          </div>
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: "900",
            color: "#fff",
            transform: `scale(${logoScale})`,
            letterSpacing: -2,
          }}
        >
          Antigravity
        </div>

        <div
          style={{
            opacity: tagOpacity,
            transform: `translateY(${tagY}px)`,
            marginTop: 16,
            fontSize: 26,
            color: "rgba(255,255,255,0.5)",
            fontWeight: "600",
          }}
        >
          El IDE agéntico de Google
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: Two Views (6-16s)
const SceneTwoViews: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const views = [
    {
      name: "Editor View",
      icon: "✏️",
      desc: "IDE con IA integrada",
      features: ["Autocompletado", "Comandos inline", "Multi-modelo"],
      color: "#0066FF",
    },
    {
      name: "Manager View",
      icon: "🎛️",
      desc: "Control de misión",
      features: ["Agentes paralelos", "Artifacts", "Verificación"],
      color: "#00ff88",
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
      <Background color1="#0d1117" color2="#1a1a2e" />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <AnimatedText
          text="Dos interfaces, un IDE"
          fontSize={52}
          color="#fff"
          delay={0}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginTop: 50,
          }}
        >
          {views.map((view, i) => {
            const cardDelay = fps * 1.2 + i * fps * 1;
            const cardProgress = spring({
              frame: frame - cardDelay,
              fps,
              config: { damping: 200 },
            });

            const cardOpacity = interpolate(cardProgress, [0, 1], [0, 1]);
            const cardX = interpolate(
              cardProgress,
              [0, 1],
              [i === 0 ? -60 : 60, 0]
            );

            return (
              <div
                key={i}
                style={{
                  opacity: cardOpacity,
                  transform: `translateX(${cardX}px)`,
                  background: `rgba(${i === 0 ? "0,102,255" : "0,255,136"},0.05)`,
                  border: `1px solid ${view.color}40`,
                  borderRadius: 20,
                  padding: "40px 36px",
                  width: 360,
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>
                  {view.icon}
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: "800",
                    color: view.color,
                    marginBottom: 8,
                  }}
                >
                  {view.name}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 24,
                  }}
                >
                  {view.desc}
                </div>

                {view.features.map((feat, j) => {
                  const featDelay = cardDelay + fps * 0.8 + j * 15;
                  const featProgress = spring({
                    frame: frame - featDelay,
                    fps,
                    config: { damping: 200 },
                  });
                  const featOpacity = interpolate(
                    featProgress,
                    [0, 1],
                    [0, 1]
                  );

                  return (
                    <div
                      key={j}
                      style={{
                        opacity: featOpacity,
                        fontSize: 18,
                        color: "rgba(255,255,255,0.7)",
                        padding: "8px 0",
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: view.color }}>{"→"}</span>
                      {feat}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: How it works (16-26s)
const SceneHowItWorks: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { num: "1", text: "Describes tu idea", icon: "💬" },
    { num: "2", text: "El agente planifica", icon: "📋" },
    { num: "3", text: "Escribe y testea", icon: "⚡" },
    { num: "4", text: "Tú revisas artifacts", icon: "✅" },
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
      <Background color1="#1a1a2e" color2="#0d1117" />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <AnimatedText
          text="¿Cómo funciona?"
          fontSize={52}
          color="#fff"
          delay={0}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            marginTop: 60,
          }}
        >
          {steps.map((step, i) => {
            const stepDelay = fps * 1 + i * fps * 1;
            const progress = spring({
              frame: frame - stepDelay,
              fps,
              config: { damping: 15, stiffness: 200 },
            });
            const scale = interpolate(progress, [0, 1], [0, 1]);
            const opacity = interpolate(progress, [0, 1], [0, 1]);

            const connectorProgress =
              i < 3
                ? interpolate(
                    frame,
                    [stepDelay + 15, stepDelay + 35],
                    [0, 1],
                    {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }
                  )
                : 0;

            return (
              <React.Fragment key={i}>
                <div
                  style={{
                    opacity,
                    transform: `scale(${scale})`,
                    textAlign: "center",
                    width: 170,
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(0,102,255,0.15)",
                      border: "2px solid #0066FF40",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      fontSize: 36,
                    }}
                  >
                    {step.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: "800",
                      color: "#0066FF",
                      marginBottom: 6,
                    }}
                  >
                    PASO {step.num}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    {step.text}
                  </div>
                </div>

                {i < 3 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: 40,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 2,
                        background: `linear-gradient(to right, #0066FF ${connectorProgress * 100}%, rgba(255,255,255,0.1) ${connectorProgress * 100}%)`,
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: Models + Free (26-32s)
const SceneModels: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const models = [
    { name: "Gemini 3 Pro", color: "#4285F4" },
    { name: "Claude Sonnet", color: "#D97706" },
    { name: "GPT-OSS", color: "#10B981" },
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

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <AnimatedText
          text="Multi-modelo"
          fontSize={56}
          color="#fff"
          delay={0}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 50,
          }}
        >
          {models.map((model, i) => {
            const delay = fps * 1 + i * 18;
            const progress = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, stiffness: 200 },
            });
            const scale = interpolate(progress, [0, 1], [0, 1]);

            return (
              <div
                key={i}
                style={{
                  transform: `scale(${scale})`,
                  background: `${model.color}15`,
                  border: `2px solid ${model.color}50`,
                  borderRadius: 16,
                  padding: "20px 32px",
                  fontSize: 22,
                  fontWeight: "700",
                  color: model.color,
                }}
              >
                {model.name}
              </div>
            );
          })}
        </div>

        <Sequence
          from={Math.round(fps * 3)}
          durationInFrames={fps * 3}
          layout="none"
          premountFor={fps}
        >
          <div style={{ marginTop: 60 }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(0,255,136,0.1)",
                border: "2px solid #00ff8850",
                borderRadius: 16,
                padding: "20px 48px",
              }}
            >
              <AnimatedText
                text="Gratis para individuos"
                fontSize={36}
                color="#00ff88"
                fontWeight="800"
                delay={0}
              />
            </div>
          </div>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

// Main composition - doubled timings
export const AntigravityEn60s: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ fontFamily }}>
      <Sequence from={0} durationInFrames={fps * 6} premountFor={fps}>
        <SceneIntro />
      </Sequence>
      <Sequence from={fps * 6} durationInFrames={fps * 10} premountFor={fps}>
        <SceneTwoViews />
      </Sequence>
      <Sequence from={fps * 16} durationInFrames={fps * 10} premountFor={fps}>
        <SceneHowItWorks />
      </Sequence>
      <Sequence from={fps * 26} durationInFrames={fps * 6} premountFor={fps}>
        <SceneModels />
      </Sequence>
    </AbsoluteFill>
  );
};
