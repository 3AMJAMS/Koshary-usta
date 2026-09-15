import React from "react";

/** 32px square chrome button for the HUD rail (sound, pause, language). */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name — the button is glyph-only. */
  label: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): React.ReactElement;
