# Translate Utilities

## Introduction
The `translate` utilities provide a simple way to move elements along the x, y, and z axes using CSS transforms. These utilities leverage a spacing scale, percentages, pixels, or custom values to apply translation, making it easy to manipulate positioning for responsive designs and animations.

## Class Reference

### General Translation
| Class | Styles |
|---|---|
| `translate-<number>` | `translate: calc(var(--spacing) * <number>) calc(var(--spacing) * <number>);` |
| `-translate-<number>` | `translate: calc(var(--spacing) * -<number>) calc(var(--spacing) * -<number>);` |
| `translate-<fraction>` | `translate: calc(<fraction> * 100%) calc(<fraction> * 100%);` |
| `-translate-<fraction>` | `translate: calc(<fraction> * -100%) calc(<fraction> * -100%);` |
| `translate-full` | `translate: 100% 100%;` |
| `-translate-full` | `translate: -100% -100%;` |
| `translate-px` | `translate: 1px 1px;` |
| `-translate-px` | `translate: -1px -1px;` |
| `translate-(<custom-property>)` | `translate: var(<custom-property>) var(<custom-property>);` |
| `translate-[<value>]` | `translate: <value> <value>;` |

## Examples

### Using the Spacing Scale
```html
<img class="-translate-6" src="/img/mountains.jpg" />
<img class="translate-2" src="/img/mountains.jpg" />
<img class="translate-8" src="/img/mountains.jpg" />
```

### Using a Percentage
```html
<img class="-translate-1/4" src="/img/mountains.jpg" />
<img class="translate-1/6" src="/img/mountains.jpg" />
<img class="translate-1/2" src="/img/mountains.jpg" />
```

### Translating on the X-Axis
```html
<img class="-translate-x-4" src="/img/mountains.jpg" />
<img class="translate-x-2" src="/img/mountains.jpg" />
<img class="translate-x-1/2" src="/img/mountains.jpg" />
```

### Translating on the Y-Axis
```html
<img class="-translate-y-4" src="/img/mountains.jpg" />
<img class="translate-y-2" src="/img/mountains.jpg" />
<img class="translate-y-1/2" src="/img/mountains.jpg" />
```

### Translating on the Z-Axis
*Note: Requires `transform-3d` applied to the parent element.*
```html
<div class="transform-3d">
  <img class="-translate-z-8 rotate-x-50 rotate-z-45" src="/img/mountains.jpg" />
  <img class="translate-z-2 rotate-x-50 rotate-z-45" src="/img/mountains.jpg" />
  <img class="translate-z-1/2 rotate-x-50 rotate-z-45" src="/img/mountains.jpg" />
</div>
```

### Using a Custom Value
```html
<img class="translate-[3.142rad]" src="/img/mountains.jpg" />
```

### Using a CSS Variable
```html
<img class="translate-(--my-translate)" src="/img/mountains.jpg" />
```

## Responsive Design
Use breakpoint prefixes like `md:` to apply translations at different screen sizes:
```html
<img class="translate-45 md:translate-60" src="/img/mountains.jpg" />
```

For more details, refer to the variants documentation.
