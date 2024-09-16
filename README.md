Here’s a detailed documentation for your React npm package.

---

# Awesome Carousel Component

## Overview

The **Awesome Carousel** is a highly customizable carousel component designed for React applications. It allows you to display an array of items (strings, DOM nodes, or numbers) with custom styles, including shadows, height, width, and radius.

## Installation

To install the **Awesome Carousel** component, use either `npm` or `yarn`:

### Using npm:

```sh
npm install awesome-carousel
```

### Using yarn:

```sh
yarn add awesome-carousel
```

## Usage

### Step 1: Import the Component

In your React application, import the `AwesomeCarousel` component:

```jsx
import React from "react";
import AwesomeCarousel from "awesome-carousel";
import "awesome-carousel/dist/index.css";
```

### Step 2: Using the Component

You can use the carousel by passing an array of items (`string`, `DOM node`, or `number`) to the component. Additionally, you can customize various properties like card height, width, radius, and shadows.

### Step 3: Customization Options

You can customize the carousel by passing various props to the component.

#### Props:

| Prop            | Type            | Required | Default | Description                                    |
| --------------- | --------------- | -------- | ------- | ---------------------------------------------- |
| `items`         | `arrayOf(node)` | Yes      | -       | The array of items to display in the carousel. |
| `cardsHeight`   | `string`        | Yes      | -       | Height of each card in the carousel.           |
| `cardsWidth`    | `string`        | Yes      | -       | Width of each card in the carousel.            |
| `boxShadowType` | `string`        | No       | `none`  | The type of shadow applied to the cards.       |
| `cardsRadius`   | `string`        | No       | `0px`   | The border-radius of the cards.                |
| `itemsGap`      | `string`        | No       | `1rem`  | The gap between carousel items.                |
| `fontSize`      | `string`        | No       | `1rem`  | The font size of the carousel items.           |

### Use Box Shadows of your choice

You can customize the carousel by passing various props to the component.

### Example with Props

`none (defaulf)` | `light` | `lightMedium` | `medium` | `mediumStrong` | `darkLight` | `dark` | `darker` | `darkLarge` | `extraDark` | `ultraDark` | `inset`

#### With String Elements

```jsx
<AwesomeCarousel
  items={["String Item 1", "String Item 2", "String Item 3"]}
  cardsHeight="200px"
  cardsWidth="150px"
  boxShadowType="medium"
  cardsRadius="10px"
  itemsGap="20px"
/>
```

#### With Numeric Elements

```jsx
<AwesomeCarousel
  items={[123, 3.24, 2322]}
  cardsHeight="200px"
  cardsWidth="150px"
  boxShadowType="medium"
  cardsRadius="10px"
  itemsGap="20px"
/>
```

#### With DOM Nodes

```jsx
<AwesomeCarousel
  items={[
    <p>John</p>,
    <p>Doe</p>,
    <p>
      <span>25</span>
    </p>,
  ]}
  cardsHeight="200px"
  cardsWidth="150px"
  boxShadowType="medium"
  cardsRadius="10px"
  itemsGap="20px"
/>
```

## Step 4: Scroll Behavior

The carousel allows scrolling through items by clicking on the chevron buttons on the left and right of the carousel. The scroll position is automatically updated as you navigate through the items.

## Box Shadow Types

The `boxShadowType` prop accepts different values based on predefined shadows:

- `"none"`
- `"small"`
- `"medium"`
- `"large"`
