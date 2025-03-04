# Backdrop Filter: Saturate

## Introduction
The `backdrop-filter: saturate()` utility allows you to adjust the saturation of an element's backdrop, making background content appear more or less vibrant. This is particularly useful for achieving visually appealing UI effects, such as enhancing or dulling background images while keeping text and foreground elements readable.

## Usage
You can apply backdrop saturation filters using predefined classes or custom values.

### Class Structure
| Class Name                        | CSS Equivalent                                    |
|-----------------------------------|--------------------------------------------------|
| `backdrop-saturate-<number>`      | `backdrop-filter: saturate(<number>%);`          |
| `backdrop-saturate-(<custom-property>)` | `backdrop-filter: saturate(var(<custom-property>));` |
| `backdrop-saturate-[<value>]`     | `backdrop-filter: saturate(<value>);`            |

## Examples

### Basic Example
Use predefined utilities to control the saturation of an element's backdrop:

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-saturate-50 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-saturate-125 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-saturate-200 ..."></div>
</div>
```

### Using a Custom Value
Apply a completely custom saturation value using square brackets:

```html
<div class="backdrop-saturate-[.25] ...">
  <!-- Content here -->
</div>
```

Alternatively, use a CSS variable for dynamic control:

```html
<div class="backdrop-saturate-(--my-backdrop-saturation) ...">
  <!-- Content here -->
</div>
```

This syntax is a shorthand for `backdrop-saturate-[var(--my-backdrop-saturation)]` and automatically applies the `var()` function.

### Responsive Design
You can apply backdrop saturation conditionally using responsive breakpoints. For example, to set different saturation levels for mobile and medium screen sizes:

```html
<div class="backdrop-saturate-50 md:backdrop-saturate-150 ...">
  <!-- Content here -->
</div>
```

## Further Reading
For more details on backdrop filters and responsive utilities, check the [variants documentation](#).

