import React from "react";
import { Composition, Folder } from "remotion";
import { QueEsVibeCoding } from "./videos/QueEsVibeCoding";
import { AntigravityEn60s } from "./videos/AntigravityEn60s";
import { LaAppQueVamosAConstruir } from "./videos/LaAppQueVamosAConstruir";
import { DeconstructTweet } from "./videos/DeconstructTweet";

const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="Sesion-3">
      {/* Video 1: Qué es Vibe Coding (~30 seconds) */}
      <Composition
        id="QueEsVibeCoding"
        component={QueEsVibeCoding}
        durationInFrames={30 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Video 2: Deconstruct Karpathy Tweet (12s tweet + 7x8s phrases = 68s) */}
      <Composition
        id="DeconstructTweet"
        component={DeconstructTweet}
        durationInFrames={68 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Video 3: Antigravity en 60 segundos (~32 seconds) */}
      <Composition
        id="AntigravityEn60s"
        component={AntigravityEn60s}
        durationInFrames={32 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Video 4: La App que Vamos a Construir (~24 seconds) */}
      <Composition
        id="LaAppQueVamosAConstruir"
        component={LaAppQueVamosAConstruir}
        durationInFrames={24 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};
