# Isolation Utilities

## Overview
Utilities for controlling whether an element should explicitly create a new stacking context.

## Classes and Styles

| Class            | Styles               |
|-----------------|---------------------|
| `isolate`       | `isolation: isolate;` |
| `isolation-auto` | `isolation: auto;`   |

## Examples

### Basic Example
Use the `isolate` and `isolation-auto` utilities to control whether an element should explicitly create a new stacking context:

```html
<div class="isolate ...">
  <!-- Content that requires a new stacking context -->
</div>
```

### Responsive Design
Prefix an isolation utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="isolate md:isolation-auto ...">
  <!-- Responsive stacking context control -->
</div>
```
