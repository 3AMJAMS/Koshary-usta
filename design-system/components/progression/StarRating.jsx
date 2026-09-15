import React from "react";

/**
 * The day's rating, 0-3. Stars are typographic ★ set large, ink-stroked when
 * lit, and they pop in sequence 160ms apart. Unlit stars stay visible at 78%
 * so the player can see what they missed.
 */
export function StarRating({ value = 0, max = 3, size = "var(--fs-star)", style, ...rest }) {
  return (
    <div
      role="img"
      aria-label={value + " / " + max}
      style={{ display: "flex", gap: "var(--gap-stars)", justifyContent: "center", ...style }}
      {...rest}
    >
      {Array.from({ length: max }, (_, i) => {
        const lit = i < value;
        return (
          <span key={i} aria-hidden="true" style={{
            fontSize: size, lineHeight: 1,
            color: lit ? "var(--brass-hi)" : "var(--text-star-empty)",
            transform: lit ? "scale(1)" : "scale(.78)",
            WebkitTextStroke: lit ? "var(--stroke-star) var(--ink)" : undefined,
            paintOrder: "stroke fill",
            textShadow: lit ? "var(--glow-star)" : undefined,
            animation: lit ? "ks-star-pop var(--dur-star) var(--ease-spring-star) both" : undefined,
            animationDelay: lit ? (i * 0.16) + "s" : undefined
          }}>★</span>
        );
      })}
    </div>
  );
}
