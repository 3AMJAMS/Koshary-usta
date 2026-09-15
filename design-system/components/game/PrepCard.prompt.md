One batch on the morning prep board — the kitchen phase, before the counter opens. Tapping it cooks more.

```jsx
<PrepCard
  title="تقلية" sub={t('low')} swatch="var(--ing-taqleya)"
  quality={82} quantity={24} servings="6 طبق"
  state="empty" onClick={cook} />
```

Laid out two-up in a grid on the prep `Panel`. Two bars, always in this order: **quantity** in brass (how much is left) above **quality** in green (how well it was cooked) — quantity is the one that ends a shift early, so it reads first. `state="empty"` pulses a red ring, which is the only nagging animation in the game; it stops as soon as the player cooks. Quality decays across the day and the critic weights it far harder than speed.
