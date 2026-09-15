The active customer's patience, pinned to the top inline-end corner of the stage — 74×11px, one per screen.

```jsx
<PatienceMeter value={patience} />
```

Green above 60, amber 60–30, red below 30 — thresholds are fixed across the whole game, and `patienceColor()` is exported so a face or a slip rim can never disagree with the bar. The fill moves **linearly**; the colour cross-fades over 350ms. Below 22 it pulses. Archetypes drain at different rates (office 0.62×, tourist 1.45×) — that's the caller's job, not the meter's.
