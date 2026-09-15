# Koshary Usta — game UI kit

Click-through recreation of the five core screens, at the game's native 1280×720. Open `index.html`; the stage scales to fit the viewport.

## Flow

```
Title ──▶ Level select ──▶ Shift ──▶ Results ──▶ Level select
  └──▶ Shop ──▶ Shift                   └──▶ Shop
```

| File | Screen |
| --- | --- |
| `Scene.jsx` | Shared furniture: `StreetBackdrop`, `ShopDressing`, `LangToggle` |
| `TitleScreen.jsx` | Title, tagline, play/continue/shop |
| `LevelSelect.jsx` | Chapter map on a paper ground, daily-event banner |
| `ShiftScreen.jsx` | Gameplay: HUD, queue, ticket, vats, bowl, judgement pops |
| `ShopScreen.jsx` | Upgrade grid, six items across owned / affordable / locked |
| `ResultsScreen.jsx` | End-of-shift summary, stars, takings |

## What is real

Scooping is wired end to end: clicking a vat adds a layer to the bowl, scores against the rhythm clock (perfect on the beat, good off it), fills the ticket line, and raises the combo multiplier. Serving pays out, advances the queue, and ends the shift when the queue empties. Patience drains live and drives each customer's mood ring. The language toggle mirrors every screen into RTL.

Everything else is cosmetic — no audio, no save, no real economy balance.

## Notes

- Screens compose the design-system primitives off `window.KosharyUstaDesignSystem_f12ad9`; none of them re-implement a component.
- Character portraits are **icon placeholders**. `CustomerCard` takes a `portrait` prop — pass real painted art when it exists.
- `patienceTone()` and `INGREDIENTS` are lowercase exports and so are not on the bundle namespace; `ShiftScreen` repeats the patience thresholds locally with a comment pointing back at the source.- Components that render ink-coloured labels (`IngredientVat`, `LevelNode`) are built for light grounds. That is why the counter is a tiled cream slab and the chapter map is paper — do not float them on the street backdrop.
