# Break-Before Utility

## Introduction

The `break-before` utility in CSS allows you to control how a column or page should break before an element. This utility is particularly useful in multi-column layouts and paginated content where you need to manage content flow and readability.

This utility provides various classes to specify the break behavior before an element, ensuring that content is organized as intended in responsive and print layouts.

## Available Classes

| Class | Style Applied |
|--------|----------------|
| `break-before-auto` | `break-before: auto;` |
| `break-before-avoid` | `break-before: avoid;` |
| `break-before-all` | `break-before: all;` |
| `break-before-avoid-page` | `break-before: avoid-page;` |
| `break-before-page` | `break-before: page;` |
| `break-before-left` | `break-before: left;` |
| `break-before-right` | `break-before: right;` |
| `break-before-column` | `break-before: column;` |

## Examples

### Basic Example
Use utilities like `break-before-column` and `break-before-page` to control how a column or page break should behave before an element:

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-before-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

### Responsive Design
To apply `break-before` behavior at specific breakpoints, use responsive prefixes like `md:` to apply the utility only at medium screen sizes and above:

```html
<div class="break-before-column md:break-before-auto ...">
  <!-- Content -->
</div>
```

For more information on responsive design and applying utility variants, refer to the official [variants documentation](#).

## Usage Notes
- The `break-before` property is commonly used in print layouts and multi-column layouts.
- It helps control content flow in paginated contexts.
- Some values may not be supported in all browsers, especially older versions.

