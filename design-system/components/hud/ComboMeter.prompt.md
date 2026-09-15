The rhythm multiplier — appears under the HUD rail once the player is on a streak, and springs away when the streak breaks.

```jsx
<ComboMeter streak={streak} multiplier={mult} progress={beatLeft} label={t('combo')} />
```

Hot pink `--combo` (#FF7AD9) is reserved for this one component — if pink appears anywhere else the meter stops being findable. It hides itself at streak 0 rather than showing ×1, so the player only ever sees it when it's earning them something. Unlocked by the `music` upgrade (Sout El-Qahira); the beat window is driven by the 104bpm tape.
