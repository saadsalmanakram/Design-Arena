# Order Utilities

## Introduction
The `order` utilities in CSS provide control over the visual arrangement of flex and grid items. These utilities allow developers to modify the rendering sequence of elements without altering the document structure. This is particularly useful when working with responsive designs, dynamic layouts, or reordering elements for better usability.

The `order` property defines the order of an item within its parent container, with lower values appearing first. These utilities support explicit numeric values, negative values, predefined keywords (`first`, `last`, `none`), custom values using CSS variables, and responsive ordering.

## Class Reference
The following classes can be used to control the `order` property:

| Class                 | Styles Applied                   |
|-----------------------|---------------------------------|
| `order-<number>`      | `order: <number>;`             |
| `-order-<number>`     | `order: calc(<number> * -1);`  |
| `order-first`         | `order: calc(-infinity);`      |
| `order-last`          | `order: calc(infinity);`       |
| `order-none`          | `order: 0;`                    |
| `order-(<custom-property>)` | `order: var(<custom-property>);` |
| `order-[<value>]`     | `order: <value>;`              |

## Usage Examples

### Explicitly Setting a Sort Order
Use `order-<number>` utilities like `order-1`, `order-3`, etc., to reorder flex and grid items within their container:

```html
<div class="flex justify-between ...">
  <div class="order-3 ...">01</div>
  <div class="order-1 ...">02</div>
  <div class="order-2 ...">03</div>
</div>
```

### Ordering Items First or Last
Use the `order-first` and `order-last` utilities to move elements to the beginning or end of the container:

```html
<div class="flex justify-between ...">
  <div class="order-last ...">01</div>
  <div class="...">02</div>
  <div class="order-first ...">03</div>
</div>
```

### Using Negative Values
Negative values can be applied by prefixing the class name with a dash (`-`).

```html
<div class="-order-1">
  <!-- ... -->
</div>
```

### Using a Custom Value
Set a completely custom order value using `order-[<value>]`:

```html
<div class="order-[min(var(--total-items),10)] ...">
  <!-- ... -->
</div>
```

For CSS variables, use the `order-(<custom-property>)` syntax:

```html
<div class="order-(--my-order) ...">
  <!-- ... -->
</div>
```

This is equivalent to `order-[var(--my-order)]` but automatically includes the `var()` function.

### Responsive Design
Apply the order utilities at different breakpoints by prefixing them with responsive variants:

```html
<div class="order-first md:order-last ...">
  <!-- ... -->
</div>
```

## Additional Resources
For more details on responsive variants, refer to the [variants documentation](#).

