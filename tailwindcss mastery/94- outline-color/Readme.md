# Outline Color Utilities

## Introduction
The `outline-color` utility provides a way to control the color of an element's outline using predefined classes. This utility is useful for styling focus indicators, interactive elements, and other components where an outline is necessary for accessibility and design consistency.

## Available Classes

The following classes can be used to control the outline color:

| Class | Styles |
|--------|--------|
| `outline-inherit` | `outline-color: inherit;` |
| `outline-current` | `outline-color: currentColor;` |
| `outline-transparent` | `outline-color: transparent;` |
| `outline-black` | `outline-color: var(--color-black); /* #000 */` |
| `outline-white` | `outline-color: var(--color-white); /* #fff */` |
| `outline-red-50` | `outline-color: var(--color-red-50); /* oklch(0.971 0.013 17.38) */` |
| `outline-red-100` | `outline-color: var(--color-red-100); /* oklch(0.936 0.032 17.717) */` |
| `outline-red-200` | `outline-color: var(--color-red-200); /* oklch(0.885 0.062 18.334) */` |
| `outline-red-300` | `outline-color: var(--color-red-300); /* oklch(0.808 0.114 19.571) */` |
| `outline-red-400` | `outline-color: var(--color-red-400); /* oklch(0.704 0.191 22.216) */` |

### Show More Colors
Additional colors are available in the full documentation, including shades of blue, green, yellow, purple, and more.

## Examples

### Basic Example
Apply different outline colors using the predefined utility classes:

```html
<button class="outline-2 outline-offset-2 outline-blue-500">Button A</button>
<button class="outline-2 outline-offset-2 outline-cyan-500">Button B</button>
<button class="outline-2 outline-offset-2 outline-pink-500">Button C</button>
```

### Changing Opacity
Use opacity modifiers to control the outline color’s transparency:

```html
<button class="outline-2 outline-blue-500/100">Button A</button>
<button class="outline-2 outline-blue-500/75">Button B</button>
<button class="outline-2 outline-blue-500/50">Button C</button>
```

### Using a Custom Value
Set custom outline colors using hexadecimal values or CSS variables:

```html
<div class="outline-[#243c5a]">Custom Outline</div>
<div class="outline-(--my-color)">Custom Outline with CSS Variable</div>
```

## Responsive Design
Use breakpoint prefixes like `md:` to apply outline colors conditionally based on screen size:

```html
<div class="outline md:outline-blue-400">Responsive Outline</div>
```

## Customizing Your Theme
You can define custom colors in your theme using CSS variables:

```css
@theme {
  --color-regal-blue: #243c5a;
}
```

Now, use the custom color in your markup:

```html
<div class="outline-regal-blue">Custom Theme Outline</div>
```

For further customization, refer to the theme documentation.

---


