# Break-Inside Utility

## Introduction

The `break-inside` utility in CSS allows you to control how a column or page should break within an element. This is especially useful for preventing awkward breaks in content, ensuring readability and a smoother layout in multi-column designs and paginated contexts.

This utility provides various classes to manage breaking behavior within an element, preventing or allowing breaks as needed.

## Available Classes

| Class | Style Applied |
|--------|----------------|
| `break-inside-auto` | `break-inside: auto;` |
| `break-inside-avoid` | `break-inside: avoid;` |
| `break-inside-avoid-page` | `break-inside: avoid-page;` |
| `break-inside-avoid-column` | `break-inside: avoid-column;` |

## Examples

### Basic Example
Use utilities like `break-inside-avoid-column` and `break-inside-avoid-page` to control how a column or page break should behave within an element:

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

### Responsive Design
To apply `break-inside` behavior at specific breakpoints, use responsive prefixes like `md:` to apply the utility only at medium screen sizes and above:

```html
<div class="break-inside-avoid-column md:break-inside-auto ...">
  <!-- Content -->
</div>
```

For more information on responsive design and applying utility variants, refer to the official [variants documentation](#).

## Usage Notes
- The `break-inside` property is mainly used to control content flow in multi-column and paginated layouts.
- It prevents undesirable breaks in text or elements that should remain grouped together.
- Some values may have limited support in certain browsers.
