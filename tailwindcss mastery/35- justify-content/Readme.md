# Justify Content Utilities

## Introduction

The `justify-content` utility provides a set of classes for controlling how flex and grid items are positioned along a container's main axis. These utilities enable you to align items to the start, end, center, or distribute them evenly within a flex or grid container.

By using these classes, you can create flexible and responsive layouts effortlessly.

## Available Classes

| Class              | Styles Applied                     |
|-------------------|--------------------------------|
| `justify-start`   | `justify-content: flex-start;`  |
| `justify-end`     | `justify-content: flex-end;`    |
| `justify-center`  | `justify-content: center;`     |
| `justify-between` | `justify-content: space-between;` |
| `justify-around`  | `justify-content: space-around;`  |
| `justify-evenly`  | `justify-content: space-evenly;`  |
| `justify-stretch` | `justify-content: stretch;`  |
| `justify-baseline` | `justify-content: baseline;`  |
| `justify-normal`  | `justify-content: normal;`  |

## Examples

### Start Alignment
Align items to the start of the container's main axis.
```html
<div class="flex justify-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Center Alignment
Align items at the center of the container's main axis.
```html
<div class="flex justify-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### End Alignment
Align items to the end of the container's main axis.
```html
<div class="flex justify-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space Between
Distribute items with equal space between them.
```html
<div class="flex justify-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space Around
Distribute items with equal space around them.
```html
<div class="flex justify-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space Evenly
Distribute items with equal space on all sides, ensuring an even distribution.
```html
<div class="flex justify-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Stretch
Stretch items to fill available space along the main axis.
```html
<div class="flex justify-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Normal
Pack content in its default position without modifying justification.
```html
<div class="flex justify-normal ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Responsive Design
You can apply responsive behavior by prefixing a `justify-content` utility with a breakpoint variant. For example, to justify items at the start on small screens and space them evenly on medium and larger screens:
```html
<div class="flex justify-start md:justify-between ...">
  <!-- Content here -->
</div>
```

For more details on responsive utilities, refer to the [variants documentation](https://tailwindcss.com/docs/responsive-design).

---

This utility is essential for designing modern web layouts efficiently using flexbox and grid in frameworks like Tailwind CSS.

