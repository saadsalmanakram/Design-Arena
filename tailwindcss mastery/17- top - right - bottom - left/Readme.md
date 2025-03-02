# Positioning Utilities

## Introduction
Positioning utilities allow precise control over the placement of positioned elements in a layout. These utilities provide classes to define the position of elements using top, right, bottom, and left properties, as well as logical properties like start and end. This ensures flexibility and consistency across different layouts and screen sizes.

With these utilities, you can control the horizontal and vertical placement of elements using predefined values, fractions, pixels, or custom properties. The positioning is determined relative to a parent container with `relative` positioning.

## Utility Classes
The following classes are available for controlling the placement of elements:

### **Basic Classes**

| Class               | Style  |
|--------------------|-------------------------------|
| `inset-<number>` | `inset: calc(var(--spacing) * <number>);` |
| `-inset-<number>` | `inset: calc(var(--spacing) * -<number>);` |
| `inset-<fraction>` | `inset: calc(<fraction> * 100%);` |
| `-inset-<fraction>` | `inset: calc(<fraction> * -100%);` |
| `inset-px` | `inset: 1px;` |
| `-inset-px` | `inset: -1px;` |
| `inset-full` | `inset: 100%;` |
| `-inset-full` | `inset: -100%;` |
| `inset-auto` | `inset: auto;` |
| `inset-(<custom-property>)` | `inset: var(<custom-property>);` |

### **Example Usage**

#### Pin to Top Left Corner
```html
<div class="relative size-32 ...">
  <div class="absolute top-0 left-0 size-16 ...">01</div>
</div>
```

#### Span Top Edge
```html
<div class="relative size-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>
```

#### Pin to Top Right Corner
```html
<div class="relative size-32 ...">
  <div class="absolute top-0 right-0 size-16 ...">03</div>
</div>
```

#### Span Left Edge
```html
<div class="relative size-32 ...">
  <div class="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>
```

#### Fill Entire Parent
```html
<div class="relative size-32 ...">
  <div class="absolute inset-0 ...">05</div>
</div>
```

## Using Negative Values
To apply negative values, prefix the class name with a dash (`-`):
```html
<div class="relative size-32 ...">
  <div class="absolute -top-4 -left-4 size-14 ..."></div>
</div>
```

## Logical Properties
To handle different writing modes (LTR/RTL), use `start-<number>` and `end-<number>`:
```html
<div dir="ltr">
  <div class="relative size-32 ...">
    <div class="absolute start-0 top-0 size-14 ..."></div>
  </div>
</div>
```
For RTL layouts:
```html
<div dir="rtl">
  <div class="relative size-32 ...">
    <div class="absolute start-0 top-0 size-14 ..."></div>
  </div>
</div>
```

## Custom Values
Use custom values with bracket notation:
```html
<div class="inset-[3px] ..."></div>
```
For CSS variables:
```html
<div class="inset-(--my-position) ..."></div>
```

## Responsive Design
Use breakpoints like `md:` to apply styles at specific screen sizes:
```html
<div class="top-4 md:top-6 ..."></div>
```

## Theme Customization
Positioning utilities use the `--spacing` theme variable, which can be customized:
```css
@theme {
  --spacing: 1px;
}
```
For more details, refer to the theme variable documentation.

## Conclusion
These positioning utilities provide a robust way to control element placement with flexibility. Whether using standard values, negative offsets, logical properties, or custom values, these utilities make positioning elements simple and consistent across different screen sizes and layouts.

