import React from "react";
import type { IngredientKey } from "./OrderTicket";

/**
 * CSS stand-in for a canvas-drawn vessel on the counter.
 */
export interface IngredientVatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Picks the colour pair and the vessel shape. */
  ingredient?: IngredientKey;
  /** 0–100 — how full it is. */
  level?: number;
  /** Rising steam. Only the boiled things are hot. */
  steam?: boolean;
  /** Armed for the next scoop — brass ring. */
  active?: boolean;
  /** Run dry — pulses a red ring. */
  empty?: boolean;
  /** Scoops taken into the current bowl. */
  count?: number;
  /** Overrides the ingredient name. */
  label?: React.ReactNode;
  lang?: "ar" | "en";
  onScoop?: () => void;
  style?: React.CSSProperties;
}

export declare function IngredientVat(props: IngredientVatProps): React.ReactElement;
