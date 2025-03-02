# Min-Width Utilities

## Introduction
The `min-width` utility provides a way to control the minimum width of an element using predefined classes. This ensures that elements do not shrink below a specified width, maintaining a consistent layout and preventing content from becoming unreadable.

This utility is particularly useful when working with flexible layouts, ensuring that elements retain a minimum visual presence even when surrounding content adjusts dynamically.

## Usage
The `min-width` utility allows you to specify the minimum width of an element using different units, including fixed pixel values, percentages, viewport widths, and more. It follows a structured class naming convention for easy implementation.

### Class Naming Conventions
- **Fixed width values:** `min-w-<number>` where `<number>` is a multiple of the spacing scale.
- **Percentage-based values:** `min-w-<fraction>` where `<fraction>` represents a portion of the parent container.
- **Container scale-based values:** `min-w-sm`, `min-w-md`, `min-w-lg`, etc.
- **Viewport-based values:** `min-w-full`, `min-w-screen`, `min-w-dvw`, `min-w-lvw`, `min-w-svw`, etc.
- **Content-based values:** `min-w-min`, `min-w-max`, `min-w-fit`.
- **Custom values:** `min-w-[<value>]` where `<value>` can be any valid CSS length unit.

## Available Classes

### Fixed Width Classes
| Class | Style |
|------------|------------------------------------|
| `min-w-3xs` | `min-width: 16rem (256px);` |
| `min-w-2xs` | `min-width: 18rem (288px);` |
| `min-w-xs` | `min-width: 20rem (320px);` |
| `min-w-sm` | `min-width: 24rem (384px);` |
| `min-w-md` | `min-width: 28rem (448px);` |
| `min-w-lg` | `min-width: 32rem (512px);` |
| `min-w-xl` | `min-width: 36rem (576px);` |
| `min-w-2xl` | `min-width: 42rem (672px);` |
| `min-w-3xl` | `min-width: 48rem (768px);` |
| `min-w-4xl` | `min-width: 56rem (896px);` |
| `min-w-5xl` | `min-width: 64rem (1024px);` |
| `min-w-6xl` | `min-width: 72rem (1152px);` |
| `min-w-7xl` | `min-width: 80rem (1280px);` |

### Relative & Percentage-based Classes
| Class | Style |
|------------|--------------------------|
| `min-w-full` | `min-width: 100%;` |
| `min-w-screen` | `min-width: 100vw;` |
| `min-w-dvw` | `min-width: 100dvw;` |
| `min-w-dvh` | `min-width: 100dvh;` |
| `min-w-lvw` | `min-width: 100lvw;` |
| `min-w-lvh` | `min-width: 100lvh;` |
| `min-w-svw` | `min-width: 100svw;` |
| `min-w-svh` | `min-width: 100svh;` |

### Content-based Classes
| Class | Style |
|------------|----------------------------|
| `min-w-min` | `min-width: min-content;` |
| `min-w-max` | `min-width: max-content;` |
| `min-w-fit` | `min-width: fit-content;` |

### Custom Width Classes
| Class | Style |
|-----------------|----------------------------|
| `min-w-[<value>]` | `min-width: <value>;` |
| `min-w-(<custom-property>)` | `min-width: var(<custom-property>);` |

## Examples

### Basic Example
```html
<div class="w-20 ...">
  <div class="min-w-80 ...">min-w-80</div>
  <div class="min-w-64 ...">min-w-64</div>
  <div class="min-w-48 ...">min-w-48</div>
  <div class="min-w-40 ...">min-w-40</div>
  <div class="min-w-32 ...">min-w-32</div>
  <div class="min-w-24 ...">min-w-24</div>
</div>
```

### Using Percentage-based Values
```html
<div class="flex ...">
  <div class="min-w-3/4 ...">min-w-3/4</div>
  <div class="w-full ...">w-full</div>
</div>
```

### Using Container Scale Values
```html
<div class="w-40 ...">
  <div class="min-w-lg ...">min-w-lg</div>
  <div class="min-w-md ...">min-w-md</div>
  <div class="min-w-sm ...">min-w-sm</div>
  <div class="min-w-xs ...">min-w-xs</div>
  <div class="min-w-2xs ...">min-w-2xs</div>
  <div class="min-w-3xs ...">min-w-3xs</div>
</div>
```

### Using Custom Values
```html
<div class="min-w-[220px] ...">
  <!-- Custom minimum width -->
</div>
```

### Using CSS Variables
```html
<div class="min-w-(--my-min-width) ...">
  <!-- Custom minimum width using CSS variable -->
</div>
```

## Responsive Design
You can apply `min-width` utilities at different breakpoints by prefixing them with a responsive variant like `md:`:

```html
<div class="w-24 min-w-full md:min-w-0 ...">
  <!-- Responsive design -->
</div>
```

## Customizing Your Theme
The `min-w-<number>` utilities are based on the `--spacing` theme variable. You can customize it in your theme settings:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the theme documentation.

---

This utility ensures flexibility and control over element widths, enhancing responsiveness and maintaining visual consistency across different screen sizes.

