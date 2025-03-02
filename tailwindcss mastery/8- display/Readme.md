# Display Utilities

## Introduction

The `display` utility provides a set of CSS classes that control the display behavior of elements. These utilities help define how elements are rendered within the document flow, allowing developers to create flexible layouts and responsive designs efficiently.

With these utilities, you can control whether an element behaves as a block, inline, flex, grid, table, or hidden element, among other options. This allows for better organization of page content and layout structuring.

## Available Classes

### Basic Display Types
| Class | Styles |
|-------|--------|
| `inline` | `display: inline;` |
| `block` | `display: block;` |
| `inline-block` | `display: inline-block;` |
| `flow-root` | `display: flow-root;` |
| `flex` | `display: flex;` |
| `inline-flex` | `display: inline-flex;` |
| `grid` | `display: grid;` |
| `inline-grid` | `display: inline-grid;` |
| `contents` | `display: contents;` |
| `hidden` | `display: none;` |

### Table Display Types
| Class | Styles |
|-------|--------|
| `table` | `display: table;` |
| `inline-table` | `display: inline-table;` |
| `table-caption` | `display: table-caption;` |
| `table-cell` | `display: table-cell;` |
| `table-column` | `display: table-column;` |
| `table-column-group` | `display: table-column-group;` |
| `table-footer-group` | `display: table-footer-group;` |
| `table-header-group` | `display: table-header-group;` |
| `table-row-group` | `display: table-row-group;` |
| `table-row` | `display: table-row;` |

### Accessibility Utilities
| Class | Styles |
|-------|--------|
| `sr-only` | Visually hides an element while keeping it accessible to screen readers. |
| `not-sr-only` | Restores visibility for screen readers and sighted users. |

## Usage Examples

### Block and Inline Elements
```html
<p>
  When controlling text flow, using the CSS property
  <span class="inline">display: inline</span> will wrap the text normally.
</p>
<p>
  Using <span class="inline-block">display: inline-block</span> prevents text from extending beyond its parent.
</p>
<p>
  Using <span class="block">display: block</span> places the element on its own line.
</p>
```

### Flexbox
```html
<div class="flex items-center">
  <img src="path/to/image.jpg" />
  <div>
    <strong>Andrew Alfred</strong>
    <span>Technical Advisor</span>
  </div>
</div>
```

### Grid
```html
<div class="grid grid-cols-3 grid-rows-3 gap-4">
  <!-- Grid items here -->
</div>
```

### Hiding Elements
```html
<div class="hidden">This element will not be visible.</div>
```

### Screen Reader Only Content
```html
<a href="#">
  <svg><!-- Icon --></svg>
  <span class="sr-only">Settings</span>
</a>
```

## Responsive Design
You can use breakpoints to control display utilities at different screen sizes:
```html
<div class="flex md:inline-flex">
  <!-- Element adapts at different breakpoints -->
</div>
```
