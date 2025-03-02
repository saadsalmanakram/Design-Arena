# Flex Utilities

## Introduction
The `flex` utility provides a set of classes for controlling how flex items grow and shrink within a flex container. These utilities allow developers to manage the flexibility of elements efficiently, ensuring responsive and adaptable layouts. The `flex` property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`, giving precise control over element behavior in a flex container.

## Class Reference
| Class | Styles |
|---|---|
| `flex-<number>` | `flex: <number>;` |
| `flex-<fraction>` | `flex: calc(<fraction> * 100%);` |
| `flex-auto` | `flex: 1 1 auto;` |
| `flex-initial` | `flex: 0 1 auto;` |
| `flex-none` | `flex: none;` |
| `flex-(<custom-property>)` | `flex: var(<custom-property>);` |
| `flex-[<value>]` | `flex: <value>;` |

## Examples

### Basic Example
Use `flex-<number>` utilities like `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size:
```html
<div class="flex">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-1 ...">02</div>
  <div class="w-32 flex-1 ...">03</div>
</div>
```

### Initial Flexibility
Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size:
```html
<div class="flex">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-initial ...">02</div>
  <div class="w-32 flex-initial ...">03</div>
</div>
```

### Auto Flexing
Use `flex-auto` to allow a flex item to grow and shrink while considering its initial size:
```html
<div class="flex ...">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-auto ...">02</div>
  <div class="w-32 flex-auto ...">03</div>
</div>
```

### No Flexing
Use `flex-none` to prevent a flex item from growing or shrinking:
```html
<div class="flex ...">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-32 flex-none ...">02</div>
  <div class="flex-1 ...">03</div>
</div>
```

### Custom Flex Values
Use the `flex-[<value>]` syntax to set a completely custom flex value:
```html
<div class="flex-[3_1_auto] ...">
  <!-- ... -->
</div>
```

For CSS variables, use the `flex-(<custom-property>)` syntax:
```html
<div class="flex-(--my-flex) ...">
  <!-- ... -->
</div>
```
This is shorthand for `flex-[var(<custom-property>)]`, automatically wrapping the value in `var()`.

## Responsive Design
Prefix a `flex` utility with a breakpoint variant like `md:` to apply it at medium screen sizes and above:
```html
<div class="flex-none md:flex-1 ...">
  <!-- ... -->
</div>
```
For more details on using responsive variants, refer to the variants documentation.

---
This utility simplifies the control of flex properties, allowing developers to create responsive and structured layouts efficiently.

