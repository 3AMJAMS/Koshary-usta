One chapter of the story, listed on the menu — the game runs five of them plus free play, and it is **linear**, so this reports where the player is rather than offering a map to pick from.

```jsx
<ChapterCard year="١٩٦٩" title="El-Sayeda, the shop" venue="shop" days={4} dayReached={2} goal="340 ج" />
<ChapterCard year="١٩٩٩" title="Shubra neon" venue="neon" days={4} state="locked" />
```

The five chapters are 1954 (a cart, 3 days), 1969 (a shop, 4), 1984 (a shop, 4), 1999 (neon, 4) and 2015 (neon, 2). Each unlocks more of the game: chapter 2 adds the kitchen, 3 the till, 4 the counter slang and the family pot. Years are set in Eastern Arabic numerals in the Arabic build and Western in English — the source carries both strings, so pass the right one rather than converting.
