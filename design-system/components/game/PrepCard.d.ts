import React from "react";

export type PrepState = "idle" | "done" | "empty";

/** One cooked batch on the morning prep board. */
export interface PrepCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The ingredient name, in the on-screen script. */
  title?: React.ReactNode;
  /** Status line — "Ready", "Running low", "Out". */
  sub?: React.ReactNode;
  /** The ingredient's own colour, shown as a dot top inline-end. */
  swatch?: string;
  /** 0–100 — how well it was cooked. Drives payout and critic scoring. */
  quality?: number;
  /** 0–100 — how much is left in the vat. */
  quantity?: number;
  /** Servings remaining, shown instead of a percentage when given. */
  servings?: React.ReactNode;
  /** done = cooked and ready (green), empty = run dry (pulsing red). */
  state?: PrepState;
  style?: React.CSSProperties;
}

export declare function PrepCard(props: PrepCardProps): React.ReactElement;
