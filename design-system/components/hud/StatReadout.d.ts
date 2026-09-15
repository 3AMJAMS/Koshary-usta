import React from "react";

export type StatKind = "money" | "rep" | "day";

/**
 * A chip on the brushed-steel HUD rail.
 */
export interface StatReadoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Picks the value colour: money = brass, rep = ward, day = plain. */
  kind?: StatKind;
  /** Short label or glyph before the number. */
  label?: React.ReactNode;
  /** Pre-formatted — the component never formats numbers. */
  value?: React.ReactNode;
  /** Fire the bump animation when the value changes. */
  bump?: boolean;
  style?: React.CSSProperties;
}

export declare function StatReadout(props: StatReadoutProps): React.ReactElement;
