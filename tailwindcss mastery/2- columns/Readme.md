# Columns Utility

## Introduction
The `columns` utility provides control over the number of columns within an element. It allows developers to define column layouts either by specifying a fixed number of columns or setting a preferred column width. The column count dynamically adjusts based on the available space, making it an effective tool for responsive design.

## Usage
### Class and Styles
| Class | Styles |
|--------|--------|
| `columns-<number>` | `columns: <number>;` |
| `columns-3xs` | `columns: var(--container-3xs); /* 16rem (256px) */` |
| `columns-2xs` | `columns: var(--container-2xs); /* 18rem (288px) */` |
| `columns-xs` | `columns: var(--container-xs); /* 20rem (320px) */` |
| `columns-sm` | `columns: var(--container-sm); /* 24rem (384px) */` |
| `columns-md` | `columns: var(--container-md); /* 28rem (448px) */` |
| `columns-lg` | `columns: var(--container-lg); /* 32rem (512px) */` |
| `columns-xl` | `columns: var(--container-xl); /* 36rem (576px) */` |
| `columns-2xl` | `columns: var(--container-2xl); /* 42rem (672px) */` |
| `columns-auto` | `columns: auto;` |
| `columns-(<custom-property>)` | `columns: var(<custom-property>);` |
| `columns-[<value>]` | `columns: <value>;` |

## Examples

### Setting by Number
Use `columns-<number>` utilities to specify the number of columns:
```html
<div class="columns-3 ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
</div>
```

### Setting by Width
Use utilities like `columns-xs` and `columns-sm` to define ideal column widths:
```html
<div class="columns-3xs ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
</div>
```

### Setting Column Gap
Specify the gap between columns using `gap-<width>` utilities:
```html
<div class="columns-3 gap-8 ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
</div>
```

### Using a Custom Value
Define a custom column width using the `columns-[<value>]` syntax:
```html
<div class="columns-[30vw] ...">
  <!-- Content -->
</div>
```
For CSS variables, use the `columns-(<custom-property>)` syntax:
```html
<div class="columns-(--my-columns) ...">
  <!-- Content -->
</div>
```
This is a shorthand for `columns-[var(<custom-property>)]`, automatically adding the `var()` function.

### Responsive Design
Prefix a `columns` utility with a breakpoint variant (e.g., `sm:`) to apply it at specific screen sizes:
```html
<div class="columns-2 gap-4 sm:columns-3 sm:gap-8 ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
</div>
```

## Customization
Use the `--container-*` theme variables to modify column utilities:
```css
@theme {
  --container-4xs: 14rem;
}
```
Now, `columns-4xs` can be used in your project:
```html
<div class="columns-4xs">
  <!-- Content -->
</div>
```

For more details, refer to the theme documentation.

