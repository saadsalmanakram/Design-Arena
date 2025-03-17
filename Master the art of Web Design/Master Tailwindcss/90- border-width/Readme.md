# Border Width Utilities

## Introduction
The `border-width` utility provides control over the width of an element's borders. It includes predefined classes for setting uniform border widths, customizing specific sides, and applying logical properties. Additionally, it supports responsive design, dynamic values, and child element separation through `divide` utilities.

This utility helps maintain consistent border styling across projects while allowing flexibility for custom designs.

## Classes and Styles

### General Border Width
| Class | Styles |
|-------|--------|
| `border` | `border-width: 1px;` |
| `border-<number>` | `border-width: <number>px;` |
| `border-(length:<custom-property>)` | `border-width: var(<custom-property>);` |
| `border-[<value>]` | `border-width: <value>;` |

### Horizontal Borders (Inline)
| Class | Styles |
|-------|--------|
| `border-x` | `border-inline-width: 1px;` |
| `border-x-<number>` | `border-inline-width: <number>px;` |
| `border-x-(length:<custom-property>)` | `border-inline-width: var(<custom-property>);` |
| `border-x-[<value>]` | `border-inline-width: <value>;` |

### Vertical Borders (Block)
| Class | Styles |
|-------|--------|
| `border-y` | `border-block-width: 1px;` |
| `border-y-<number>` | `border-block-width: <number>px;` |
| `border-y-(length:<custom-property>)` | `border-block-width: var(<custom-property>);` |
| `border-y-[<value>]` | `border-block-width: <value>;` |

### Specific Sides
| Class | Styles |
|-------|--------|
| `border-t` | `border-top-width: 1px;` |
| `border-r` | `border-right-width: 1px;` |
| `border-b` | `border-bottom-width: 1px;` |
| `border-l` | `border-left-width: 1px;` |
| `border-s` | `border-inline-start-width: 1px;` |
| `border-e` | `border-inline-end-width: 1px;` |

### Dividing Borders (Between Children)
| Class | Styles |
|-------|--------|
| `divide-x` | Adds a border between child elements horizontally. |
| `divide-x-<number>` | `border-inline-end-width: <number>px;` (applies between elements) |
| `divide-y` | Adds a border between child elements vertically. |
| `divide-y-<number>` | `border-bottom-width: <number>px;` (applies between elements) |
| `divide-x-reverse` | `--tw-divide-x-reverse: 1;` (for reversed flex order) |
| `divide-y-reverse` | `--tw-divide-y-reverse: 1;` (for reversed flex order) |

## Examples

### Basic Border Width
```html
<div class="border border-indigo-600"></div>
<div class="border-2 border-indigo-600"></div>
<div class="border-4 border-indigo-600"></div>
<div class="border-8 border-indigo-600"></div>
```

### Individual Sides
```html
<div class="border-t-4 border-indigo-500"></div>
<div class="border-r-4 border-indigo-500"></div>
<div class="border-b-4 border-indigo-500"></div>
<div class="border-l-4 border-indigo-500"></div>
```

### Horizontal and Vertical Borders
```html
<div class="border-x-4 border-indigo-500"></div>
<div class="border-y-4 border-indigo-500"></div>
```

### Logical Properties (LTR & RTL Support)
```html
<div dir="ltr">
  <div class="border-s-4 border-indigo-500"></div>
</div>
<div dir="rtl">
  <div class="border-s-4 border-indigo-500"></div>
</div>
```

### Dividing Child Elements
```html
<div class="grid grid-cols-3 divide-x-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Reversed Order Children
```html
<div class="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-200">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Custom Border Widths
```html
<div class="border-[2vw]"></div>
<div class="border-(length:--my-border-width)"></div>
```

### Responsive Border Widths
```html
<div class="border-2 md:border-t-4"></div>
```

## Conclusion
The `border-width` utility provides a powerful way to customize border thickness across different elements and layouts. Whether applying global styles, targeting specific sides, or handling dynamic values, this utility ensures flexibility and consistency in design.

