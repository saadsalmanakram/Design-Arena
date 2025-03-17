# Place Items Utility

## Introduction
The `place-items` utility in Tailwind CSS is used to control how grid items are justified and aligned at the same time within their respective grid areas. This utility provides a shorthand for setting both `align-items` and `justify-items` properties simultaneously, allowing for precise control over item placement in grid layouts.

## Available Classes

| Class                 | Styles                |
|---------------------- |----------------------|
| `place-items-start`   | `place-items: start;` |
| `place-items-end`     | `place-items: end;`   |
| `place-items-center`  | `place-items: center;`|
| `place-items-baseline`| `place-items: baseline;`|
| `place-items-stretch` | `place-items: stretch;` |

## Usage Examples

### Start
Use `place-items-start` to align items to the start of their grid areas on both axes.

```html
<div class="grid grid-cols-3 place-items-start gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### End
Use `place-items-end` to align items to the end of their grid areas on both axes.

```html
<div class="grid h-56 grid-cols-3 place-items-end gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Center
Use `place-items-center` to align items to the center of their grid areas on both axes.

```html
<div class="grid h-56 grid-cols-3 place-items-center gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Stretch
Use `place-items-stretch` to stretch items across their grid areas on both axes.

```html
<div class="grid h-56 grid-cols-3 place-items-stretch gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

## Responsive Design
To apply `place-items` utilities responsively, prefix the class with a breakpoint variant such as `md:` to change the placement at different screen sizes.

```html
<div class="grid place-items-start md:place-items-center ...">
  <!-- Content -->
</div>
```

For more details, refer to the Tailwind CSS [variants documentation](https://tailwindcss.com/docs/responsive-design).

