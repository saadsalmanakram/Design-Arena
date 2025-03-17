# Backface Visibility

## Introduction
The `backface-visibility` utility controls whether an element's backface is visible when it is rotated in 3D space. This is particularly useful when working with 3D transforms, such as rotating elements like cubes or cards, to determine whether the back side should be visible or hidden.

## Classes and Styles
The following utility classes allow you to control the visibility of an element's backface:

| Class              | Styles                           |
|-------------------|--------------------------------|
| `backface-hidden` | `backface-visibility: hidden;` |
| `backface-visible` | `backface-visibility: visible;` |

## Examples

### Basic Example
Use the `backface-visible` utility to ensure the backface of an element remains visible even when it is rotated. Conversely, use `backface-hidden` to hide the backface.

```html
<div class="size-20 ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-hidden ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-hidden ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-hidden ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-hidden ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-hidden ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-hidden ...">6</div>
</div>

<div class="size-20 ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-visible ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-visible ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-visible ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-visible ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-visible ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-visible ...">6</div>
</div>
```

### Responsive Design
You can apply `backface-visibility` utilities conditionally using responsive breakpoints. For example, use `md:backface-hidden` to hide the backface only on medium-sized screens and above:

```html
<div class="backface-visible md:backface-hidden ...">
  <!-- Content here -->
</div>
```

For more information about responsive utilities, check the [variants documentation](https://tailwindcss.com/docs/responsive-design).

## Conclusion
The `backface-visibility` utility helps control the rendering of an element's backface, which is essential when working with 3D transformations. Using `backface-hidden`, you can prevent an element's back from being seen when rotated, while `backface-visible` ensures the backface remains visible.

