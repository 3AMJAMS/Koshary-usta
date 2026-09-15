**A CSS stand-in.** The shipping game paints the bowl and every layer on the canvas. Use this for static cards and mockups only.

```jsx
<KosharyBowl size={150} steam layers={[{key:'ruz',amount:2},{key:'maca'},{key:'ads'},{key:'salsa'},{key:'taqleya'}]} />
```

Layers stack **bottom-up in scoop order**, which is the point — it is how the player audits their own bowl against the slip before handing it over. Aluminium body (the `bowl` upgrade swaps plastic for metal, and the regulars notice). `overfull` is a real fail state: the bowl spills, the streak breaks, and the frame shakes.
