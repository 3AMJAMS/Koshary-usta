import React from "react";

/** The overlay card — every screen outside the live counter is one of these. */
export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  /** Small brass pill above the title (chapter, year, "Today's news"). */
  eyebrow?: React.ReactNode;
  /** Display-type heading, set in Lalezar with an ink drop. */
  title?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
}

export interface PanelHeadingProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface PanelRuleProps {
  style?: React.CSSProperties;
}

export declare function Panel(props: PanelProps): React.ReactElement;
export declare function PanelHeading(props: PanelHeadingProps): React.ReactElement;
export declare function PanelRule(props: PanelRuleProps): React.ReactElement;
