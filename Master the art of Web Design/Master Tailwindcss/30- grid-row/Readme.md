# Grid Row Utilities

## Introduction
The `grid-row` utility provides classes to control how elements are sized and placed across grid rows in a CSS grid layout. These utilities allow for defining row spans, start positions, and end positions, enabling precise placement of elements within a grid.

By using these classes, you can control how elements interact with the grid system, ensuring proper alignment and spacing based on your design requirements.

---

## Available Classes

### Row Span
Define how many rows an element should span using `row-span-<number>` utilities:

| Class                      | Styles |
|----------------------------|-------------------------------------|
| `row-span-<number>`        | `grid-row: span <number> / span <number>;` |
| `row-span-full`            | `grid-row: 1 / -1;` |
| `row-span-(<custom-property>)` | `grid-row: span var(<custom-property>) / span var(<custom-property>);` |
| `row-span-[<value>]`       | `grid-row: span <value> / span <value>;` |

### Row Start
Define where an element should start in the grid using `row-start-<number>` utilities:

| Class                          | Styles |
|--------------------------------|--------------------------------|
| `row-start-<number>`           | `grid-row-start: <number>;` |
| `-row-start-<number>`          | `grid-row-start: calc(<number> * -1);` |
| `row-start-auto`               | `grid-row-start: auto;` |
| `row-start-(<custom-property>)` | `grid-row-start: var(<custom-property>);` |
| `row-start-[<value>]`          | `grid-row-start: <value>;` |

### Row End
Define where an element should end in the grid using `row-end-<number>` utilities:

| Class                          | Styles |
|--------------------------------|--------------------------------|
| `row-end-<number>`             | `grid-row-end: <number>;` |
| `-row-end-<number>`            | `grid-row-end: calc(<number> * -1);` |
| `row-end-auto`                 | `grid-row-end: auto;` |
| `row-end-(<custom-property>)`   | `grid-row-end: var(<custom-property>);` |
| `row-end-[<value>]`            | `grid-row-end: <value>;` |

### Generic Row Placement
Additional classes for defining row behavior:

| Class                      | Styles |
|----------------------------|------------------------------|
| `row-auto`                 | `grid-row: auto;` |
| `row-(<custom-property>)`   | `grid-row: var(<custom-property>);` |
| `row-[<value>]`            | `grid-row: <value>;` |

---

## Examples

### Spanning Rows
Use `row-span-<number>` utilities like `row-span-3` and `row-span-4` to make an element span multiple rows:

```html
<div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-3 ...">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="col-span-2 row-span-2 ...">03</div>
</div>
```

### Starting and Ending Rows
Use `row-start-<number>` or `row-end-<number>` utilities like `row-start-2` and `row-end-3` to make an element start or end at a specific grid line:

```html
<div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-2 row-start-2 ...">01</div>
  <div class="row-span-2 row-end-3 ...">02</div>
  <div class="row-start-1 row-end-4 ...">03</div>
</div>
```

### Using Custom Values
Define a completely custom value using `row-[<value>]`, `row-span-[<value>]`, `row-start-[<value>]`, or `row-end-[<value>]`:

```html
<div class="row-[span_16_/_span_16] ...">
  <!-- ... -->
</div>
```

For CSS variables, use the `row-(<custom-property>)` syntax:

```html
<div class="row-(--my-rows) ...">
  <!-- ... -->
</div>
```

This is a shorthand for `row-[var(<custom-property>)]` and automatically applies the `var()` function.

---

## Responsive Design
Grid row utilities can be combined with responsive prefixes like `md:` to apply them conditionally at different screen sizes:

```html
<div class="row-span-3 md:row-span-4 ...">
  <!-- ... -->
</div>
```

For more details on responsive design and variants, refer to the official documentation.

---

## Conclusion
The `grid-row` utilities offer a powerful way to manage row placement in CSS grids. Whether you need precise positioning, spanning multiple rows, or dynamic custom values, these classes provide flexibility for a wide range of layout needs.

