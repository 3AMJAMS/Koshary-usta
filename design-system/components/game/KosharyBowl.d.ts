import React from "react";
import type { IngredientKey } from "./OrderTicket";

export interface BowlLayer {
  key: IngredientKey;
  /** Relative thickness; defaults to 1 per scoop. */
  amount?: number;
}

/**
 * CSS stand-in for the canvas-drawn bowl.
 */
export interface KosharyBowlProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width in px; the bowl is about half as tall. */
  size?: number;
  /** Bottom-up, in scoop order. */
  layers?: BowlLayer[];
  steam?: boolean;
  /** Past capacity — red ring and the OVERFULL shout. */
  overfull?: boolean;
  style?: React.CSSProperties;
}

export declare function KosharyBowl(props: KosharyBowlProps): React.ReactElement;
