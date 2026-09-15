import React from "react";

/**
 * The koshary-symphony meter: scoop on the beat and the multiplier climbs.
 * Hot pink (--combo), used nowhere else in the game. Hidden at streak 0.
 */
export function ComboMeter({ streak = 0, multiplier = 1, progress = 0, label = "Rhythm", style, ...rest }) {
  const on = streak > 0;
  return (
    <div
      style={{
        transform: on ? "scale(1)" : "scale(.55)",
        transformOrigin: "top right",
        opacity: on ? 1 : 0,
        transition: "opacity var(--dur-patience), transform var(--dur-combo) var(--ease-spring-pop)",
        pointerEvents: "none",
        ...style
      }}
      {...rest}
    >
      <div style={{
        display: "flex", alignItems: "center", gap: "var(--gap-combo)",
        background: "var(--surface-combo)",
        border: "var(--outline-ink)",
        borderRadius: "var(--radius-pill)",
        padding: "var(--space-2) var(--space-11)",
        boxShadow: "var(--shadow-combo)"
      }}>
        <b data-ks-display="" data-ks-numeric="" style={{
          fontSize: "var(--fs-combo)", lineHeight: "var(--lh-tight)",
          color: "var(--combo)", textShadow: "var(--shadow-text-sm)"
        }}>×{multiplier}</b>
        <span style={{
          fontSize: "var(--fs-combo-label)", fontWeight: "var(--fw-bold)",
          color: "var(--text-combo)", letterSpacing: "var(--ls-combo)"
        }}>{label}</span>
        <div style={{
          width: "var(--w-combo-bar)", height: "var(--h-combo-bar)",
          borderRadius: "var(--radius-bar)", background: "rgba(0,0,0,.55)",
          overflow: "hidden", boxShadow: "var(--ring-bar)"
        }}>
          <i style={{
            display: "block", height: "100%", width: Math.max(0, Math.min(100, progress)) + "%",
            background: "var(--combo)", transition: "width var(--dur-bar) linear"
          }} />
        </div>
      </div>
    </div>
  );
}
