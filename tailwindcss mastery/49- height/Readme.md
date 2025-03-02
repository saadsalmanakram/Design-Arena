# Height Utilities

## Introduction
The **Height Utilities** component provides a set of utility classes to control the height of elements efficiently. These classes allow developers to set fixed, percentage-based, viewport-related, and content-dependent heights using predefined utility classes. This ensures a flexible and responsive design system for web applications.

---

## Usage
Height utility classes can be applied directly to elements to define their height based on fixed values, percentages, viewport constraints, and custom values.

### Basic Height Utilities
Use `h-<number>` to assign a height value based on the spacing scale:
```html
<div class="h-96">h-96</div>
<div class="h-80">h-80</div>
<div class="h-64">h-64</div>
<div class="h-48">h-48</div>
```

### Percentage-Based Heights
Use `h-full` or `h-<fraction>` utilities to set height relative to the parent element:
```html
<div class="h-full">h-full</div>
<div class="h-3/4">h-3/4</div>
<div class="h-1/2">h-1/2</div>
```

### Viewport-Based Heights
Ensure an element spans the viewport with:
```html
<div class="h-screen">h-screen</div>
<div class="h-dvh">h-dvh</div>
<div class="h-lvh">h-lvh</div>
<div class="h-svh">h-svh</div>
```

### Content-Based Heights
Use `h-min`, `h-max`, or `h-fit` to adjust height based on content size:
```html
<div class="h-min">h-min</div>
<div class="h-max">h-max</div>
<div class="h-fit">h-fit</div>
```

### Setting Both Width and Height
Use `size-<number>` or `size-<fraction>` to set equal width and height:
```html
<div class="size-16">size-16</div>
<div class="size-32">size-32</div>
<div class="size-full">size-full</div>
```

### Custom Heights
Define custom height values using bracket notation:
```html
<div class="h-[32rem]">Custom Height</div>
<div class="h-(--my-height)">CSS Variable Height</div>
```

### Responsive Height
Apply height utilities conditionally based on screen size:
```html
<div class="h-1/2 md:h-full">Responsive Height</div>
```

---

## Customization
The `h-<number>` and `size-<number>` utilities derive from the `--spacing` theme variable. This can be customized in your project’s theme:
```css
@theme {
  --spacing: 1px;
}
```

For more details, refer to the theme variable documentation.

---

## Conclusion
The **Height Utilities** component provides a simple yet powerful approach to managing element heights in a responsive and customizable manner. Whether using predefined classes, percentages, viewport-based values, or custom properties, this utility ensures adaptability across different screen sizes and layout requirements.

