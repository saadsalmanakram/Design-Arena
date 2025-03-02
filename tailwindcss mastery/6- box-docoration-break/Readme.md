# Box-Decoration-Break Utility

## Introduction

The `box-decoration-break` utility in CSS allows you to control how element fragments should be rendered across multiple lines, columns, or pages. This utility is particularly useful when dealing with multi-line text, multi-column layouts, or paginated content, ensuring a consistent appearance of backgrounds, borders, and other styles.

This utility provides two main classes to determine whether an element’s decoration should be treated as a continuous fragment or as separate blocks.

## Available Classes

| Class | Style Applied |
|----------------------|--------------------------------|
| `box-decoration-clone` | `box-decoration-break: clone;` |
| `box-decoration-slice` | `box-decoration-break: slice;` |

## Examples

### Basic Example
Use the `box-decoration-slice` and `box-decoration-clone` utilities to control whether properties like background, border, border-image, box-shadow, clip-path, margin, and padding should be rendered as a continuous fragment or as distinct blocks:

```html
<!-- box-decoration-slice -->
<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
  Hello<br />World
</span>

<!-- box-decoration-clone -->
<span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
  Hello<br />World
</span>
```

### Responsive Design
To apply `box-decoration-break` behavior at specific breakpoints, use responsive prefixes like `md:` to apply the utility only at medium screen sizes and above:

```html
<div class="box-decoration-clone md:box-decoration-slice ...">
  <!-- Content -->
</div>
```

For more information on responsive design and applying utility variants, refer to the official [variants documentation](#).

## Usage Notes
- The `box-decoration-break` property is useful for multi-line text and multi-column layouts where you need to control visual continuity.
- The `clone` value ensures styles like background and borders are repeated on each fragment.
- The `slice` value allows decorations to flow naturally without duplication.
- Browser support varies, so test thoroughly in different environments.

