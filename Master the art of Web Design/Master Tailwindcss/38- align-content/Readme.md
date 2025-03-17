# Align Content Utility

## Introduction
The `align-content` utility provides control over how rows are positioned in multi-row flex and grid containers. This utility helps to align content along the cross-axis when there is extra space available. The alignment options include centering, spacing, stretching, and positioning content at different points within the container.

## Available Classes
The following classes can be used to control the `align-content` property in CSS:

| Class              | Styles Applied                 |
|--------------------|--------------------------------|
| `content-normal`  | `align-content: normal;`       |
| `content-center`  | `align-content: center;`       |
| `content-start`   | `align-content: flex-start;`   |
| `content-end`     | `align-content: flex-end;`     |
| `content-between` | `align-content: space-between;`|
| `content-around`  | `align-content: space-around;` |
| `content-evenly`  | `align-content: space-evenly;` |
| `content-baseline`| `align-content: baseline;`     |
| `content-stretch` | `align-content: stretch;`      |

## Examples

### Start
Use `content-start` to align rows at the start of the cross axis:
```html
<div class="grid h-56 grid-cols-3 content-start gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Center
Use `content-center` to center rows along the cross axis:
```html
<div class="grid h-56 grid-cols-3 content-center gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### End
Use `content-end` to align rows at the end of the cross axis:
```html
<div class="grid h-56 grid-cols-3 content-end gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space Between
Use `content-between` to distribute rows with equal space between them:
```html
<div class="grid h-56 grid-cols-3 content-between gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space Around
Use `content-around` to distribute rows with equal space around them:
```html
<div class="grid h-56 grid-cols-3 content-around gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space Evenly
Use `content-evenly` to distribute rows with equal space around and between them:
```html
<div class="grid h-56 grid-cols-3 content-evenly gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Stretch
Use `content-stretch` to allow content items to fill the available space along the cross axis:
```html
<div class="grid h-56 grid-cols-3 content-stretch gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Normal
Use `content-normal` to keep content in its default position:
```html
<div class="grid h-56 grid-cols-3 content-normal gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

## Responsive Design
You can apply responsive alignment using breakpoint variants. For example, to apply `content-start` on small screens and `content-around` on medium screens and above:
```html
<div class="grid content-start md:content-around ...">
  <!-- Content here -->
</div>
```
Learn more about using responsive variants in the official documentation.

## Conclusion
The `align-content` utility provides an easy and effective way to control the alignment of multiple rows in flex and grid containers. By leveraging these classes, you can ensure content is positioned properly within the available space for a clean and structured layout.

