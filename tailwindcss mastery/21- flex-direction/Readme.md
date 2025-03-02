# Flex Direction Utilities

## Introduction
The `flex-direction` utility in Tailwind CSS allows you to control the direction of flex items inside a flex container. This is useful for structuring layouts in both row-based and column-based designs. With these utilities, you can easily adjust the alignment of items to follow a horizontal or vertical flow, including reverse orders.

## Available Classes
| Class | Style Applied |
| --- | --- |
| `flex-row` | `flex-direction: row;` |
| `flex-row-reverse` | `flex-direction: row-reverse;` |
| `flex-col` | `flex-direction: column;` |
| `flex-col-reverse` | `flex-direction: column-reverse;` |

## Usage Examples

### Row Layout
Use `flex-row` to position flex items horizontally in the same direction as text:

```html
<div class="flex flex-row">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Row Reversed
Use `flex-row-reverse` to position flex items horizontally in the opposite direction:

```html
<div class="flex flex-row-reverse">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column Layout
Use `flex-col` to position flex items vertically:

```html
<div class="flex flex-col">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column Reversed
Use `flex-col-reverse` to position flex items vertically in the opposite direction:

```html
<div class="flex flex-col-reverse">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Responsive Design
You can apply `flex-direction` utilities responsively using Tailwind's breakpoint prefixes. For example, to set a column layout on smaller screens and switch to a row layout on medium screens and above:

```html
<div class="flex flex-col md:flex-row">
  <!-- Content here -->
</div>
```

For more details on using responsive variants, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/flex-direction).

