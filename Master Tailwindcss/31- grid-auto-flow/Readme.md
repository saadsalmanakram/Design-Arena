# Grid Auto Flow

## Introduction
The `grid-auto-flow` utility in CSS determines how elements are automatically placed in a grid layout. By default, grid items are placed in rows, but this behavior can be modified using `grid-auto-flow` classes to arrange items in columns, dense mode, or a combination of both. These utilities provide greater control over the placement of elements in a flexible and responsive grid system.

## Classes and Styles
The following classes can be used to control the flow of elements within a grid:

| Class                | Styles                        |
|----------------------|-----------------------------|
| `grid-flow-row`      | `grid-auto-flow: row;`      |
| `grid-flow-col`      | `grid-auto-flow: column;`   |
| `grid-flow-dense`    | `grid-auto-flow: dense;`    |
| `grid-flow-row-dense` | `grid-auto-flow: row dense;` |
| `grid-flow-col-dense` | `grid-auto-flow: column dense;` |

## Examples

### Basic Example
Use utilities like `grid-flow-col` and `grid-flow-row-dense` to control how the auto-placement algorithm works for a grid layout:

```html
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Responsive Design
You can prefix a `grid-auto-flow` utility with a breakpoint variant (e.g., `md:`) to apply the utility only at specific screen sizes. For example, the following setup applies `grid-flow-col` by default but switches to `grid-flow-row` at medium screen sizes (`md:`) and above:

```html
<div class="grid grid-flow-col md:grid-flow-row ...">
  <!-- Grid items here -->
</div>
```

For more details on using responsive variants, refer to the [variants documentation](https://tailwindcss.com/docs/grid-auto-flow).

