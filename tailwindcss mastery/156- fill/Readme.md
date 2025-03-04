# Fill Utilities

## Introduction
The **Fill Utilities** provide a set of CSS classes for styling the `fill` property of SVG elements. These utilities allow you to easily set the fill color using predefined color classes, inherit text color, or define custom values. This is especially useful for styling SVG icons and other vector graphics in your web projects.

## Available Classes

| Class | Styles |
| --- | --- |
| `fill-none` | `fill: none;` |
| `fill-inherit` | `fill: inherit;` |
| `fill-current` | `fill: currentColor;` |
| `fill-transparent` | `fill: transparent;` |
| `fill-black` | `fill: var(--color-black); /* #000 */` |
| `fill-white` | `fill: var(--color-white); /* #fff */` |
| `fill-red-50` | `fill: var(--color-red-50); /* oklch(0.971 0.013 17.38) */` |
| `fill-red-100` | `fill: var(--color-red-100); /* oklch(0.936 0.032 17.717) */` |
| `fill-red-200` | `fill: var(--color-red-200); /* oklch(0.885 0.062 18.334) */` |
| `fill-red-300` | `fill: var(--color-red-300); /* oklch(0.808 0.114 19.571) */` |

_For a complete list of colors, refer to the theme documentation._

## Examples

### Basic Example
Use predefined fill color classes like `fill-indigo-500` and `fill-lime-600` to modify the fill of an SVG element:

```html
<svg class="fill-blue-500 ...">
  <!-- SVG content -->
</svg>
```

### Using the Current Text Color
Set the fill color to match the text color using `fill-current`. This is useful when combining SVG elements with text.

```html
<button class="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white ...">
  <svg class="size-5 fill-current ...">
    <!-- SVG content -->
  </svg>
  Check for updates
</button>
```

### Using a Custom Value
Set a completely custom fill color using the `fill-[<value>]` syntax:

```html
<svg class="fill-[#243c5a] ...">
  <!-- SVG content -->
</svg>
```

Use a CSS variable with `fill-(<custom-property>)`:

```html
<svg class="fill-(--my-fill-color) ...">
  <!-- SVG content -->
</svg>
```
This is a shorthand for `fill-[var(--my-fill-color)]` and automatically applies the `var()` function.

### Responsive Design
Apply fill color at specific breakpoints by prefixing it with a responsive variant like `md:`:

```html
<svg class="fill-cyan-500 md:fill-cyan-700 ...">
  <!-- SVG content -->
</svg>
```
_Learn more about responsive variants in the variants documentation._

## Customizing Your Theme
You can define custom colors in your theme configuration by modifying the `--color-*` variables:

```css
@theme {
  --color-regal-blue: #243c5a;
}
```
Now, use the `fill-regal-blue` utility in your markup:

```html
<svg class="fill-regal-blue">
  <!-- SVG content -->
</svg>
```
_Learn more about theme customization in the theme documentation._

---

By using these **Fill Utilities**, you can efficiently manage and customize SVG fill properties to enhance the appearance and accessibility of your web elements.

