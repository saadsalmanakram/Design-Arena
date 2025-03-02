# Justify Items

## Introduction

The `justify-items` utility in Tailwind CSS controls how grid items are aligned along their inline axis. This is useful for defining how items within a CSS Grid container align in their respective grid cells. Tailwind provides multiple classes for `justify-items`, allowing for flexible alignment of grid items within a layout.

## Available Classes

| Class                     | Styles Applied          |
|---------------------------|-------------------------|
| `justify-items-start`     | `justify-items: start;` |
| `justify-items-end`       | `justify-items: end;`   |
| `justify-items-center`    | `justify-items: center;`|
| `justify-items-stretch`   | `justify-items: stretch;`|
| `justify-items-normal`    | `justify-items: normal;`|

## Examples

### Start
Use `justify-items-start` to align grid items to the start of their inline axis:

```html
<div class="grid justify-items-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### End
Use `justify-items-end` to align grid items to the end of their inline axis:

```html
<div class="grid justify-items-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Center
Use `justify-items-center` to align grid items to the center of their inline axis:

```html
<div class="grid justify-items-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Stretch
Use `justify-items-stretch` to stretch items along their inline axis:

```html
<div class="grid justify-items-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

## Responsive Design
To apply `justify-items` classes at specific breakpoints, use the corresponding prefix. For example, to apply `justify-items-start` on smaller screens and `justify-items-center` on medium screens and above:

```html
<div class="grid justify-items-start md:justify-items-center ...">
  <!-- Content -->
</div>
```

For more details on responsive variants, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/grid-justify-items).
