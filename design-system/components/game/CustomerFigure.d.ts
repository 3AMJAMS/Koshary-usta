import React from "react";

export type ArchetypeKey = "walkin" | "office" | "regular" | "tourist" | "family" | "critic";
export type Mood = "delighted" | "happy" | "impatient" | "annoyed";

export interface ArchetypeDef {
  ar: string;
  en: string;
  /** Patience multiplier — office 0.62 is the tightest, tourist 1.45 the loosest. */
  pat: number;
  /** Tip multiplier — tourist 2.10 is the best payer. */
  tip: number;
  /** Reputation weight — critic 3.20 dwarfs everyone. */
  rep: number;
  /** Spawn weight in the queue roll. */
  w: number;
  /** The archetype emoji, used on the order slip. */
  icon: string;
  arS?: string;
  enS?: string;
  slangAlways?: boolean;
  showman?: boolean;
  bigOnly?: boolean;
  strict?: boolean;
}

export declare const ARCH: Record<ArchetypeKey, ArchetypeDef>;
/** First chapter index each archetype appears in. */
export declare const ARCH_FROM: Record<ArchetypeKey, number>;
export declare function moodOf(patience: number): Mood;

/**
 * Stand-in for the canvas-drawn customer — supplies the correct archetype
 * data, label and patience-coloured ring around an art slot.
 */
export interface CustomerFigureProps extends React.HTMLAttributes<HTMLDivElement> {
  archetype?: ArchetypeKey;
  /** 0–100; drives the ring colour. */
  patience?: number;
  lang?: "ar" | "en";
  /** Real artwork. Falls back to the archetype glyph. */
  art?: React.ReactNode;
  /** Square size in px. */
  size?: number;
  showLabel?: boolean;
  style?: React.CSSProperties;
}

export declare function CustomerFigure(props: CustomerFigureProps): React.ReactElement;
