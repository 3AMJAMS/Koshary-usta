The label/value stack used for the day-end bill, the goal line and any number list on an overlay card.

```jsx
<StatRows>
  <StatRow label={t('earned')} value="612" tone="pos" />
  <StatRow label={t('tips')} value="148" tone="pos" />
  <StatRow label={t('costs')} value="−96" tone="neg" />
  <StatRow label={t('net')} value="664" total />
</StatRows>
```

Rows sit on an ink ground with 2.5px gaps, so the ink reads as the gridline — don't add borders to the rows themselves. Exactly one `total` row per stack, last. `tone` is for money direction only; don't use it decoratively.
