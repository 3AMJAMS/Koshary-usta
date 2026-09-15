The paid ticket on the spike — top inline-start of the stage, one per customer, never merged.

```jsx
<OrderTicket
  no={12} name="Large" who="Orders in the house language" whoIcon={KS_GLYPHS.regular}
  lines={[{key:'ruz',qty:2},{key:'ads',qty:1},{key:'taqleya',qty:2,state:'ex'},{key:'salsa',state:'no'}]}
  total="20" lang="ar" slang />
```

Paper on a dark stage, so it is the most legible thing on screen — which is correct, it is what the player is reading under pressure. Lines use three states: plain, `ex` (extra, brass-brown) and `no` (refused, struck through in red). `slang` switches the line labels to the counter's own words; turn it on from chapter 4, where the source sets `slang:true`. This module also owns `ING`, `slangOf()` and `nameOf()` — import them from here rather than redeclaring ingredient data.
