# Grid Template Rows

## Introduction
The `grid-template-rows` utility in CSS is a powerful feature that allows you to define the row structure of a grid container. It helps in creating flexible and structured layouts by specifying the number, size, and behavior of grid rows. This utility provides predefined classes for common row configurations while also allowing custom values and responsive adaptations.

## Usage
The `grid-template-rows` utility lets you control the rows of a CSS grid layout using predefined classes, subgrid support, and custom row definitions.

### Classes and Styles
| Class                      | Styles                                             |
|----------------------------|----------------------------------------------------|
| `grid-rows-<number>`       | `grid-template-rows: repeat(<number>, minmax(0, 1fr));` |
| `grid-rows-none`           | `grid-template-rows: none;`                       |
| `grid-rows-subgrid`        | `grid-template-rows: subgrid;`                    |
| `grid-rows-[<value>]`      | `grid-template-rows: <value>;`                    |
| `grid-rows-(<custom-property>)` | `grid-template-rows: var(<custom-property>);`  |

## Examples

### 1. Specifying Grid Rows
Use `grid-rows-<number>` utilities like `grid-rows-2` and `grid-rows-4` to create grids with equally sized rows.

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">
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

### 2. Implementing a Subgrid
Use the `grid-rows-subgrid` utility to inherit the row tracks defined by the parent grid.

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div class="row-span-3 grid grid-rows-subgrid gap-4">
    <div class="row-start-2">06</div>
  </div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>
```

### 3. Using a Custom Value
You can define custom row sizes using the `grid-rows-[<value>]` utility:

```html
<div class="grid-rows-[200px_minmax(900px,1fr)_100px]">
  <!-- Grid content -->
</div>
```

For CSS variables, use the `grid-rows-(<custom-property>)` syntax:

```html
<div class="grid-rows-(--my-grid-rows)">
  <!-- Grid content -->
</div>
```

This is equivalent to `grid-rows-[var(--my-grid-rows)]` but automatically wraps the value in `var()`.

### 4. Responsive Design
Apply different row configurations based on screen size using breakpoint variants:

```html
<div class="grid grid-rows-2 md:grid-rows-6">
  <!-- Grid content -->
</div>
```

## Conclusion
The `grid-template-rows` utility is a flexible and powerful way to define grid row structures in CSS. By leveraging predefined classes, subgrid functionality, custom values, and responsive design techniques, you can build structured and dynamic layouts with ease.

For more details, refer to the official documentation on CSS Grid and utility variants.

