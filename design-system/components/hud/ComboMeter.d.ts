import React from "react";

/** The rhythm / koshary-symphony multiplier. */
export interface ComboMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Consecutive on-beat scoops. At 0 the meter hides itself. */
  streak?: number;
  /** The live multiplier shown as ×N. */
  multiplier?: number;
  /** 0–100 — how much of the current beat window is left. */
  progress?: number;
  /** "Rhythm" / "إيقاع". */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function ComboMeter(props: ComboMeterProps): React.ReactElement;
