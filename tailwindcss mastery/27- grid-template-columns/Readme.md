# Grid Template Columns

## Introduction
The `grid-template-columns` utility in CSS provides a way to define the column structure of a grid layout. Tailwind CSS simplifies this with utility classes that allow you to quickly specify how many columns a grid should have, whether to use predefined values, subgrid, or even custom properties.

## Usage
The `grid-template-columns` utility lets you define the number of columns in a grid layout using the following classes:

### Classes and Styles
| Class | Styles |
|--------|----------------------------------------------|
| `grid-cols-<number>` | `grid-template-columns: repeat(<number>, minmax(0, 1fr));` |
| `grid-cols-none` | `grid-template-columns: none;` |
| `grid-cols-subgrid` | `grid-template-columns: subgrid;` |
| `grid-cols-[<value>]` | `grid-template-columns: <value>;` |
| `grid-cols-(<custom-property>)` | `grid-template-columns: var(<custom-property>);` |

## Examples

### Specifying the Grid Columns
Use `grid-cols-<number>` utilities like `grid-cols-2` and `grid-cols-4` to create grids with an equal number of columns:

```html
<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
</div>
```

### Implementing a Subgrid
Use the `grid-cols-subgrid` utility to adopt the column tracks defined by the parent grid:

```html
<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div class="col-span-3 grid grid-cols-subgrid gap-4">
    <div class="col-start-2">06</div>
  </div>
</div>
```

### Using a Custom Value
Use `grid-cols-[<value>]` syntax to define custom column sizes:

```html
<div class="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
  <!-- Custom grid columns -->
</div>
```

For CSS variables, use the `grid-cols-(<custom-property>)` syntax:

```html
<div class="grid grid-cols-(--my-grid-cols)">
  <!-- Custom grid using CSS variables -->
</div>
```
This is shorthand for `grid-cols-[var(<custom-property>)]`.

### Responsive Design
Prefix `grid-template-columns` utility with a breakpoint variant like `md:` to apply the utility at different screen sizes:

```html
<div class="grid grid-cols-1 md:grid-cols-6">
  <!-- Responsive grid layout -->
</div>
```

For more details on breakpoints and responsive variants, refer to the Tailwind CSS documentation.

---

## Conclusion
The `grid-template-columns` utility in Tailwind CSS provides a flexible way to define and control grid columns with ease. Whether you're using predefined classes, subgrid, custom values, or responsive layouts, these utilities allow you to build efficient and adaptable grid-based designs quickly.

