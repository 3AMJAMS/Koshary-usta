# assets

**Empty on purpose.** No binaries were supplied with this project — no logo, no icon set, no fonts, no character or environment art.

Nothing here was drawn or generated to fill the gap. See `readme.md` at the project root for what that means in practice and what to commission first.

What belongs here when it exists:

| Path | What |
| --- | --- |
| `assets/logo.svg` | The 3AMJamGames or Koshary Usta mark. Until it lands, the brand is set in type — see `guidelines/brand-wordmark.html`. |
| `assets/fonts/` | Licensed font binaries. Drop them in, swap the `@import` in `tokens/fonts.css` for real `@font-face` rules, and nothing else changes. |
| `assets/icons/` | Bespoke glyphs replacing the Phosphor stand-ins. Repoint `KS_ICONS` in `components/core/Icon.jsx` — it is the single mapping. |
| `assets/portraits/` | Painted customer art, one set per archetype × mood. `CustomerCard` takes a `portrait` prop and falls back to a labelled slot. |
| `assets/scene/` | Counter, vats, street backdrop plates if the scene moves from CSS to painted art. |
