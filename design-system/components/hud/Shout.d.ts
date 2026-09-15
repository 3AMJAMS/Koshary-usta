import React from "react";

/** Comic speech balloon with an ink tail, anchored bottom inline-end. */
export interface ShoutProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Shout(props: ShoutProps): React.ReactElement;
