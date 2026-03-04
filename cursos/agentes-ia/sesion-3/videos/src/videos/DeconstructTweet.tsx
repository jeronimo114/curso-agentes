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

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// ==================== TWEET DATA ====================

const TWEET_TEXT = `There's a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper so I barely even touch the keyboard. I ask for the dumbest things like "decrease the padding on the sidebar by half" because I'm too lazy to find it. I "Accept All" always, I don't read the diffs anymore. When I get error messages I just copy paste them in with no comment, usually that fixes it. The code grows beyond my usual comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix a bug so I just work around it or ask for random changes until it goes away. It's not too bad for throwaway weekend projects, but still quite amusing. I'm building a project or webapp, but it's not really coding – I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works.`;

const PHRASES = [
  {
    quote: `"vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.`,
    title: "La Definición",
    explanation:
      "No intentas entender cada línea. Confías en la IA y te enfocas en QUÉ quieres, no en CÓMO se hace.",
    icon: "🧘",
    color: "#0066FF",
  },
  {
    quote: `the LLMs (e.g. Cursor Composer w Sonnet) are getting too good.`,
    title: "El Habilitador",
    explanation:
      "Los modelos de lenguaje ya son tan buenos que pueden escribir aplicaciones enteras. El salto de calidad hizo esto posible.",
    icon: "🧠",
    color: "#8B5CF6",
  },
  {
    quote: `I just talk to Composer with SuperWhisper so I barely even touch the keyboard.`,
    title: "Ni Teclado",
    explanation:
      "Usa voz para hablarle a la IA. No escribe código, no escribe prompts con teclado. Solo habla.",
    icon: "🎙️",
    color: "#EC4899",
  },
  {
    quote: `I "Accept All" always, I don't read the diffs anymore.`,
    title: "Aceptar Todo",
    explanation:
      "No revisa los cambios que hace la IA. Acepta todo ciegamente. El código ya no es 'suyo' para revisar.",
    icon: "✅",
    color: "#10B981",
  },
  {
    quote: `When I get error messages I just copy paste them in with no comment, usually that fixes it.`,
    title: "Debug con Copy-Paste",
    explanation:
      "¿Error? No lo analiza. Solo lo pega de vuelta a la IA sin explicar nada. Y funciona la mayoría de las veces.",
    icon: "📋",
    color: "#F59E0B",
  },
  {
    quote: `The code grows beyond my usual comprehension... Sometimes the LLMs can't fix a bug so I just work around it or ask for random changes until it goes away.`,
    title: "Pérdida de Control",
    explanation:
      'El código crece tanto que ni él lo entiende. Si la IA no puede arreglar un bug, pide "cambios random" hasta que desaparece.',
    icon: "🌀",
    color: "#EF4444",
  },
  {
    quote: `It's not really coding – I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works.`,
    title: "El Veredicto",
    explanation:
      "Ya no es programar. Es ver, decir, ejecutar y pegar. Un flujo completamente nuevo. Y funciona.",
    icon: "🚀",
    color: "#00ff88",
  },
];

// ==================== SCENE: FULL TWEET ====================

const SceneFullTweet: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const cardOpacity = interpolate(cardProgress, [0, 1], [0, 1]);
  const cardScale = interpolate(cardProgress, [0, 1], [0.9, 1]);

  // Typewriter for the tweet text
  const typeSpeed = 1.5; // chars per frame
  const maxChars = Math.min(
    Math.floor(frame * typeSpeed),
    TWEET_TEXT.length
  );
  const displayText = TWEET_TEXT.slice(0, maxChars);

  const headerOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
      <Background color1="#000000" color2="#0a0a14" />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          background: "#000",
          border: "1px solid #2f3336",
          borderRadius: 16,
          padding: "20px 24px",
          maxWidth: 680,
          width: "100%",
        }}
      >
        {/* Tweet header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
            opacity: headerOpacity,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #4a7c59, #8b6914, #c45e3a)",
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontSize: 17,
                  fontWeight: "700",
                  color: "#e7e9ea",
                }}
              >
                Andrej Karpathy
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#1d9bf0"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 15,
                color: "#71767b",
              }}
            >
              @karpathy
            </span>
          </div>
        </div>

        {/* Tweet text */}
        <div
          style={{
            fontSize: 15,
            lineHeight: 1.5,
            color: "#e7e9ea",
            whiteSpace: "pre-wrap",
            minHeight: 300,
          }}
        >
          {displayText}
          {maxChars < TWEET_TEXT.length && (
            <span
              style={{
                color: "#1d9bf0",
                opacity: Math.floor(frame / 15) % 2 === 0 ? 1 : 0,
              }}
            >
              |
            </span>
          )}
        </div>

        {/* Tweet footer */}
        <div
          style={{
            marginTop: 16,
            paddingTop: 12,
            borderTop: "1px solid #2f3336",
            fontSize: 15,
            color: "#71767b",
            opacity: maxChars >= TWEET_TEXT.length ? 1 : 0,
          }}
        >
          6:17 PM · Feb 2, 2025 ·{" "}
          <span style={{ fontWeight: "700", color: "#e7e9ea" }}>6.7M</span>{" "}
          Views
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==================== SCENE: PHRASE BREAKDOWN ====================

const ScenePhrase: React.FC<{
  phrase: (typeof PHRASES)[number];
  index: number;
}> = ({ phrase, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge animation
  const badgeProgress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const badgeScale = interpolate(badgeProgress, [0, 1], [0, 1]);

  // Quote animation
  const quoteProgress = spring({
    frame: frame - 12,
    fps,
    config: { damping: 200 },
  });
  const quoteOpacity = interpolate(quoteProgress, [0, 1], [0, 1]);
  const quoteY = interpolate(quoteProgress, [0, 1], [30, 0]);

  // Explanation animation
  const explainProgress = spring({
    frame: frame - fps * 2,
    fps,
    config: { damping: 200 },
  });
  const explainOpacity = interpolate(explainProgress, [0, 1], [0, 1]);
  const explainY = interpolate(explainProgress, [0, 1], [20, 0]);

  // Highlight line
  const lineWidth = interpolate(
    frame,
    [fps * 0.5, fps * 1.5],
    [0, 100],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    }
  );

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

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          width: "100%",
        }}
      >
        {/* Top: Number badge + title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              transform: `scale(${badgeScale})`,
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: `${phrase.color}20`,
              border: `2px solid ${phrase.color}60`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              flexShrink: 0,
            }}
          >
            {phrase.icon}
          </div>
          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: phrase.color,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 4,
              }}
            >
              Parte {index + 1} de {PHRASES.length}
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: "800",
                color: "#fff",
              }}
            >
              {phrase.title}
            </div>
          </div>
        </div>

        {/* Quote box */}
        <div
          style={{
            opacity: quoteOpacity,
            transform: `translateY(${quoteY}px)`,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: `4px solid ${phrase.color}`,
            borderRadius: "0 12px 12px 0",
            padding: "24px 28px",
            marginBottom: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.8)",
              fontStyle: "italic",
            }}
          >
            "{phrase.quote}"
          </div>
          {/* Highlight underline */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 3,
              width: `${lineWidth}%`,
              background: `linear-gradient(90deg, ${phrase.color}, transparent)`,
              borderRadius: 2,
            }}
          />
        </div>

        {/* Explanation */}
        <div
          style={{
            opacity: explainOpacity,
            transform: `translateY(${explainY}px)`,
            display: "flex",
            alignItems: "flex-start",
            gap: 16,
            padding: "0 8px",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: phrase.color,
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            →
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.5,
              color: "#fff",
              fontWeight: "600",
            }}
          >
            {phrase.explanation}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==================== MAIN COMPOSITION ====================

export const DeconstructTweet: React.FC = () => {
  const { fps } = useVideoConfig();

  // Scene durations
  const tweetDuration = fps * 12; // 12s for full tweet typing
  const phraseDuration = fps * 8; // 8s per phrase breakdown
  const totalPhrases = PHRASES.length; // 7 phrases

  return (
    <AbsoluteFill style={{ fontFamily }}>
      {/* Scene 1: Full tweet */}
      <Sequence from={0} durationInFrames={tweetDuration} premountFor={fps}>
        <SceneFullTweet />
      </Sequence>

      {/* Scenes 2-8: Each phrase breakdown */}
      {PHRASES.map((phrase, i) => (
        <Sequence
          key={i}
          from={tweetDuration + i * phraseDuration}
          durationInFrames={phraseDuration}
          premountFor={fps}
        >
          <ScenePhrase phrase={phrase} index={i} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
