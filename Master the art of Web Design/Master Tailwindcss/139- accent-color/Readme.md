# Accent Color Utility

## Introduction
The **Accent Color Utility** provides a set of CSS utilities to control the accent color of form controls like checkboxes and radio buttons. These utilities allow developers to customize the accent color, adjust its opacity, use custom values, and apply styles conditionally based on different states like hover and responsive breakpoints.

## Available Classes
The following classes can be used to set the `accent-color` of form controls:

### Basic Accent Color Utilities
| Class               | Styles                                  |
|---------------------|----------------------------------------|
| `accent-inherit`   | `accent-color: inherit;`              |
| `accent-current`   | `accent-color: currentColor;`         |
| `accent-transparent` | `accent-color: transparent;`        |
| `accent-black`     | `accent-color: var(--color-black);`   |
| `accent-white`     | `accent-color: var(--color-white);`   |

### Color Variants
These classes allow you to set accent colors based on predefined color palettes:

| Class               | Styles  |
|---------------------|---------|
| `accent-red-50`    | `accent-color: var(--color-red-50);`  |
| `accent-red-100`   | `accent-color: var(--color-red-100);` |
| `accent-red-200`   | `accent-color: var(--color-red-200);` |
| `accent-red-300`   | `accent-color: var(--color-red-300);` |
| `accent-red-400`   | `accent-color: var(--color-red-400);` |

## Usage Examples

### Setting the Accent Color
You can use predefined classes to change the accent color of form elements:

```html
<label>
  <input type="checkbox" checked />
  Browser default
</label>
<label>
  <input class="accent-pink-500" type="checkbox" checked />
  Customized
</label>
```

### Changing Opacity
You can control the opacity of the accent color using opacity modifiers:

```html
<input class="accent-purple-500/25" type="checkbox" checked />
<input class="accent-purple-500/75" type="checkbox" checked />
```
**Note:** Accent color opacity control is currently only supported in Firefox.

### Using a Custom Value
Use a custom HEX value or CSS variable:

```html
<input class="accent-[#50d71e]" type="checkbox" />
<input class="accent-(--my-accent-color)" type="checkbox" />
```

### Applying Styles on Hover
Change the accent color when hovering over the element:

```html
<input class="accent-black hover:accent-pink-500" type="checkbox" />
```

### Responsive Design
Apply different accent colors based on screen sizes:

```html
<input class="accent-black md:accent-pink-500" type="checkbox" />
```

### Customizing Theme Colors
Define custom colors in your theme:

```css
@theme {
  --color-regal-blue: #243c5a;
}
```
Use the custom color in your components:

```html
<input class="accent-regal-blue" type="checkbox" />
```

## Conclusion
The **Accent Color Utility** provides a flexible way to customize form controls by overriding the browser’s default styles. With built-in support for color palettes, opacity control, custom values, and responsive breakpoints, it allows for enhanced UI styling while maintaining accessibility and consistency across different devices.

