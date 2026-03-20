# Awesome Carousel

A small, dependency-free React carousel: horizontal scroll with snap, keyboard-focusable track, and accessible prev/next controls.

## Install

```sh
npm install awesome-carousel
```

React **16.8+** is required (`peerDependencies`).

## Usage

Import the component and its stylesheet (the package [`style`](https://nodejs.org/api/packages.html#style) field points at `lib/index.css` for bundlers that read it):

```jsx
import React from "react";
import AwesomeCarousel from "awesome-carousel";
import "awesome-carousel/lib/index.css";

export default function App() {
  return (
    <AwesomeCarousel
      items={["One", "Two", "Three"]}
      cardsHeight="120px"
      cardsWidth="160px"
      boxShadowType="medium"
      cardsRadius="12px"
      itemsGap="1rem"
    />
  );
}
```

### Props

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `items` | `ReactNode[]` | Yes | — | Slides (strings, numbers, or elements). |
| `cardsHeight` | `string` | Yes | — | Height of each card. |
| `cardsWidth` | `string` | Yes | — | Width of each card. |
| `boxShadowType` | `string` | No | `none` | Preset shadow name (see below). |
| `cardsRadius` | `string` | No | `0.75rem` | Border radius of cards. |
| `itemsGap` | `string` | No | `1rem` | Gap between cards. |
| `fontSize` | `string` | No | `1rem` | Font size inside cards. |
| `cardBackgroundColor` | `string` | No | `#fff` | Card background. |

### Theming

Override CSS variables on `.awesome-carousel` (or a parent) to match your UI:

```css
.my-carousel.awesome-carousel {
  --ac-bg: #0f172a;
  --ac-text: #f8fafc;
  --ac-muted: rgb(248 250 252 / 0.65);
  --ac-border: rgb(248 250 252 / 0.12);
  --ac-accent: #38bdf8;
}
```

### Box shadow presets (`boxShadowType`)

`none` (default), `light`, `lightMedium`, `medium`, `mediumStrong`, `darkLight`, `dark`, `darker`, `darkLarge`, `extraDark`, `ultraDark`, `inset`

### Behavior

- Chevron buttons scroll by ~85% of the visible width (minimum ~120px).
- The track is focusable; use keyboard after focusing it where supported.
- `prefers-reduced-motion: reduce` turns off smooth scrolling and short transitions.

## Demo

[StackBlitz demo](https://stackblitz.com/edit/vitejs-vite-wrerhv?file=src%2FApp.jsx&terminal=dev)

## License

ISC
