import React from "react";

/** The three venues the story moves through. */
export const VENUES = {
  cart: { ar: "عربية", en: "A cart" },
  shop: { ar: "محل", en: "A shop" },
  neon: { ar: "نيون", en: "Neon" }
};

/**
 * One chapter in the story — a year, a venue, and the days inside it. The game
 * is linear, so this reports progress rather than offering a choice.
 */
export function ChapterCard({
  year, title, venue = "shop", days, dayReached, goal, state = "open",
  onClick, style, ...rest
}) {
  const locked = state === "locked";
  const done = state === "done";
  return (
    <div
      {...(onClick && !locked ? { "data-ks-press": "row", role: "button", tabIndex: 0, onClick } : {})}
      {...(locked ? { "data-ks-state": "locked" } : {})}
      style={{
        display: "flex", gap: "var(--gap-up)", alignItems: "center",
        background: done ? "var(--surface-prep-done)" : "var(--surface-row)",
        border: "var(--outline-ink)",
        borderRadius: "var(--radius-up)",
        padding: "var(--pad-up)",
        marginBottom: "var(--space-8)",
        boxShadow: "var(--shadow-up)",
        ...style
      }}
      {...rest}
    >
      <div data-ks-display="" style={{
        flex: "0 0 auto", minWidth: "var(--size-upico)", height: "var(--size-upico)",
        borderRadius: "var(--radius-upico)", display: "grid", placeItems: "center",
        background: "var(--surface-upico)", border: "var(--outline-ink)",
        padding: "0 var(--space-5)",
        fontSize: "var(--fs-up-title)", color: "var(--brass-hi)"
      }}>{year}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div data-ks-display="" style={{
          fontSize: "var(--fs-up-title)", color: "var(--text-head)", lineHeight: "var(--lh-snug)"
        }}>{title}</div>
        <div style={{
          fontSize: "var(--fs-up-desc)", color: "var(--text-muted)",
          lineHeight: "var(--lh-slip)", marginTop: "var(--space-1)",
          display: "flex", gap: "var(--space-5)", flexWrap: "wrap"
        }}>
          {days != null ? (
            <span data-ks-numeric="">{dayReached != null ? dayReached + " / " + days : days}</span>
          ) : null}
          {goal != null ? <span data-ks-numeric="">{goal}</span> : null}
        </div>
      </div>
    </div>
  );
}
