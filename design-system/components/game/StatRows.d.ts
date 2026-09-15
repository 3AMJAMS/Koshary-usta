import React from "react";

/** Container for StatRow — hairline ink gaps, one rounded ink-outlined block. */
export interface StatRowsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** One label/value line. */
export interface StatRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  /** Pre-formatted. */
  value?: React.ReactNode;
  /** pos = green (takings, tips), neg = red (costs, walkouts). */
  tone?: "pos" | "neg";
  /** The bill line: lighter ground, brass value, larger type. */
  total?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function StatRows(props: StatRowsProps): React.ReactElement;
export declare function StatRow(props: StatRowProps): React.ReactElement;
