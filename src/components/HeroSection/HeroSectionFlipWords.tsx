import React from "react";
import { FlipWords } from "../ui/flip-words";

export function HeroSectionFlipWord() {
  const words = ["cepat", "dekat", "terpercaya"];

  return (
    <div>
      <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
        FixITnow
        <br />
        Perbaikan
        <FlipWords words={words} />
      </div>
    </div>
  );
}
