# Backdrop Invert Utility

## Introduction

The `backdrop-filter: invert()` utility is a CSS feature that allows you to apply an inversion effect to the backdrop of an element. This effect reverses the colors of the backdrop behind the element, creating a visually distinct appearance. The inversion level can be customized using predefined classes, custom values, or CSS variables.

## Usage

### Class Reference
| Class | Style Applied |
|--------|--------------|
| `backdrop-invert` | `backdrop-filter: invert(100%);` |
| `backdrop-invert-<number>` | `backdrop-filter: invert(<number>%);` |
| `backdrop-invert-(<custom-property>)` | `backdrop-filter: invert(var(<custom-property>));` |
| `backdrop-invert-[<value>]` | `backdrop-filter: invert(<value>);` |

## Examples

### Basic Example
Apply different levels of backdrop inversion to an element:

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-invert-0 ..."></div>
</div>

<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-invert-65 ..."></div>
</div>

<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-invert ..."></div>
</div>
```

### Using a Custom Value
You can set a completely custom inversion value using the `backdrop-invert-[<value>]` syntax:

```html
<div class="backdrop-invert-[.25] ...">
  <!-- Custom inversion value -->
</div>
```

### Using CSS Variables
You can also use a CSS variable for dynamic backdrop inversion:

```html
<div class="backdrop-invert-(--my-backdrop-inversion) ...">
  <!-- Uses a CSS variable -->
</div>
```
This is shorthand for `backdrop-invert-[var(--my-backdrop-inversion)]` and automatically includes the `var()` function.

### Responsive Design
To apply backdrop inversion at specific breakpoints, use responsive variants like `md:backdrop-invert`:

```html
<div class="backdrop-invert-0 md:backdrop-invert ...">
  <!-- No inversion on small screens, inversion on medium and above -->
</div>
```

## Learn More
For additional details on responsive variants, refer to the [variants documentation](#).

