**A stand-in, not a shipping component.** In the real game the customer is drawn on the canvas by `makeLook()` — randomised skin and clothing from fixed palettes, optional taqiya/cap/hijab/beard/glasses, and a camera flash for tourists — and there is no DOM card for a customer at all. Their archetype reads on the order slip (`.sWho`), and patience is the single bar top inline-end.

Use this only in mockups, where you need a figure with the right label and mood on the page.

```jsx
<CustomerFigure archetype="critic" patience={28} lang="en" />
```

This module owns the real `ARCH` table, `ARCH_FROM` (chapter gating) and `moodOf()` — import them from here for any queue logic rather than retyping the multipliers. Note the Arabic is colloquial: a tourist is **سايح**, a regular is **زبون قديم**, and the critic is **صحفي** — a newspaperman, not a restaurant reviewer.
