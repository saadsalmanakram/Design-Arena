# Stroke Utilities

## Introduction
The **Stroke** utilities provide a simple and efficient way to style the stroke color of SVG elements. These classes allow you to quickly apply colors to SVG strokes using predefined color utilities, custom values, and responsive design variants. This is particularly useful for styling SVG icons, illustrations, and UI components dynamically within your project.

## Available Classes
The following utility classes are available for styling the stroke of SVG elements:

| Class | Styles |
|--------|--------|
| `stroke-none` | `stroke: none;` |
| `stroke-inherit` | `stroke: inherit;` |
| `stroke-current` | `stroke: currentColor;` |
| `stroke-transparent` | `stroke: transparent;` |
| `stroke-black` | `stroke: var(--color-black); /* #000 */` |
| `stroke-white` | `stroke: var(--color-white); /* #fff */` |
| `stroke-red-50` | `stroke: var(--color-red-50); /* oklch(0.971 0.013 17.38) */` |
| `stroke-red-100` | `stroke: var(--color-red-100); /* oklch(0.936 0.032 17.717) */` |
| `stroke-red-200` | `stroke: var(--color-red-200); /* oklch(0.885 0.062 18.334) */` |
| `stroke-red-300` | `stroke: var(--color-red-300); /* oklch(0.808 0.114 19.571) */` |
| ... | *(More colors available)* |

## Examples

### Basic Example
Use stroke utility classes like `stroke-indigo-500` and `stroke-lime-600` to change the stroke color of an SVG:

```html
<svg class="stroke-cyan-500 ...">
  <!-- SVG content -->
</svg>
```
This is useful for customizing icon sets like **Heroicons**.

### Using the Current Color
The `stroke-current` utility sets the stroke color to match the current text color:

```html
<!-- Hover over the button to see the stroke color change -->
<button class="bg-white text-pink-600 hover:bg-pink-600 hover:text-white ...">
  <svg class="size-5 stroke-current ..." fill="none">
    <!-- SVG content -->
  </svg>
  Download file
</button>
```

### Using a Custom Value
Use the `stroke-[<value>]` syntax to set a completely custom stroke color:

```html
<svg class="stroke-[#243c5a] ...">
  <!-- SVG content -->
</svg>
```
For CSS variables, use the `stroke-(<custom-property>)` syntax:

```html
<svg class="stroke-(--my-stroke-color) ...">
  <!-- SVG content -->
</svg>
```
This is shorthand for `stroke-[var(<custom-property>)]` and automatically includes the `var()` function.

### Responsive Design
Apply stroke utilities conditionally using responsive breakpoints:

```html
<svg class="stroke-cyan-500 md:stroke-cyan-700 ...">
  <!-- SVG content -->
</svg>
```
Learn more about responsive utilities in the [variants documentation](#).

### Customizing Your Theme
Customize stroke colors in your project using `--color-*` theme variables:

```css
@theme {
  --color-regal-blue: #243c5a;
}
```
Now, you can use `stroke-regal-blue` in your markup:

```html
<svg class="stroke-regal-blue">
  <!-- SVG content -->
</svg>
```
For more details, check out the [theme customization documentation](#).

---
This README provides an overview of how to use the **Stroke** utilities for styling SVG elements efficiently. Use these utilities to enhance your UI and maintain design consistency across your project.

