import React from "react";

export type ButtonVariant = "brass" | "ghost" | "hot" | "go";

/**
 * The dock button — brass face, 2.5px ink outline, 4px physical press.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** brass = primary, ghost = secondary, hot = destructive/refuse, go = confirm. */
  variant?: ButtonVariant;
  /** Takes double width in the dock row (.btn.wide). */
  wide?: boolean;
  /** Fills the row on its own. */
  block?: boolean;
  /** Slow vertical pulse, used to point at the only useful action. */
  pulse?: boolean;
  disabled?: boolean;
  /** Small second line under the label (price, keyboard hint). */
  sub?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): React.ReactElement;
