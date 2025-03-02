# Justify-Self Utility

## Introduction
The `justify-self` utility in CSS is used to control how an individual grid item is aligned along its inline axis within a grid container. Unlike `justify-items`, which applies alignment to all items in a grid, `justify-self` allows you to target a specific item for alignment control.

This utility provides several predefined classes to align grid items automatically, to the start, center, end, or to stretch the full width of their grid area.

## Classes and Styles

| Class                 | Styles                |
|----------------------|----------------------|
| `justify-self-auto`   | `justify-self: auto;`   |
| `justify-self-start`  | `justify-self: start;`  |
| `justify-self-end`    | `justify-self: end;`    |
| `justify-self-center` | `justify-self: center;` |
| `justify-self-stretch`| `justify-self: stretch;`|

## Usage Examples

### Auto
Use `justify-self-auto` to align an item based on the grid’s `justify-items` property:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-auto ...">02</div>
  <!-- ... -->
</div>
```

### Start
Align a grid item to the start of its inline axis using `justify-self-start`:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-start ...">02</div>
  <!-- ... -->
</div>
```

### Center
Align a grid item to the center of its inline axis with `justify-self-center`:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
</div>
```

### End
Align a grid item to the end of its inline axis using `justify-self-end`:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-end ...">02</div>
  <!-- ... -->
</div>
```

### Stretch
Stretch a grid item to fill the grid area along its inline axis using `justify-self-stretch`:

```html
<div class="grid justify-items-start ...">
  <!-- ... -->
  <div class="justify-self-stretch ...">02</div>
  <!-- ... -->
</div>
```

## Responsive Design
To make alignment responsive, prefix a `justify-self` utility with a breakpoint variant like `md:` to apply the utility at medium screen sizes and above:

```html
<div class="justify-self-start md:justify-self-end ...">
  <!-- ... -->
</div>
```

## Learn More
For more details on using responsive variants, refer to the [variants documentation](#).

