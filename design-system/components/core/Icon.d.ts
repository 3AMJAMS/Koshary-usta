import React from "react";

export type KsGlyphName =
  | "walkin" | "office" | "regular" | "tourist" | "family" | "critic"
  | "star" | "beat" | "shatta" | "check";

/** The game's glyph set — emoji for archetypes, typographic characters elsewhere. */
export declare const KS_GLYPHS: Record<KsGlyphName, string>;

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** A name from KS_GLYPHS. */
  name?: KsGlyphName | string;
  /** Any literal character, if it isn't in the map. */
  glyph?: string;
  /** Any CSS length. Defaults to 1em so it tracks its label. */
  size?: string | number;
  /** Only affects typographic glyphs; emoji keep their own colour. */
  color?: string;
  /** Supply when the glyph carries meaning on its own; omit for decoration. */
  label?: string;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): React.ReactElement;
