# Gap Utilities

## Introduction
The `gap` utility provides a simple and efficient way to control spacing between grid and flexbox items. It allows developers to define both row and column gaps using predefined values, custom properties, or completely custom values. This utility is especially useful in responsive designs where spacing needs to be adjusted dynamically based on screen size.

## Usage
The `gap` utility can be applied to any grid or flex container to manage spacing between child elements.

### Class Variants and Styles
The following class variants allow you to set the `gap`, `column-gap`, and `row-gap` values using predefined numbers, custom properties, or arbitrary values.

| Class | Style |
|--------|------------------------------------------------|
| `gap-<number>` | `gap: calc(var(--spacing) * <value>);` |
| `gap-(<custom-property>)` | `gap: var(<custom-property>);` |
| `gap-[<value>]` | `gap: <value>;` |
| `gap-x-<number>` | `column-gap: calc(var(--spacing) * <value>);` |
| `gap-x-(<custom-property>)` | `column-gap: var(<custom-property>);` |
| `gap-x-[<value>]` | `column-gap: <value>;` |
| `gap-y-<number>` | `row-gap: calc(var(--spacing) * <value>);` |
| `gap-y-(<custom-property>)` | `row-gap: var(<custom-property>);` |
| `gap-y-[<value>]` | `row-gap: <value>;` |

## Examples

### Basic Example
Use `gap-<number>` utilities like `gap-2` and `gap-4` to control the spacing between both rows and columns in grid and flexbox layouts:

```html
<div class="grid grid-cols-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Changing Row and Column Gaps Independently
Use `gap-x-<number>` or `gap-y-<number>` utilities like `gap-x-8` and `gap-y-4` to adjust the gaps between columns and rows independently:

```html
<div class="grid grid-cols-3 gap-x-8 gap-y-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Using a Custom Value
Use utilities like `gap-[<value>]`, `gap-x-[<value>]`, and `gap-y-[<value>]` to define custom gap values:

```html
<div class="gap-[10vw] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can use the `gap-(<custom-property>)` syntax:

```html
<div class="gap-(--my-gap) ...">
  <!-- ... -->
</div>
```
This is a shorthand for `gap-[var(<custom-property>)]` that automatically adds the `var()` function.

### Responsive Design
Prefix `gap`, `column-gap`, and `row-gap` utilities with a breakpoint variant like `md:` to apply the spacing only at specific screen sizes:

```html
<div class="grid gap-4 md:gap-6 ...">
  <!-- ... -->
</div>
```

## Conclusion
The `gap` utility simplifies spacing management in grid and flexbox layouts. By leveraging predefined values, custom properties, and responsive variants, developers can create flexible and maintainable layouts with precise control over spacing.

