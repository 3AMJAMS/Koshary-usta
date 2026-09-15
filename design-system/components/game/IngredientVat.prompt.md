**A CSS stand-in.** The shipping game paints every vessel on the canvas with an ink outline, a steel rim highlight and per-grain fills. Use this for static cards and mockups only.

```jsx
<IngredientVat ingredient="ruz" level={78} count={2} active onScoop={scoop} />
<IngredientVat ingredient="taqleya" level={24} steam={false} empty />
```

The vessel follows the ingredient: `vat` for rice, macaroni and lentils, `pot` for chickpeas, `sauce` for the salsa jug, `tray` for the onions. Steel bodies, because the counter is stainless — the only cool-coloured surface in the game. Steam belongs on the boiled things; the onion tray is not hot. The dotted grain overlay is not decoration: without it, food reads as a coloured rectangle.
