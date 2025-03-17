# Clear Utility Classes

## Overview
Utilities for controlling the wrapping of content around an element.

## Class Reference

| Class        | Styles                  |
|-------------|-------------------------|
| `.clear-left`  | `clear: left;`           |
| `.clear-right` | `clear: right;`          |
| `.clear-both`  | `clear: both;`           |
| `.clear-start` | `clear: inline-start;`   |
| `.clear-end`   | `clear: inline-end;`     |
| `.clear-none`  | `clear: none;`           |

## Examples

### Clearing Left
Use the `.clear-left` utility to position an element below any preceding left-floated elements.

```html
<article>
  <img class="float-left" src="/img/snow-mountains.jpg" />
  <img class="float-right" src="/img/green-mountains.jpg" />
  <p class="clear-left">Maybe we can live without libraries...</p>
</article>
```

### Clearing Right
Use the `.clear-right` utility to position an element below any preceding right-floated elements.

```html
<article>
  <img class="float-left" src="/img/green-mountains.jpg" />
  <img class="float-right" src="/img/snow-mountains.jpg" />
  <p class="clear-right">Maybe we can live without libraries...</p>
</article>
```

### Clearing Both
Use the `.clear-both` utility to position an element below all preceding floated elements.

```html
<article>
  <img class="float-left" src="/img/snow-mountains.jpg" />
  <img class="float-right" src="/img/green-mountains.jpg" />
  <p class="clear-both">Maybe we can live without libraries...</p>
</article>
```

### Using Logical Properties
Use the `.clear-start` and `.clear-end` utilities, which adapt based on text direction (LTR/RTL).

```html
<article dir="rtl">
  <img class="float-left" src="/img/green-mountains.jpg" />
  <img class="float-right" src="/img/green-mountains.jpg" />
  <p class="clear-end">...ربما يمكننا العيش بدون مكتبات</p>
</article>
```

### Disabling Clears
Use the `.clear-none` utility to reset any clears applied to an element.

```html
<article>
  <img class="float-left" src="/img/green-mountains.jpg" />
  <img class="float-right" src="/img/snow-mountains.jpg" />
  <p class="clear-none">Maybe we can live without libraries...</p>
</article>
```

### Responsive Design
Prefix a clear utility with a breakpoint variant like `md:` to apply the utility only at medium screen sizes and above.

```html
<p class="clear-left md:clear-none">
  <!-- Content -->
</p>
```
