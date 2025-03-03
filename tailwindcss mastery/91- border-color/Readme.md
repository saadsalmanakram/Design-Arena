# Border Color Utilities

## Introduction
The `border-color` utility provides a set of predefined classes for controlling the color of an element's borders in a simple and efficient way. This allows developers to apply consistent and responsive border styling using a flexible class-based approach.

## Available Classes
The following classes can be used to modify the border color:

| Class | Styles |
|--------|---------------------------|
| `border-inherit` | `border-color: inherit;` |
| `border-current` | `border-color: currentColor;` |
| `border-transparent` | `border-color: transparent;` |
| `border-black` | `border-color: var(--color-black); /* #000 */` |
| `border-white` | `border-color: var(--color-white); /* #fff */` |
| `border-red-50` | `border-color: var(--color-red-50); /* oklch(0.971 0.013 17.38) */` |
| `border-red-100` | `border-color: var(--color-red-100); /* oklch(0.936 0.032 17.717) */` |
| `border-red-200` | `border-color: var(--color-red-200); /* oklch(0.885 0.062 18.334) */` |
| `border-red-300` | `border-color: var(--color-red-300); /* oklch(0.808 0.114 19.571) */` |
| `border-red-400` | `border-color: var(--color-red-400); /* oklch(0.704 0.191 22.216) */` |

_For a full list of supported colors, refer to your project's theme configuration._

---

## Usage Examples

### Basic Example
You can apply different border colors to elements using utility classes:

```html
<div class="border-4 border-indigo-500 ..."></div>
<div class="border-4 border-purple-500 ..."></div>
<div class="border-4 border-sky-500 ..."></div>
```

### Changing Opacity
You can control the opacity of a border color using modifiers:

```html
<div class="border-4 border-indigo-500/100 ..."></div>
<div class="border-4 border-indigo-500/75 ..."></div>
<div class="border-4 border-indigo-500/50 ..."></div>
```

### Individual Sides
Apply border colors to specific sides using classes:

```html
<div class="border-4 border-indigo-200 border-t-indigo-500 ..."></div>
<div class="border-4 border-indigo-200 border-r-indigo-500 ..."></div>
<div class="border-4 border-indigo-200 border-b-indigo-500 ..."></div>
<div class="border-4 border-indigo-200 border-l-indigo-500 ..."></div>
```

### Horizontal and Vertical Sides
Set border colors on two sides at once:

```html
<div class="border-4 border-indigo-200 border-x-indigo-500 ..."></div>
<div class="border-4 border-indigo-200 border-y-indigo-500 ..."></div>
```

### Using Logical Properties
Control border color dynamically based on text direction:

```html
<div dir="ltr">
  <div class="border-s-indigo-500 ..."></div>
</div>
<div dir="rtl">
  <div class="border-s-indigo-500 ..."></div>
</div>
```

### Divider Between Children
You can control border color between child elements using `divide-*` utilities:

```html
<div class="grid grid-cols-3 divide-x-4 divide-indigo-500">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Using Custom Values
Define a completely custom border color:

```html
<div class="border-[#243c5a] ..."></div>
```
Or use a CSS variable:

```html
<div class="border-(--my-border) ..."></div>
```

### Applying on Focus
Apply a border color only when an element is focused:

```html
<input class="border-2 border-gray-700 focus:border-pink-600 ..." />
```

### Responsive Design
Modify border colors based on screen size:

```html
<div class="border-blue-500 md:border-green-500 ..."></div>
```

### Customizing Your Theme
You can define custom colors in your theme configuration:

```css
@theme {
  --color-regal-blue: #243c5a;
}
```
Now you can use:

```html
<div class="border-regal-blue"></div>
```

## Conclusion
The `border-color` utilities offer an easy and flexible way to manage border colors in your project. By leveraging predefined colors, responsive variants, and custom values, you can create visually appealing designs with minimal effort.

