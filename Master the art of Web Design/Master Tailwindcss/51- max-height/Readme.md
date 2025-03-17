# Max-Height Utilities

## Introduction
The `max-height` utility provides a flexible way to control the maximum height of elements in your layout. By using predefined utility classes, you can easily set maximum height constraints based on fixed values, percentages, viewport dimensions, and custom properties. These utilities help in creating responsive designs, limiting content overflow, and ensuring elements scale properly within a given layout.

## Available Classes
The following classes allow you to set maximum height values:

### Fixed Values
| Class          | Style                                      |
|---------------|-------------------------------------------|
| `max-h-<number>` | `max-height: calc(var(--spacing) * <number>)` |
| `max-h-auto`  | `max-height: auto;`                      |
| `max-h-none`  | `max-height: none;`                      |
| `max-h-px`    | `max-height: 1px;`                       |
| `max-h-full`  | `max-height: 100%;`                      |
| `max-h-screen`| `max-height: 100vh;`                     |

### Viewport-Based Values
| Class          | Style                                      |
|---------------|-------------------------------------------|
| `max-h-dvh`   | `max-height: 100dvh;`                     |
| `max-h-dvw`   | `max-height: 100dvw;`                     |
| `max-h-lvh`   | `max-height: 100lvh;`                     |
| `max-h-lvw`   | `max-height: 100lvw;`                     |
| `max-h-svh`   | `max-height: 100svh;`                     |
| `max-h-svw`   | `max-height: 100svw;`                     |

### Content-Based Values
| Class          | Style                                      |
|---------------|-------------------------------------------|
| `max-h-min`   | `max-height: min-content;`               |
| `max-h-max`   | `max-height: max-content;`               |
| `max-h-fit`   | `max-height: fit-content;`               |

### Custom Values
| Class                 | Style                                  |
|-----------------------|---------------------------------------|
| `max-h-[<value>]`     | `max-height: <value>;`               |
| `max-h-(<custom-property>)` | `max-height: var(<custom-property>);` |

## Examples

### Setting Fixed Maximum Heights
Use `max-h-<number>` utilities to set elements to a fixed maximum height based on the spacing scale:
```html
<div class="h-96 ...">
  <div class="h-full max-h-80 ...">max-h-80</div>
  <div class="h-full max-h-64 ...">max-h-64</div>
  <div class="h-full max-h-48 ...">max-h-48</div>
  <div class="h-full max-h-40 ...">max-h-40</div>
  <div class="h-full max-h-32 ...">max-h-32</div>
  <div class="h-full max-h-24 ...">max-h-24</div>
</div>
```

### Using Percentage-Based Heights
You can use `max-h-full` or `max-h-<fraction>` utilities like `max-h-1/2` to define percentage-based max heights:
```html
<div class="h-96 ...">
  <div class="h-full max-h-9/10 ...">max-h-9/10</div>
  <div class="h-full max-h-3/4 ...">max-h-3/4</div>
  <div class="h-full max-h-1/2 ...">max-h-1/2</div>
  <div class="h-full max-h-1/4 ...">max-h-1/4</div>
  <div class="h-full max-h-full ...">max-h-full</div>
</div>
```

### Using Custom Values
You can define a completely custom max height using bracket notation:
```html
<div class="max-h-[220px] ...">
  <!-- Content here -->
</div>
```
For CSS variables, use the `max-h-(<custom-property>)` syntax:
```html
<div class="max-h-(--my-max-height) ...">
  <!-- Content here -->
</div>
```

## Responsive Design
To apply max-height only at specific breakpoints, use responsive variants like `md:max-h-screen`:
```html
<div class="h-48 max-h-full md:max-h-screen ...">
  <!-- Content here -->
</div>
```

## Customizing Your Theme
The `max-h-<number>` utilities are based on the `--spacing` theme variable, which you can customize:
```css
@theme {
  --spacing: 1px;
}
```
Learn more about customizing spacing in the theme documentation.

## Conclusion
The `max-height` utility provides a wide range of options for controlling element height, supporting both fixed and dynamic values. It is an essential tool for responsive designs, ensuring elements maintain appropriate sizing across different screen sizes and layouts.

