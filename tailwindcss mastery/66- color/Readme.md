# Color Utilities

## Introduction
The **Color Utilities** module provides a set of predefined classes for controlling the text color of an element. These classes allow you to quickly apply color styles to text without writing custom CSS. The colors are defined using CSS variables and support various shades of different colors, making it easy to customize and maintain consistent styling in your project.

## Usage
To apply a color to an element, simply use one of the predefined classes. For example:

```html
<p class="text-red-500">This is a red text.</p>
<p class="text-green-700">This is a green text.</p>
<p class="text-blue-300">This is a blue text.</p>
```

## Available Classes

Below are the available text color classes along with their corresponding styles:

### General Colors
| Class | Styles |
|---|---|
| `text-inherit` | `color: inherit;` |
| `text-current` | `color: currentColor;` |
| `text-transparent` | `color: transparent;` |
| `text-black` | `color: var(--color-black); /* #000 */` |
| `text-white` | `color: var(--color-white); /* #fff */` |

### Red Shades
| Class | Styles |
|---|---|
| `text-red-50` | `color: var(--color-red-50); /* oklch(0.971 0.013 17.38) */` |
| `text-red-100` | `color: var(--color-red-100); /* oklch(0.936 0.032 17.717) */` |
| `text-red-200` | `color: var(--color-red-200); /* oklch(0.885 0.062 18.334) */` |
| `text-red-300` | `color: var(--color-red-300); /* oklch(0.808 0.114 19.571) */` |
| `text-red-400` | `color: var(--color-red-400); /* oklch(0.704 0.191 22.216) */` |
| `text-red-500` | `color: var(--color-red-500); /* oklch(0.637 0.237 25.331) */` |
| `text-red-600` | `color: var(--color-red-600); /* oklch(0.577 0.245 27.325) */` |
| `text-red-700` | `color: var(--color-red-700); /* oklch(0.505 0.213 27.518) */` |
| `text-red-800` | `color: var(--color-red-800); /* oklch(0.444 0.177 26.899) */` |
| `text-red-900` | `color: var(--color-red-900); /* oklch(0.396 0.141 25.723) */` |
| `text-red-950` | `color: var(--color-red-950); /* oklch(0.258 0.092 26.042) */` |

### Orange Shades
| Class | Styles |
|---|---|
| `text-orange-50` | `color: var(--color-orange-50); /* oklch(0.98 0.016 73.684) */` |
| `text-orange-100` | `color: var(--color-orange-100); /* oklch(0.954 0.038 75.164) */` |
| `text-orange-200` | `color: var(--color-orange-200); /* oklch(0.901 0.076 70.697) */` |
| `text-orange-300` | `color: var(--color-orange-300); /* oklch(0.837 0.128 66.29) */` |
| `text-orange-400` | `color: var(--color-orange-400); /* oklch(0.75 0.183 55.934) */` |
| `text-orange-500` | `color: var(--color-orange-500); /* oklch(0.705 0.213 47.604) */` |
| `text-orange-600` | `color: var(--color-orange-600); /* oklch(0.646 0.222 41.116) */` |
| `text-orange-700` | `color: var(--color-orange-700); /* oklch(0.553 0.195 38.402) */` |
| `text-orange-800` | `color: var(--color-orange-800); /* oklch(0.47 0.157 37.304) */` |
| `text-orange-900` | `color: var(--color-orange-900); /* oklch(0.408 0.123 38.172) */` |
| `text-orange-950` | `color: var(--color-orange-950); /* oklch(0.266 0.079 36.259) */` |

### Additional Colors
Additional color shades, such as **amber, yellow, lime, green, blue, indigo, violet, and gray**, are available. Follow the same naming convention (`text-{color}-{shade}`) to apply them.

## Customization
You can customize the color palette by overriding the CSS variables in your styles:

```css
:root {
  --color-red-500: #ff0000;
  --color-blue-500: #0000ff;
}
```

This will change the default red and blue text colors to your custom values.

## Conclusion
The **Color Utilities** provide an easy-to-use system for styling text with predefined colors. Whether you need a simple black-and-white scheme or a full spectrum of colors, these classes help maintain a consistent and scalable design system.

