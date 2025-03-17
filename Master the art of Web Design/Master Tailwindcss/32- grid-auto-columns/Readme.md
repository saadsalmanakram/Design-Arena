# Grid Auto Columns

## Introduction
The `grid-auto-columns` utility in CSS controls the size of implicitly-created grid columns. When a grid container generates columns automatically (due to content overflow or implicit grid behavior), these utilities help define their widths.

These classes provide a flexible way to manage column sizing, ensuring consistency across different layouts. This is particularly useful in scenarios where you have dynamic content or need to enforce specific column sizing rules.

## Available Classes

| Class | Styles |
|--------|-----------------------------|
| `auto-cols-auto` | `grid-auto-columns: auto;` |
| `auto-cols-min` | `grid-auto-columns: min-content;` |
| `auto-cols-max` | `grid-auto-columns: max-content;` |
| `auto-cols-fr` | `grid-auto-columns: minmax(0, 1fr);` |
| `auto-cols-(<custom-property>)` | `grid-auto-columns: var(<custom-property>);` |
| `auto-cols-[<value>]` | `grid-auto-columns: <value>;` |

## Examples

### Basic Example
Use `auto-cols-min` and `auto-cols-max` to define the size of implicitly-created grid columns:

```html
<div class="grid auto-cols-max grid-flow-col">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Using a Custom Value
Use the `auto-cols-[<value>]` syntax to apply a custom column size:

```html
<div class="auto-cols-[minmax(0,2fr)]">
  <!-- Content here -->
</div>
```

For CSS variables, you can use `auto-cols-(<custom-property>)`:

```html
<div class="auto-cols-(--my-auto-cols)">
  <!-- Content here -->
</div>
```
This is a shorthand for `auto-cols-[var(<custom-property>)]`, automatically wrapping the property in `var()`.

### Responsive Design
To apply `grid-auto-columns` only at certain breakpoints, prefix it with a responsive variant like `md:`:

```html
<div class="grid grid-flow-col auto-cols-max md:auto-cols-min">
  <!-- Content here -->
</div>
```

This ensures that the grid-auto-columns behavior adapts based on the screen size.

## Conclusion
The `grid-auto-columns` utility is a powerful tool for controlling the sizing of implicit grid columns. By using predefined classes or custom values, you can create dynamic and responsive layouts effortlessly.

