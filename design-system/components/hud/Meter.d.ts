import React from "react";

/** Generic overlay-card bar: reputation, batch quality, batch quantity. */
export interface MeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100. */
  value?: number;
  /** Any CSS colour — usually a token. */
  color?: string;
  style?: React.CSSProperties;
  barStyle?: React.CSSProperties;
}

export declare function Meter(props: MeterProps): React.ReactElement;
