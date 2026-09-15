import React from "react";

/** Transient one-line confirmation above the dock. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): React.ReactElement;
