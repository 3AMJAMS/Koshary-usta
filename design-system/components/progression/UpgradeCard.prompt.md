A row in the shop — "العُدّة" / "Kit & fittings". The source has eighteen, tagged `kitchen`, `counter` or `shop`; group the list by tag.

```jsx
<UpgradeCard
  icon="🍳" title="Tanta Heavy Pan"
  description="Thick copper pan. Heat spreads evenly — the frying window gets wider."
  price="120" state="buy" onBuy={buy} />
```

Names are affectionate knock-offs of real Egyptian shopfronts and appliance stickers (El-Ma'as Blades, Ameriya Gas Works, Zobaa Fan Co., Shubra Neon) — keep that register, and never write a generic "Tier 2 Upgrade". Every description states a visible effect in plain words, never a percentage. Four states: `buy`, `cant` (visible but dimmed, so the player sees what they're saving for), `locked` (grayscaled, chapter-gated), `owned` (green).
