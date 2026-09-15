import React from "react";

/** good above 60, warn 60–30, bad below 30. */
export declare function patienceColor(pct: number): string;

/** The active customer's patience countdown. */
export interface PatienceMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100. */
  value?: number;
  /** Force the pulse on or off; defaults to on at or below 22. */
  panic?: boolean;
  style?: React.CSSProperties;
}

export declare function PatienceMeter(props: PatienceMeterProps): React.ReactElement;
