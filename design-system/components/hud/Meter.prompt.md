The bar used on overlay cards — reputation on the day-end card, and quality/quantity on each prep batch.

```jsx
<Meter value={rep} color="var(--ward)" />
<Meter value={batch.qual} color="var(--good)" />
```

Springs to its new width (`--ease-spring-meter`) because it reports a result. Use `PatienceMeter` instead for anything counting down — a timer must move linearly or it reads as lag.
