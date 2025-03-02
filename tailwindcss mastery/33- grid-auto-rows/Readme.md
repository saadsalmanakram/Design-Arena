# Grid Auto Rows Utility

## Introduction
The `grid-auto-rows` utility in Tailwind CSS provides control over the size of implicitly-created grid rows. When defining a CSS grid, you may have more content than explicitly defined rows. The `grid-auto-rows` utility allows you to specify how these extra rows should be sized dynamically.

By using predefined classes or custom values, you can efficiently manage the behavior of additional grid rows without manually specifying their heights in CSS.

## Available Classes

| Class                  | Styles                                  |
|------------------------|----------------------------------------|
| `auto-rows-auto`       | `grid-auto-rows: auto;`               |
| `auto-rows-min`        | `grid-auto-rows: min-content;`        |
| `auto-rows-max`        | `grid-auto-rows: max-content;`        |
| `auto-rows-fr`         | `grid-auto-rows: minmax(0, 1fr);`     |
| `auto-rows-[<value>]`  | `grid-auto-rows: <value>;`            |
| `auto-rows-(<custom-property>)` | `grid-auto-rows: var(<custom-property>);` |

## Examples

### Basic Example
Use utilities like `auto-rows-min` and `auto-rows-max` to control the size of implicitly-created grid rows:

```html
<div class="grid grid-flow-row auto-rows-max">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Using a Custom Value
You can set the size of implicitly-created grid rows with a custom value using `auto-rows-[<value>]`:

```html
<div class="auto-rows-[minmax(0,2fr)] ...">
  <!-- Content here -->
</div>
```

For CSS variables, use the `auto-rows-(<custom-property>)` syntax:

```html
<div class="auto-rows-(--my-auto-rows) ...">
  <!-- Content here -->
</div>
```

This syntax automatically wraps the variable in `var()`, making it a convenient shorthand for `auto-rows-[var(<custom-property>)]`.

### Responsive Design
Prefix `grid-auto-rows` utility with a breakpoint variant like `md:` to apply the utility at medium screen sizes and above:

```html
<div class="grid grid-flow-row auto-rows-max md:auto-rows-min ...">
  <!-- Content here -->
</div>
```

Learn more about using responsive variants in the Tailwind documentation.

## Conclusion
The `grid-auto-rows` utility provides a simple and effective way to manage implicitly-created grid rows in Tailwind CSS. By leveraging predefined classes, custom values, and responsive variants, you can create flexible and responsive grid layouts with minimal effort.

