import React from "react";

export type FeedbackKind = "good" | "perfect" | "kemala" | "combo" | "warn" | "spill";

/** The floating judgement pop over the bowl. */
export interface ServeFeedbackProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Picks the colour: perfect = brass, kemala = green, combo = pink, spill = red. */
  kind?: FeedbackKind;
  /** Double-size stroke and type, for payouts and spills. */
  big?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function ServeFeedback(props: ServeFeedbackProps): React.ReactElement;
