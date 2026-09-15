import React from "react";

/**
 * The game's actual glyph set. There is no icon font and no SVG set in the
 * source — archetypes are emoji, and the rest are typographic characters set
 * in Cairo. Keep this map as the single place they are named.
 */
export const KS_GLYPHS = {
  // customer archetypes, exactly as ARCH.icon in the source
  walkin: "🙂",
  office: "⏱",
  regular: "★",
  tourist: "📷",
  family: "👨‍👩‍👧",
  critic: "📝",
  // counter + HUD
  star: "★",
  beat: "♪",
  shatta: "🌶",
  check: "✓"
};

/**
 * Renders one of the game's glyphs at a given size. Emoji are left in their
 * own colour; typographic glyphs take `color`.
 */
export function Icon({ name, glyph, size = "1em", color, label, style, ...rest }) {
  const ch = glyph || KS_GLYPHS[name] || name;
  return (
    <span
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
      style={{
        fontSize: size, lineHeight: 1, display: "inline-block",
        fontFamily: "var(--font-ui)", color, ...style
      }}
      {...rest}
    >{ch}</span>
  );
}
