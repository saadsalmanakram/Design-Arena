# Backdrop Filter: Hue Rotate

## Introduction
The `backdrop-filter: hue-rotate()` utility in CSS allows you to adjust the hue of an element's backdrop by rotating the colors in the HSL (hue, saturation, lightness) color space. This is particularly useful for creating visually engaging effects, such as shifting colors in background images, overlay elements, or translucent layers. Tailwind CSS provides a set of utility classes to apply hue-rotation effects with ease.

## Usage
Tailwind CSS offers various utilities to apply `backdrop-filter: hue-rotate()` with predefined values, custom values, negative values, and responsive variants.

### Available Classes

| Class | Styles Applied |
|---|---|
| `backdrop-hue-rotate-<number>` | `backdrop-filter: hue-rotate(<number>deg);` |
| `-backdrop-hue-rotate-<number>` | `backdrop-filter: hue-rotate(calc(<number>deg * -1));` |
| `backdrop-hue-rotate-(<custom-property>)` | `backdrop-filter: hue-rotate(var(<custom-property>));` |
| `backdrop-hue-rotate-[<value>]` | `backdrop-filter: hue-rotate(<value>);` |

### Examples

#### Basic Example
Apply predefined hue rotation values using utility classes like `backdrop-hue-rotate-90` and `backdrop-hue-rotate-180`:

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-hue-rotate-90 ..."></div>
</div>

<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-hue-rotate-180 ..."></div>
</div>

<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-hue-rotate-270 ..."></div>
</div>
```

#### Using Negative Values
You can also apply negative hue rotation using `-backdrop-hue-rotate-<number>`:

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 -backdrop-hue-rotate-15 ..."></div>
</div>

<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 -backdrop-hue-rotate-45 ..."></div>
</div>

<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 -backdrop-hue-rotate-90 ..."></div>
</div>
```

#### Using Custom Values
You can specify custom values using `backdrop-hue-rotate-[<value>]`:

```html
<div class="backdrop-hue-rotate-[3.142rad] ...">
  <!-- Custom hue rotation using radians -->
</div>
```

Or use CSS variables with `backdrop-hue-rotate-(<custom-property>)`:

```html
<div class="backdrop-hue-rotate-(--my-backdrop-hue-rotation) ...">
  <!-- Hue rotation based on a CSS variable -->
</div>
```

This is a shorthand for `backdrop-hue-rotate-[var(<custom-property>)]`, automatically adding the `var()` function.

### Responsive Design
Use responsive variants to apply `hue-rotate` effects at specific breakpoints. For example, apply a rotation only on medium screens (`md:`):

```html
<div class="backdrop-hue-rotate-15 md:backdrop-hue-rotate-0 ...">
  <!-- Hue rotation that resets on medium screens -->
</div>
```

For more details on responsive variants, refer to the [Tailwind CSS Variants Documentation](https://tailwindcss.com/docs/responsive-design).

## Conclusion
The `backdrop-filter: hue-rotate()` utility in Tailwind CSS is a powerful tool for manipulating colors in the backdrop of an element. By using predefined classes, custom values, and responsive variants, you can create dynamic and visually appealing effects effortlessly.

