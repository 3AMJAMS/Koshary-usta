import React from "react";

export type BadgeTone = "neutral" | "ok" | "no";

/** Pill tag for order components and verdicts. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** neutral = asked for, ok = delivered right, no = missing or over. */
  tone?: BadgeTone;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): React.ReactElement;
