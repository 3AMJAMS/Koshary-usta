The dark overlay card that every screen outside live gameplay is built from — title, story beats, prep board, shop, day-end summary.

```jsx
<Panel eyebrow="1969" title="El-Sayeda, the shop">
  <p>Nothing in the paper. Open up and work.</p>
  <PanelRule />
  <PanelHeading>Today's prep</PanelHeading>
</Panel>
```

Sits inside a blurred radial scrim (`--surface-overlay`), max 430px wide, scrolls internally on small phones. Springs in with `ks-card-in`. Use `PanelHeading` for brass sub-headings and `PanelRule` between sections — don't hand-roll either.
